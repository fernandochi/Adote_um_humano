import Logo from "../logo/index";
import { Container, ContainerButtons, Button } from "./style";

const Header = () => {
  return (
    <Container>
      <span>Menu</span>
      <ContainerButtons>
        <Button>Home</Button>
        <Button>Login</Button>
        <Button>Cadastro</Button>
      </ContainerButtons>
      <Logo />
    </Container>
  );
};

export default Header;
