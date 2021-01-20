import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ImgPreview from "../../components/ImgPreview";
import {
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
} from "../../pages/Register/style";
const $CLIENT_ID = "511f1ba99da58a2";

const AnimalForm = ({ ReqError, SetReqError }) => {
  const history = useHistory();
  const id = window.localStorage.getItem("id");

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
    myHeaders.append("Authorization", `Client-ID ${$CLIENT_ID}`);

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
      .post(
        "https://adote-um-humano.herokuapp.com/animals",
        data,

        {
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem(
              "accessToken"
            )}`,
          },
        }
      )
      .then((res) => history.push("/donor"))
      .catch((err) => SetReqError(true));
  };

  return (
    <FormAnimals onSubmit={handleSubmit(handleForm)}>
      <Title>Novo Pet</Title>
      <ImgPreview register={register} />
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
        <input ref={register} name="sexo" type="radio" id="male" value="male" />
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
  );
};

export default AnimalForm;
