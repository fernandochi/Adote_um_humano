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
          <img src={user.avatar} alt="user" />
        </ImageContainer>
        <InfoContainer key={user.id}>
          {user.map((user) => (
            <>
              <StyledSpam key={user.name}>{user.name}</StyledSpam>
              <StyledSpam key={user.email}>{user.email}</StyledSpam>
              <StyledSpam key={user.contact}>{user.contact}</StyledSpam>
              <StyledSpam key={user.address}>{user.address}</StyledSpam>
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
