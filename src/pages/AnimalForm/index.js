import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
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

  const handleForm = (data) => {
    console.log(data);
  };

  const handleAvatar = (ev) => {
    ev.preventDefault();

    const data = new FormData();

    data.append("image", ev.target.files[0]);
    axios
      .post("https://api.imgur.com/3/upload", data, {
        headers: {
          Authorization: `Client-ID {511f1ba99da58a2}`,
        },
      })
      .then((res) => {
        console.log("feito", res);
      })
      .catch((err) => console.error("avatar não foi alterado.", err));
  };
  return (
    <Container>
      <Form>
        <Label htmlFor="avatar">Foto</Label>
        <input id="avatar" name="avatar" type="file" onChange={handleAvatar} />
      </Form>
      <Form onSubmit={handleSubmit(handleForm)}>
        <Title>Novo Pet</Title>
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
