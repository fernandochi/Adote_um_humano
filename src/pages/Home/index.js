import {
  TextBox,
  Container,
  PawAndFeet,
  WhiteBox,
  Button,
  ParteOne,
} from "./style";
import PawAndFeetImg from "../../assets/img/Paw-and-Feet.png";
import Carrossel from "../../components/carousel/index.js";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  return (
    <Container>
      <ParteOne>
        <WhiteBox>
          <TextBox>
            O Adote um humano é uma plataforma voltada para adoção responsável
            de animais. Temos a certeza de que você irá encontrar seu mais novo
            companheiro aqui!
            <br /> Se cadastre, preencha o formulário de adoção responsável e
            comece a se candidatar para os animais que te chamam a atenção. O
            doador irá avaliar se seu perfil combina com o do animal e se o
            match acontecer, você ganha uma amigão!
          </TextBox>
        </WhiteBox>

        <PawAndFeet src={PawAndFeetImg} />
      </ParteOne>

      <Carrossel deviceType={"mobile"} />

      <Button onClick={() => history.push("/animals")}>Ver mais animais</Button>
    </Container>
  );
};

export default Home;
