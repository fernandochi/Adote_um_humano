import Logo from "../logo/index";
import { Container, ContainerButtons, Button, Menu } from "./style";
import { useLocation, useHistory } from "react-router-dom";
import MenuMobile from "../menu/index";

const Header = () => {
  const publicHeader = new RegExp("^(/register|/login|/$|/animals/*\\d*)$");
  const donorHeader = new RegExp("^/donor.*");
  const adopterHeader = new RegExp("^/adopter.*");
  const auth = JSON.parse(window.localStorage.getItem("auth"));
  const isDonor = JSON.parse(window.localStorage.getItem("isDonor"));
  const location = useLocation();
  const history = useHistory();

  return (
    <Container>
      <Menu>
        <MenuMobile />
      </Menu>

      {location.pathname.match(publicHeader) && (
        <>
          <ContainerButtons>
            <Button
              onClick={() => history.push("/")}
              location={location.pathname}
              path="/"
            >
              Home
            </Button>
            {auth === true ? (
              <>
                {" "}
                <Button
                  data-testid="logout"
                  onClick={() => {
                    window.localStorage.clear();
                    history.push("/");
                  }}
                  location={location.pathname}
                  path="login"
                >
                  Logout
                </Button>
                <Button
                  data-testid="profile"
                  onClick={() => {
                    if (isDonor === true) {
                      return history.push("/donor");
                    } else {
                      return history.push("/adopter");
                    }
                  }}
                  location={location.pathname}
                  path={isDonor === true ? "donor" : "adopter"}
                >
                  Perfil
                </Button>
                {isDonor === false ? (
                  <Button
                    onClick={() => history.push("/animals")}
                    location={location.pathname}
                    path="animals"
                  >
                    Animais
                  </Button>
                ) : (
                  <Button
                    onClick={() => history.push("/donor/my-animals")}
                    location={location.pathname}
                    path="donor/my-animals"
                  >
                    Meus animais
                  </Button>
                )}
                {isDonor === false ? (
                  <Button
                    onClick={() => history.push("/adopter/favorites")}
                    location={location.pathname}
                    path="adopter/favorites"
                  >
                    Quero adotar
                  </Button>
                ) : (
                  <Button
                    onClick={() => history.push("/donor/humans")}
                    location={location.pathname}
                    path="donor/humans"
                  >
                    Humanos interessados
                  </Button>
                )}
              </>
            ) : (
              <>
                {" "}
                <Button
                  data-testid="login"
                  onClick={() => history.push("/login")}
                  location={location.pathname}
                  path="login"
                >
                  Login
                </Button>{" "}
                <Button
                  data-testid="register"
                  onClick={() => history.push("/register")}
                  location={location.pathname}
                  path="register"
                >
                  Cadastro
                </Button>
              </>
            )}
          </ContainerButtons>
        </>
      )}

      {location.pathname.match(donorHeader) && (
        <>
          <ContainerButtons>
            <Button
              onClick={() => history.push("/donor")}
              location={location.pathname}
              path="donor"
            >
              Perfil
            </Button>
            <Button
              onClick={() => history.push("/donor/my-animals")}
              location={location.pathname}
              path="donor/my-animals"
            >
              Seus animais
            </Button>
            <Button
              onClick={() => history.push("/donor/humans")}
              location={location.pathname}
              path="donor/humans"
            >
              Humanos interessados
            </Button>
            <Button
              data-testid="logout"
              onClick={() => {
                window.localStorage.clear();
                history.push("/");
              }}
              location={location.pathname}
              path="login"
            >
              Logout
            </Button>
          </ContainerButtons>{" "}
        </>
      )}
      {location.pathname.match(adopterHeader) && (
        <>
          <ContainerButtons>
            <Button
              onClick={() => history.push("/adopter")}
              location={location.pathname}
              path="adopter"
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
              path="adopter/favorites"
            >
              Quero adotar
            </Button>
            <Button
              data-testid="logout"
              onClick={() => {
                window.localStorage.clear();
                history.push("/");
              }}
              location={location.pathname}
              path="login"
            >
              Logout
            </Button>
          </ContainerButtons>{" "}
        </>
      )}

      <Logo />
    </Container>
  );
};

export default Header;
