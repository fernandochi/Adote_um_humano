import Logo from "../logo/index";
import { Container, ContainerButtons, Button } from "./style";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <Container>
      <span>Menu</span>
      <ContainerButtons>
        <Button location={location.pathname} path="/">
          Home
        </Button>
        <Button location={location.pathname} path="login">
          Login
        </Button>
        <Button location={location.pathname} path="register">
          Cadastro
        </Button>
      </ContainerButtons>
      <Logo />
    </Container>
  );
};

export default Header;
