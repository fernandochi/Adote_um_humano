import Logo from "../logo/index";
import { Container, ContainerButtons, Button, Menu } from "./style";
import { useLocation, useHistory } from "react-router-dom";
import MenuMobile from "../menu/index";

const Header = () => {
  const location = useLocation();
  const history = useHistory();
  const accessToken = window.localStorage.getItem("accessToken");
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
              data-testid="login"
              onClick={() => history.push("/login")}
              location={location.pathname}
              path="login"
            >
              Login
            </Button>
            <Button
              data-testid="register"
              onClick={() => history.push("/register")}
              location={location.pathname}
              path="register"
            >
              Cadastro
            </Button>
          </ContainerButtons>{" "}
        </>
      )}
      {accessToken && location.pathname === "/animals" ? (
        <>
          <ContainerButtons>
            <Button
              onClick={() => history.push("/adopter")}
              location={location.pathname}
              path="profile"
            >
              Perfil
            </Button>
            <Button
              onClick={() => history.push("/animals")}
              location={location.pathname}
              path="animals"
            >
              Animais
            </Button>
            <Button
              onClick={() => history.push("/adopter/favorites")}
              location={location.pathname}
              path="register"
            >
              Quero adotar
            </Button>
          </ContainerButtons>{" "}
        </>
      ) : (
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
              onClick={() => history.push("/animals")}
              location={location.pathname}
              path="login"
            >
              Login
            </Button>
            <Button
              onClick={() => history.push("/adopter/favorites")}
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
          <ContainerButtons>
            <Button
              onClick={() => history.push("/donor")}
              location={location.pathname}
              path="/donor"
            >
              Perfil
            </Button>
            <Button
              onClick={() => history.push("/my-animals")}
              location={location.pathname}
              path="my-animals"
            >
              Seus animais
            </Button>
            <Button
              onClick={() => history.push("/humans")}
              location={location.pathname}
              path="humans"
            >
              Humanos interessados
            </Button>
          </ContainerButtons>{" "}
        </>
      )}
      {location.pathname === "/adopter" && (
        <>
          <ContainerButtons>
            <Button
              onClick={() => history.push("/adopter/profile")}
              location={location.pathname}
              path="/adopter"
            >
              Perfil
            </Button>
            <Button
              onClick={() => history.push("/animals")}
              location={location.pathname}
              path="animals"
            >
              Animais
            </Button>
            <Button
              onClick={() => history.push("/adopter/favorites")}
              location={location.pathname}
              path="favorites"
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
