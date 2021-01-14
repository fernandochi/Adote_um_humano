import Logo from "../logo/index";
import { Container, ContainerButtons, Button } from "./style";
import { useLocation, useHistory } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <Container>
      {location.pathname === "/" && (
        <>
          <span>Menu</span>
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

      <Logo />
    </Container>
  );
};

export default Header;
