import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  Title,
  FormAnimals,
  Label,
  Input,
  Errors,
  Button,
} from "../../pages/Register/style";
import { useState, useEffect } from "react";
import ImgPreview from "../ImgPreview";
import AnimalNotFound from "../../assets/img/not_found.jpg";
const bcrypt = require("bcryptjs");

const EditProfile = () => {
  const [user, setUser] = useState({});
  const [changePassword, setChangePassword] = useState(true);
  const history = useHistory();
  const id = window.localStorage.getItem("id");
  useEffect(() => {
    axios
      .get(`https://adote-um-humano.herokuapp.com/users/${id}`, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        setUser(res.data);
        if (res.data.avatar === undefined) {
          setUser({ ...user, avatar: AnimalNotFound });
        }
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.status === 401) {
          window.localStorage.clear();
          history.push("/login");
        }
      });
  }, []);

  let schema = yup.object().shape({
    name: yup
      .string()
      .matches(/^[a-zA-z\s]+$/, "Campo deve conter apenas letras"),
    email: yup.string().email("Email inválido"),
    password: yup
      .string()
      .min(6, "Campo com no mínimo 6 caracteres")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Campo deve conter pelo menos uma letra maiúscula, um caracter especial e um número."
      ),
    contact: yup
      .number()
      .integer("Deve ser um número inteiro")
      .positive("Não deve ser um número negativo")
      .typeError("Campo deve conter um número"),
    address: yup.string(),
    donor: yup.bool(),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = async (data) => {
    const url = `https://adote-um-humano.herokuapp.com/users/${id}`;

    if (data.password) {
      bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(data.password, salt, function (err, hash) {
          data.password = hash;
        });
      });
    }

    data.img_ID = user.img_ID;
    data.deletehash = user.deletehash;

    if (data.avatar.length === 0) {
      data.avatar = user.avatar;
      return axios
        .patch(
          url,
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
          if (res.data.donor) {
            return history.push("/donor");
          }
          history.push("/adopter");
        });
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
        data.img_ID = result.data.id;
        data.deletehash = result.data.deletehash;
      })
      .catch((error) => console.log(error));

    axios
      .patch(url, data, {
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
        },
      })
      .then((res) => {
        if (res.data.donor) {
          return history.push("/donor");
        }
        history.push("/adopter");
      });
  };

  return (
    <FormAnimals onSubmit={handleSubmit(handleForm)}>
      <Title>Atualize seu perfil</Title>

      <ImgPreview register={register} edit object={user} />

      <Label htmlFor="name">Nome</Label>
      <Input
        name="name"
        ref={register}
        value={user.name}
        onChange={(ev) => setUser({ ...user, name: ev.target.value })}
      />
      <Errors>{errors.name?.message}</Errors>

      <Label htmlFor="email">Email</Label>
      <Input
        name="email"
        ref={register}
        value={user.email}
        onChange={(ev) => setUser({ ...user, email: ev.target.value })}
        autoComplete="email"
      />
      <Errors>{errors.email?.message}</Errors>

      <Label htmlFor="changePassword">Alterar Senha?</Label>
      <input
        type="checkbox"
        id="changePassword"
        onChange={() => setChangePassword(!changePassword)}
      />

      <Label htmlFor="password">Senha</Label>
      <Input
        disabled={changePassword}
        name="password"
        type="password"
        ref={register}
        autoComplete="new-password"
      />
      <Errors>{errors.password?.message}</Errors>

      <Label htmlFor="contact">Telefone</Label>
      <Input
        name="contact"
        ref={register}
        value={user.contact}
        onChange={(ev) => setUser({ ...user, contact: ev.target.value })}
      />
      <Errors>{errors.contact?.message}</Errors>

      <Label htmlFor="address">Endereço</Label>
      <Input
        name="address"
        ref={register}
        value={user.address}
        onChange={(ev) => setUser({ ...user, address: ev.target.value })}
      />
      <Errors>{errors.address?.message}</Errors>

      <Button type="submit">Atualizar</Button>
    </FormAnimals>
  );
};

export default EditProfile;
