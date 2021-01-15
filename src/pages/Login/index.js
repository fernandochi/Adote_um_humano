import { useState } from "react";
import * as yup from "yup";
import axios from "axios";
import jwt from "jsonwebtoken";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {
  Container,
  Title,
  Form,
  Label,
  Input,
  Errors,
  Button,
  Link,
} from "./style";

const LoginUser = () => {
  const history = useHistory();

  const [error, setError] = useState("");

  let schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Campo com no mínimo 6 caracteres")
      .required("Campo obrigatório"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    const urlLogin = "https://adote-um-humano.herokuapp.com/login";

    axios
      .post(urlLogin, data)
      .then((res) => {
        window.localStorage.setItem("accessToken", res.data.accessToken);

        const id = jwt.decode(res.data.accessToken).sub;

        const urlUser = `https://adote-um-humano.herokuapp.com/users/${id}`;

        axios
          .get(urlUser, {
            headers: { Authorization: `Bearer ${res.data.accessToken}` },
          })
          .then((res) => {
            res.data.donor ? history.push("/donor") : history.push("/grantee");
          });
      })
      .catch(() => setError("Email/Senha inválida!"));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleForm)}>
        <Title>Login</Title>

        <Errors>{error}</Errors>

        <Label htmlFor="email">Email</Label>
        <Input name="email" ref={register} />
        <Errors>{errors.email?.message}</Errors>

        <Label htmlFor="password">Senha</Label>
        <Input name="password" type="password" ref={register} />
        <Errors>{errors.password?.message}</Errors>

        <Button type="submit">Login</Button>
        <Link onClick={() => history.push("/register")}>
          Ainda não é cadastrado? Faça seu cadastro aqui
        </Link>
      </Form>
    </Container>
  );
};

export default LoginUser;
