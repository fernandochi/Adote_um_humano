import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  FormAnimals,
  Title,
  Img,
  Label,
  InputImg,
  Input,
  Select,
  Checkbox,
  CheckboxContainer,
  TextArea,
  Button,
  Errors,
} from "../Register/style";
import PopUpDiv from "../AnimalForm/popup.jsx";

const EditAnimal = () => {
  const history = useHistory();

  const [ImageAnimalResponse, setIAR] = useState({});
  const [ReqError, SetReqError] = useState(false);
  const id = window.localStorage.getItem("id") || 1;
  const selector = useSelector((state) => state.animal);
  const [AnimalCurrentEditing, setACE] = useState(
    JSON.parse(window.localStorage.getItem("animal"))
  );
  let schema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[a-zA-Z\s]+$/, "Campo deve conter apenas letras"),
    age: yup
      .number()
      .integer("Informe um número positivo")
      .positive("Informe um número positivo"),
    race: yup
      .string()
      .matches(/^[a-zA-Z\s]+$/, "Campo deve conter apenas letras"),
    color: yup
      .string()
      .matches(/^[a-zA-Z\s]+$/, "Campo deve conter apenas letras"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    if (data.avatar.length === 0) {
      data.avatar = AnimalCurrentEditing.avatar;
      data.donorId = AnimalCurrentEditing.donorId;
      data.img_ID = AnimalCurrentEditing.img_ID;
      data.deletehash = AnimalCurrentEditing.deletehash;
      axios
        .put(
          `https://adote-um-humano.herokuapp.com/animals/${AnimalCurrentEditing.id}`,

          data,

          {
            headers: {
              Authorization: `Bearer ${window.localStorage.getItem(
                "accessToken"
              )}`,
            },
          }
        )
        .then((res) => console.log("Atualizou"))
        .catch((err) => SetReqError(true));
    }

    console.log(data);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${window.localStorage.getItem("imgToken")}`
    );

    var formdata = new FormData();
    formdata.append("image", data.avatar[0]);

    // var requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: formdata,
    //   redirect: "follow",
    // };

    // await fetch("https://api.imgur.com/3/image", requestOptions)
    //   .then((response) => response.json())
    //   .then((result) => {
    //     setIAR(result.data);
    //   })
    //   .catch((error) => SetReqError(true));
    // await axios
    //   .put(
    //     `https://adote-um-humano.herokuapp.com/animals/${AnimalCurrentEditing.id}`,

    //     data,

    //     {
    //       headers: {
    //         Authorization: `Bearer ${window.localStorage.getItem(
    //           "accessToken"
    //         )}`,
    //       },
    //     }
    //   )
    //   .then((res) => history.push("/donor"))
    //   .catch((err) => SetReqError(true));
  };

  const handleCloseInfo = () => {
    SetReqError(false);
  };

  const previewImagem = (ev) => {
    const $ = document.querySelector.bind(document);
    const img_src = $(".preview-img");
    let fileToUpload = ev.target.files[0];
    if (fileToUpload === undefined) {
      return (img_src.src = AnimalCurrentEditing.avatar);
    }

    const reader = new FileReader();

    reader.onload = (ev) => (img_src.src = ev.target.result);
    reader.readAsDataURL(fileToUpload);
  };

  return (
    <>
      <PopUpDiv isVisible={ReqError} closeInfo={handleCloseInfo} />

      <FormAnimals onSubmit={handleSubmit(handleForm)}>
        <Title>Novo Pet</Title>
        <Img className="preview-img" src={AnimalCurrentEditing.avatar} />
        <Label htmlFor="avatar">Foto</Label>
        <InputImg
          id="avatar"
          name="avatar"
          type="file"
          ref={register}
          onChange={previewImagem}
          accept="image/*"
        />
        <Label htmlFor="name">Nome</Label>
        <Input
          name="name"
          ref={register}
          value={AnimalCurrentEditing.name}
          onChange={(ev) => {
            setACE({ ...AnimalCurrentEditing, name: ev.target.value });
          }}
        />
        <Errors>{errors.name?.message}</Errors>
        <Label htmlFor="age">Idade</Label>
        <Input
          type="number"
          name="age"
          ref={register}
          value={AnimalCurrentEditing.age}
          onChange={(ev) => {
            setACE({ ...AnimalCurrentEditing, age: ev.target.value });
          }}
        />
        <Errors>{errors.age?.message}</Errors>
        <Label htmlFor="race">Raça</Label>
        <Input
          name="race"
          ref={register}
          value={AnimalCurrentEditing.race}
          onChange={(ev) => {
            setACE({ ...AnimalCurrentEditing, race: ev.target.value });
          }}
        />
        <Errors>{errors.race?.message}</Errors>
        <Label htmlFor="size">Porte</Label>
        <Select
          id="size"
          name="size"
          ref={register}
          value={AnimalCurrentEditing.size}
          onChange={(ev) => {
            setACE({ ...AnimalCurrentEditing, size: ev.target.value });
          }}
        >
          <option value="big">Grande</option>
          <option value="medium">Médio</option>
          <option value="small">Pequeno</option>
        </Select>
        <Errors>{errors.size?.message}</Errors>
        <Label htmlFor="sexo">Sexo</Label>
        <CheckboxContainer>
          <input
            checked={AnimalCurrentEditing.sexo === "male" ? true : false}
            ref={register}
            name="sexo"
            type="radio"
            id="male"
            value="male"
            onChange={(ev) =>
              setACE({ ...AnimalCurrentEditing, sexo: ev.target.value })
            }
          />
          <Label htmlFor="male">Macho</Label>
          <input
            checked={AnimalCurrentEditing.sexo === "male" ? false : true}
            ref={register}
            name="sexo"
            type="radio"
            id="female"
            value="female"
            onChange={(ev) =>
              setACE({ ...AnimalCurrentEditing, sexo: ev.target.value })
            }
          />
          <Label htmlFor="female">Femea</Label>
        </CheckboxContainer>
        <Errors>{errors.sexo?.message}</Errors>
        <Label htmlFor="color">Cor</Label>
        <Input
          name="color"
          ref={register}
          value={AnimalCurrentEditing.color}
          onChange={(ev) => {
            setACE({ ...AnimalCurrentEditing, color: ev.target.value });
          }}
        />
        <Errors>{errors.color?.message}</Errors>
        <CheckboxContainer>
          <Checkbox>
            <Label htmlFor="vacinated">É vacinado?</Label>
            <Input
              type="checkbox"
              name="vacinated"
              ref={register}
              checked={AnimalCurrentEditing.vacinated}
              onChange={(ev) =>
                setACE({
                  ...AnimalCurrentEditing,
                  vacinated: !AnimalCurrentEditing.vacinated,
                })
              }
            />
          </Checkbox>
        </CheckboxContainer>
        <CheckboxContainer>
          <Checkbox>
            <Label htmlFor="castrated">É castrado?</Label>
            <Input
              type="checkbox"
              name="castrated"
              ref={register}
              checked={AnimalCurrentEditing.castrated}
              onChange={(ev) =>
                setACE({
                  ...AnimalCurrentEditing,
                  castrated: !AnimalCurrentEditing.castrated,
                })
              }
            />
          </Checkbox>
        </CheckboxContainer>
        <Label htmlFor="obs">Observações adicionais</Label>
        <TextArea
          id="obs"
          name="obs"
          ref={register}
          value={AnimalCurrentEditing.obs}
          onChange={(ev) =>
            setACE({ ...AnimalCurrentEditing, obs: ev.target.value })
          }
        />
        <Button type="submit">Cadastrar pet</Button>
      </FormAnimals>
    </>
  );
};

export default EditAnimal;
