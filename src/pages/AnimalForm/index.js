import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  GridContainer,
  Title,
  FormAnimals,
  Label,
  Input,
  Checkbox,
  CheckboxContainer,
  Errors,
  Button,
  Select,
  TextArea,
  InputImg,
  Img,
  ShowCase,
  HelpDiv,
} from "../Register/style";
import PopUpDiv from "./popup.jsx";
import { $REFRESH_TOKEN, $CLIENT_ID, $CLIENTE_SECRET } from "./dados";

const ResgisterAnimal = () => {
  const history = useHistory();
  const [ImageAnimalResponse, setIAR] = useState({});
  const [ReqError, SetReqError] = useState(false);
  useEffect(() => {
    if (window.localStorage.getItem("accessToken")) {
      return;
    }
    axios
      .post("https://api.imgur.com/oauth2/token", {
        refresh_token: $REFRESH_TOKEN,
        client_id: $CLIENT_ID,
        client_secret: $CLIENTE_SECRET,
        grant_type: "refresh_token",
      })
      .then((res) => {
        window.localStorage.setItem("accessToken", res.data.access_token);
      })
      .catch((err) => SetReqError(true));
  }, []);

  let schema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[a-zA-Z\s]+$/, "Campo deve conter apenas letras")
      .required("Campo obrigatório"),
    age: yup
      .number()
      .integer("Informe um número positivo")
      .positive("Informe um número positivo")
      .required("Campo obrigatório"),
    race: yup
      .string()
      .matches(/^[a-zA-Z\s]+$/, "Campo deve conter apenas letras")
      .required("Campo obrigatório"),
    size: yup.string().required("Campo obrigatório"),
    sexo: yup.string().required("Campo obrigatório"),
    color: yup
      .string()
      .matches(/^[a-zA-Z\s]+$/, "Campo deve conter apenas letras")
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = async (data) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${window.localStorage.getItem("accessToken")}`
    );

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
        setIAR(result.data);
      })
      .catch((error) => SetReqError(true));
    await axios
      .post(
        "https://adote-um-humano.herokuapp.com/animals",
        {
          ...data,
          donorId: Number(window.localStorage.getItem("userId")),
          avatar: ImageAnimalResponse.link,
          img_ID: ImageAnimalResponse.id,
          deletehash: ImageAnimalResponse.deletehash,
        },
        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => history.push("/"))
      .catch((err) => SetReqError(true));
  };

  const handleCloseInfo = () => {
    SetReqError(false);
  };

  const previewImagem = (ev) => {
    const $ = document.querySelector.bind(document);
    const img_src = $(".preview-img");
    let fileToUpload = ev.target.files[0];
    if (fileToUpload === undefined) {
      return;
    }

    const reader = new FileReader();

    reader.onload = (ev) => (img_src.src = ev.target.result);
    reader.readAsDataURL(fileToUpload);
  };

  return (
    <>
      <PopUpDiv isVisible={ReqError} closeInfo={handleCloseInfo} />
      <GridContainer>
        <HelpDiv>
          <p>
            Para cadastrar seu amigo pet, basta preencher o formulário abaixo.
            Escolha uma foto bem <b>bonitona</b> e preencha os demais campos
            para ajudar os candidatos a encontrarem seu pet mais fácil
          </p>
        </HelpDiv>
        <FormAnimals onSubmit={handleSubmit(handleForm)}>
          <Title>Novo Pet</Title>
          <Img className="preview-img" />
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
          <Input name="name" ref={register} />
          <Errors>{errors.name?.message}</Errors>
          <Label htmlFor="age">Idade</Label>
          <Input type="number" name="age" ref={register} />
          <Errors>{errors.age?.message}</Errors>
          <Label htmlFor="race">Raça</Label>
          <Input name="race" ref={register} />
          <Errors>{errors.race?.message}</Errors>
          <Label htmlFor="size">Porte</Label>
          <Select id="size" name="size" ref={register}>
            <option value="big">Grande</option>
            <option value="medium">Médio</option>
            <option value="small">Pequeno</option>
          </Select>
          <Errors>{errors.size?.message}</Errors>
          <Label htmlFor="sexo">Sexo</Label>
          <CheckboxContainer>
            <input
              ref={register}
              name="sexo"
              type="radio"
              id="male"
              value="male"
            />
            <Label htmlFor="male">Macho</Label>
            <input
              ref={register}
              name="sexo"
              type="radio"
              id="female"
              value="female"
            />
            <Label htmlFor="female">Femea</Label>
          </CheckboxContainer>
          <Errors>{errors.sexo?.message}</Errors>
          <Label htmlFor="color">Cor</Label>
          <Input name="color" ref={register} />
          <Errors>{errors.color?.message}</Errors>
          <CheckboxContainer>
            <Checkbox>
              <Label htmlFor="vacinated">É vacinado?</Label>
              <Input type="checkbox" name="vacinated" ref={register} />
            </Checkbox>
          </CheckboxContainer>
          <CheckboxContainer>
            <Checkbox>
              <Label htmlFor="castrated">É castrado?</Label>
              <Input type="checkbox" name="castrated" ref={register} />
            </Checkbox>
          </CheckboxContainer>
          <Label htmlFor="obs">Observações adicionais</Label>
          <TextArea id="obs" name="obs" ref={register} />
          <Button type="submit">Cadastrar pet</Button>
        </FormAnimals>
        <ShowCase>
          <p>Os seus atuais animais</p>
          <section>
            {/* Aqui vai renderizar com os components card coms animais do usuário que está cadastrando */}
          </section>
        </ShowCase>
      </GridContainer>
    </>
  );
};

export default ResgisterAnimal;
