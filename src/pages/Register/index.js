import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const RegisterUser = () => {
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
    typeOfUser: yup.string().oneOf(["donor", "adopter"]).required(),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleForm = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleForm)}>
        <label htmlFor="name">Nome</label>
        <input name="name" ref={register} />
        <span>{errors.name?.message}</span>
        <label htmlFor="email">Email</label>
        <input name="email" ref={register} />
        <span>{errors.email?.message}</span>
        <label htmlFor="password">Senha</label>
        <input name="password" type="password" ref={register} />
        <span>{errors.password?.message}</span>
        <label htmlFor="contact">Telefone</label>
        <input name="contact" ref={register} />
        <span>{errors.contact?.message}</span>
        <label htmlFor="address">Endereço</label>
        <input name="address" ref={register} />
        <span>{errors.address?.message}</span>
        <label htmlFor="comments">Observações</label>
        <textarea name="comments" ref={register} />
        <span>{errors.comments?.message}</span>
        <label htmlFor="typeOfUser">Doador</label>
        <input type="radio" name="typeOfUser" value="donor" ref={register} />
        <label htmlFor="typeOfUser">Adotante</label>
        <input type="radio" name="typeOfUser" value="adopter" ref={register} />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default RegisterUser;
