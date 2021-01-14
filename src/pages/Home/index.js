import { Container, OrangeBox, Title, Label, Button } from "./style";

import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  return (
    <Container>
      <OrangeBox>
        <Button onClick={() => history.push("/login")}>Login</Button>
        <Button onClick={() => history.push("/register")}>Cadastro</Button>
      </OrangeBox>
    </Container>
  );
};

export default Home;
