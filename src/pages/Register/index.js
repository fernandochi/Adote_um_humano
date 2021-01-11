import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import {
  Container,
  Title,
  Form,
  Label,
  Input,
  TextArea,
  Errors,
  Button,
  Link,
} from "./style";

const RegisterUser = () => {
  const history = useHistory();
  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[a-zA-Z\s]+$/, "Campo deve conter apenas letras")
      .required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Campo com no mínimo 6 caracteres")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Campo deve conter pelo menos uma letra maiúscula, um caracter especial e um número."
      )
      .required("Campo obrigatório"),
    contact: yup
      .number()
      .integer("Deve ser um número inteiro")
      .positive("Não deve ser um número negativo")
      .typeError("Deve conter um número")
      .required("Campo obrigatório"),
    address: yup.string().required("Campo obrigatório"),
    comments: yup.string(),
    typeOfUser: yup
      .string()
      .oneOf(["donor", "adopter"])
      .required("Um dos campos deve ser marcado"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Title>Cadastro</Title>
      <Form onSubmit={handleSubmit(handleForm)}>
        <Label htmlFor="name">Nome</Label>
        <Input name="name" ref={register} />
        <Errors>{errors.name?.message}</Errors>
        <Label htmlFor="email">Email</Label>
        <Input name="email" ref={register} />
        <Errors>{errors.email?.message}</Errors>
        <Label htmlFor="password">Senha</Label>
        <Input name="password" type="password" ref={register} />
        <Errors>{errors.password?.message}</Errors>
        <Label htmlFor="contact">Telefone</Label>
        <Input name="contact" ref={register} />
        <Errors>{errors.contact?.message}</Errors>
        <Label htmlFor="address">Endereço</Label>
        <Input name="address" ref={register} />
        <Errors>{errors.address?.message}</Errors>
        <Label htmlFor="comments">Observações</Label>
        <TextArea name="comments" ref={register} />
        <Errors>{errors.comments?.message}</Errors>
        <Label htmlFor="typeOfUser">Doador</Label>
        <Input type="radio" name="typeOfUser" value="donor" ref={register} />
        <Label htmlFor="typeOfUser">Adotante</Label>
        <Input type="radio" name="typeOfUser" value="adopter" ref={register} />
        <Errors>{errors.typeOfUser?.message}</Errors>
        <Button type="submit">Cadastrar</Button>
        <Link onClick={() => history.push("/login")}>
          Já é cadastrado? Faça seu login aqui
        </Link>
      </Form>
    </Container>
  );
};

export default RegisterUser;
