import {
  CardContainer,
  ImageContainer,
  InfoContainer,
  StyledButton,
  FormCheck,
  StyledSpam,
} from "./styles";
import { BsListCheck } from "react-icons/bs";

const CardSecondary = ({ user }) => {
  return (
    <>
      <CardContainer>
        <ImageContainer>
          <img
            src="https://urbanarts.vteximg.com.br/arquivos/ids/2605780/120021.jpg?v=637184028084430000"
            alt="princess"
          />
        </ImageContainer>
        <InfoContainer>
          {user.map((user) => (
            <>
              <StyledSpam>{user.name}</StyledSpam>
              <StyledSpam>{user.email}</StyledSpam>
              <StyledSpam>{user.contact}</StyledSpam>
              <StyledSpam>{user.address}</StyledSpam>
            </>
          ))}
          {/* 
        {responsiveForm && (
          <a href="#">
            <FormCheck />
          </a>
        )} */}
        </InfoContainer>
      </CardContainer>
      <StyledButton>Editar perfil</StyledButton>
    </>
  );
};

export default CardSecondary;
