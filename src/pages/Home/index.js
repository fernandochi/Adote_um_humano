import {
  TextBox,
  Container,
  PawAndFeet,
  WhiteBox,
  Title,
  Label,
  Button,
} from "./style";
import PawAndFeetImg from "../../assets/img/Paw-and-Feet.png";
import Header from "../../components/header";
import Footer from "../../components/footer";

import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  return (
    <Container>
      <Header />
      <WhiteBox>
        <TextBox>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </TextBox>
      </WhiteBox>

      <PawAndFeet src={PawAndFeetImg} />

      <Footer />
    </Container>
  );
};

export default Home;
