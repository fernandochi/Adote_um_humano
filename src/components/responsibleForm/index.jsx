import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import {
  Title,
  Form,
  Label,
  Input,
  Checkbox,
  CheckboxContainer,
  Button,
} from "../../pages/Register/style";
import { Container } from "./style";

const ResponsibleForm = () => {
  const history = useHistory();
  const { id } = useParams();
  let schema = yup.object().shape({
    residence: yup
      .string()
      .oneOf(["house", "apartment"])
      .required("Todos devem ser preenchidos"),
    security: yup
      .string()
      .oneOf(["yes", "no"])
      .required("Todos devem ser preenchidos"),
    vaccine: yup
      .string()
      .oneOf(["yes", "no"])
      .required("Todos devem ser preenchidos"),
    castration: yup
      .string()
      .oneOf(["yes", "no"])
      .required("Todos devem ser preenchidos"),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    const sendData = { responsible: data };
    const url = `https://adote-um-humano.herokuapp.com/users/${id}`;
    axios
      .put(
        url,
        { sendData },
        {
          headers: {
            Authorization:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlhaWFhYWFhYUBnbWFpbC5jb20iLCJpYXQiOjE2MTA2NDg0NTUsImV4cCI6MTYxMDY1MjA1NSwic3ViIjoiNSJ9.X76H4zptlZWhpb1UbgRVa2kC7ogusiEDCdQZbuHv-rE",
          },
        }
      )
      .then((res) => history.push("/animals"));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleForm)}>
        <Title>Adoção responsável</Title>
        <Label>Qual seu tipo de residência?</Label>
        <CheckboxContainer>
          <Checkbox>
            <Label htmlFor="house">Casa</Label>
            <Input type="radio" name="residence" value="house" ref={register} />
          </Checkbox>
          <Checkbox>
            <Label htmlFor="apartment">Apartamento</Label>
            <Input
              type="radio"
              name="residence"
              value="apartment"
              ref={register}
            />
          </Checkbox>
        </CheckboxContainer>
        <Label>
          Sua residência é segura? Muros altos, janelas teladas, etc
        </Label>
        <CheckboxContainer>
          <Checkbox>
            <Label htmlFor="security">Sim</Label>
            <Input type="radio" name="security" value="yes" ref={register} />
          </Checkbox>
          <Checkbox>
            <Label htmlFor="security">Não</Label>
            <Input type="radio" name="security" value="no" ref={register} />
          </Checkbox>
        </CheckboxContainer>
        <Label>Você poderá vacinar o animal caso ele precise?</Label>
        <CheckboxContainer>
          <Checkbox>
            <Label htmlFor="vaccine">Sim</Label>
            <Input type="radio" name="vaccine" value="yes" ref={register} />
          </Checkbox>
          <Checkbox>
            <Label htmlFor="vaccine">Não</Label>
            <Input type="radio" name="vaccine" value="no" ref={register} />
          </Checkbox>
        </CheckboxContainer>
        <Label>Você poderá castrar o animal caso ele precise?</Label>
        <CheckboxContainer>
          <Checkbox>
            <Label htmlFor="castration">Sim</Label>
            <Input type="radio" name="castration" value="yes" ref={register} />
          </Checkbox>
          <Checkbox>
            <Label htmlFor="castration">Não</Label>
            <Input type="radio" name="castration" value="no" ref={register} />
          </Checkbox>
        </CheckboxContainer>
        <Button type="submit">Enviar</Button>
      </Form>
    </Container>
  );
};

export default ResponsibleForm;
