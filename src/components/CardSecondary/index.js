import {
  CardContainer,
  ImageContainer,
  InfoContainer,
  StyledButton,
  FormCheck,
  StyledSpam,
} from "./styles";
import { BsListCheck } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const CardSecondary = ({ user }) => {
  const history = useHistory();
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
      <StyledButton onClick={() => history.push("/edit-profile")}>
        Editar perfil
      </StyledButton>
    </>
  );
};

export default CardSecondary;
