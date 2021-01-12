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
  Checkbox,
  CheckboxContainer,
  Errors,
  Button,
  Link,
} from "./style";

const RegisterUser = () => {
  const history = useHistory();
  let schema = yup.object().shape({
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
      .typeError("Campo deve conter um número")
      .required("Campo obrigatório"),
    address: yup.string().required("Campo obrigatório"),
    donor: yup.bool(),
    adopter: yup.bool(),
  });

  schema = schema.test("CheckboxTest", null, (obj) => {
    if (obj.donor || obj.adopter) {
      return true;
    }
    return new yup.ValidationError(
      "Você deve selecionar um dos campos",
      null,
      "Donor/Adopter"
    );
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleForm)}>
        <Title>Cadastro</Title>
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
        <CheckboxContainer>
          <Checkbox>
            <Label htmlFor="donor">Doador</Label>
            <Input type="checkbox" name="donor" ref={register} />
          </Checkbox>
          <Checkbox>
            <Label htmlFor="adopter">Adotante</Label>
            <Input type="checkbox" name="adopter" ref={register} />
          </Checkbox>
        </CheckboxContainer>
        <Button type="submit">Cadastrar</Button>
        <Link onClick={() => history.push("/login")}>
          Já é cadastrado? Faça seu login aqui
        </Link>
      </Form>
    </Container>
  );
};

export default RegisterUser;
