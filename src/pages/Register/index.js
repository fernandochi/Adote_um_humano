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
    contact: yup
      .number()
      .integer("Deve ser um número inteiro")
      .positive("Não deve ser um número negativo")
      .required("Campo obrigatório"),
    address: yup.string().required("Campo obrigatório"),
    comments: yup.string(),
    donor: yup.bool(),
    adopter: yup.bool(),
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
        <label htmlFor="contact">Telefone</label>
        <input name="contact" ref={register} />
        <span>{errors.contact?.message}</span>
        <label htmlFor="address">Endereço</label>
        <input name="address" ref={register} />
        <span>{errors.address?.message}</span>
        <label htmlFor="comments">Observações</label>
        <textarea name="comments" ref={register} />
        <span>{errors.comments?.message}</span>
        <label htmlFor="donor">Doador</label>
        <input type="checkbox" name="donor" ref={register} />
        <label htmlFor="adopter">Adotante</label>
        <input type="checkbox" name="adopter" ref={register} />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

export default RegisterUser;
