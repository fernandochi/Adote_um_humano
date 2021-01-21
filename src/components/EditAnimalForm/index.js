import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import {
  FormAnimals,
  Title,
  Label,
  Input,
  Select,
  Checkbox,
  CheckboxContainer,
  TextArea,
  Button,
  Errors,
} from "../../pages/Register/style";
import ImgPreview from "../ImgPreview";
import { AdvertSection } from "./style";

const EditAnimalForm = ({ ReqError, SetReqError }) => {
  const [AnimalCurrentEditing, setACE] = useState(
    JSON.parse(window.localStorage.getItem("animal"))
  );

  const id = window.localStorage.getItem("id");
  const history = useHistory();

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

  const handleForm = async (data) => {
    data.donorId = AnimalCurrentEditing.donorId;
    data.img_ID = AnimalCurrentEditing.img_ID;
    data.deletehash = AnimalCurrentEditing.deletehash;
    if (data.avatar.length === 0) {
      data.avatar = AnimalCurrentEditing.avatar;
      return axios
        .patch(
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
        .then((res) => {
          history.push("/donor");
          window.localStorage.removeItem("animal");
        })
        .catch((err) => SetReqError(true));
    }

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Client-ID 511f1ba99da58a2`);

    var formdata = new FormData();
    formdata.append("image", data.avatar[0]);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    await fetch("https://api.imgur.com/3/image", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        data.avatar = result.data.link;
        data.donorId = Number(id);
        data.img_ID = result.data.id;
        data.deletehash = result.data.deletehash;
      })
      .catch((error) => SetReqError(true));
    await axios
      .patch(
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
      .then((res) => {
        history.push("/donor");
        window.localStorage.removeItem("animal");
      })
      .catch((err) => SetReqError(true));
  };

  return window.localStorage.getItem("animal") ? (
    <FormAnimals onSubmit={handleSubmit(handleForm)}>
      <Title>Atualizar</Title>
      <ImgPreview register={register} edit object={AnimalCurrentEditing} />
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
      <Select
        id="race"
        name="race"
        ref={register}
        value={AnimalCurrentEditing.race}
        onChange={(ev) =>
          setACE({ ...AnimalCurrentEditing, size: ev.target.value })
        }
      >
        <option value="cat">Gato</option>
        <option value="dog">Cachorro</option>
      </Select>
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
      <Button type="submit">Atualizar</Button>
    </FormAnimals>
  ) : (
    <AdvertSection>
      Você não selecionou nenhum animal para editar, volte para a sua página de{" "}
      <a href="#">animas cadastrados</a> e clique no ícone no canto superior
      direto para editar as informações do seu pet!
    </AdvertSection>
  );
};

export default EditAnimalForm;
