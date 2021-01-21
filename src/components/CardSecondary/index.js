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
  const isDonor = JSON.parse(window.localStorage.getItem("isDonor"));
  const responsiveForm = JSON.parse(window.localStorage.getItem("responsible"));
  return (
    <>
      <CardContainer>
        {user.map((user) => (
          <>
            <ImageContainer>
              <img src={user.avatar} alt="user" />
            </ImageContainer>
            <InfoContainer key={user.id}>
              <StyledSpam key={user.name}>{user.name}</StyledSpam>
              <StyledSpam key={user.email}>{user.email}</StyledSpam>
              <StyledSpam key={user.contact}>{user.contact}</StyledSpam>
              <StyledSpam key={user.address}>{user.address}</StyledSpam>
              {responsiveForm && <FormCheck />}
            </InfoContainer>
          </>
        ))}
      </CardContainer>
      <StyledButton
        onClick={() => {
          isDonor === true
            ? history.push("/donor/edit-profile")
            : history.push("/adopter/edit-profile");
        }}
      >
        Editar perfil
      </StyledButton>
    </>
  );
};

export default CardSecondary;
