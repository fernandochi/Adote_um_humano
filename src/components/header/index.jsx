import Logo from "../logo/index";
import { Container, ContainerButtons, Button, Menu } from "./style";
import { useLocation, useHistory } from "react-router-dom";
import MenuMobile from "../menu/index";

const Header = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <Container>
      <Menu>
        <MenuMobile />
      </Menu>

      {location.pathname === "/" && (
        <>
          <ContainerButtons>
            <Button
              onClick={() => history.push("/")}
              location={location.pathname}
              path="/"
            >
              Home
            </Button>
            <Button
              onClick={() => history.push("/login")}
              location={location.pathname}
              path="login"
            >
              Login
            </Button>
            <Button
              onClick={() => history.push("/register")}
              location={location.pathname}
              path="register"
            >
              Cadastro
            </Button>
          </ContainerButtons>{" "}
        </>
      )}
      {location.pathname === "/donor" && (
        <>
          <span>Menu</span>
          <ContainerButtons>
            <Button
              onClick={() => history.push("/profile")}
              location={location.pathname}
              path="/"
            >
              Perfil
            </Button>
            <Button
              onClick={() => history.push("/my-animals")}
              location={location.pathname}
              path="login"
            >
              Seus animais
            </Button>
            <Button
              onClick={() => history.push("/humans")}
              location={location.pathname}
              path="register"
            >
              Humanos interessados
            </Button>
          </ContainerButtons>{" "}
        </>
      )}
      {location.pathname === "/adopter" && (
        <>
          <span>Menu</span>
          <ContainerButtons>
            <Button
              onClick={() => history.push("/profile")}
              location={location.pathname}
              path="/"
            >
              Perfil
            </Button>
            <Button
              onClick={() => history.push("/animals")}
              location={location.pathname}
              path="login"
            >
              Animais
            </Button>
            <Button
              onClick={() => history.push("/favorites")}
              location={location.pathname}
              path="register"
            >
              Quero adotar
            </Button>
          </ContainerButtons>{" "}
        </>
      )}

      <Logo />
    </Container>
  );
};

export default Header;
