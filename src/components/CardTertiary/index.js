import {
  CardContainer,
  ImageContainer,
  InfoContainer,
  StyledSpam,
} from "./style";

const CardTertiary = ({ user }) => {
  return user.map((user) => (
    <CardContainer key={user.id}>
      <ImageContainer>
        <img src={user.avatar} alt="user" />
      </ImageContainer>
      <InfoContainer>
        <StyledSpam key={user.name}>{user.name}</StyledSpam>
        <StyledSpam key={user.email}>{user.email}</StyledSpam>
        <StyledSpam key={user.contact}>{user.contact}</StyledSpam>
        <StyledSpam key={user.address}>{user.address}</StyledSpam>
      </InfoContainer>
    </CardContainer>
  ));
};

export default CardTertiary;
