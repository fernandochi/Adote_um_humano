import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Container,
  Title,
  Form,
  Label,
  Input,
  Checkbox,
  CheckboxContainer,
  Errors,
  Button,
  Select,
  TextArea,
} from "../Register/style";

const ResgisterAnimal = () => {
  const [ImageAnimalResponse, setIAR] = useState({});
  useEffect(() => {
    window.localStorage.setItem("userId", 1);
    axios
      .post("https://api.imgur.com/oauth2/token", {
        refresh_token: "9f83fdcfa971c61d25aa8a83fbed7a871cd7d40a",
        client_id: "511f1ba99da58a2",
        client_secret: "91604d541c1861443eb98957efc9597365c8fd4a",
        grant_type: "refresh_token",
      })
      .then((res) => {
        window.localStorage.setItem("accessToken", res.data.access_token);
      })
      .catch((err) => console.log(err));
  }, []);

  let schema = yup.object().shape({
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
        console.log(result.data);
        setIAR(result.data);
      })
      .catch((error) => console.log("error", error));
    await axios
      .post(
        "https://adote-um-humano.herokuapp.com/animals",
        {
          ...data,
          userId: Number(window.localStorage.getItem("userId")),
          avatar: ImageAnimalResponse.link,
          img_ID: ImageAnimalResponse.id,
          deletehash: ImageAnimalResponse.deletehash,
        },
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZlcm5hbmRvQGVtYWlsLmNvbSIsImlhdCI6MTYxMDU3NTgwNiwiZXhwIjoxNjEwNTc5NDA2LCJzdWIiOiIxIn0.vBE7P8-XFQ0gyXMHxb-S7W810i3i2ouewkutRuCfBEI`,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleForm)}>
        <Title>Novo Pet</Title>
        <Label htmlFor="avatar">Foto</Label>
        <input id="avatar" name="avatar" type="file" ref={register} />
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
          <Input
            ref={register}
            name="sexo"
            type="radio"
            id="male"
            value="male"
          />
          <Label htmlFor="male">Macho</Label>
          <Input
            ref={register}
            name="sexo"
            type="radio"
            id="female"
            value="female"
          />
          <Label htmlFor="female">Femea</Label>
          <Errors>{errors.sexo?.message}</Errors>
        </CheckboxContainer>
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
      </Form>
    </Container>
  );
};

export default ResgisterAnimal;
