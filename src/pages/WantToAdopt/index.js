import Header from "../../components/header";
import Footer from "../../components/footer";
import CardSecondary from "../../components/CardSecondary";
import { Container } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";

const WantToAdopt = () => {
  const [animalsApllication, setAnimalsApllication] = useState([]);

  const getAnimalsApllication = () => {
    axios.get("https://adote-um-humano.herokuapp.com/").then((res) => {
      setAnimalsApllication(res.data);
    });
  };

  useEffect(() => getAnimalsApllication(), []);

  return (
    <Container>
      <Header />

      <CardSecondary user={animalsApllication} />

      <Footer />
    </Container>
  );
};

export default WantToAdopt;
