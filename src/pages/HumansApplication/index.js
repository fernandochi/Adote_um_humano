import Header from "../../components/header";
import Footer from "../../components/footer";
import CardSecondary from "../../components/CardSecondary";
import { Container } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";

const HumansApplication = () => {
  const [humansInterested, setHumansInterested] = useState([]);

  const getHumansInterested = () => {
    axios.get("https://adote-um-humano.herokuapp.com/").then((res) => {
      setHumansInterested(res.data);
    });
  };

  useEffect(() => getHumansInterested(), []);

  return (
    <Container>
      <Header />

      <CardSecondary user={humansInterested} />

      <Footer />
    </Container>
  );
};

export default HumansApplication;
