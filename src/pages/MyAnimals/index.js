import { useEffect, useState } from "react";
import axios from "axios";
import CardPrimary from "../../components/CardPrimary";
import { Container } from "./style";
import Header from "../../components/header";
import Footer from "../../components/footer";

const MyAnimals = () => {
  const authToken = localStorage.getItem("accessToken");
  const donorId = localStorage.getItem("id");
  const [animals, setAnimals] = useState([]);

  const getMyanimals = async () => {
    let response = await axios
      .get(`https://adote-um-humano.herokuapp.com/animals?donorId=${donorId}`, {
        auth: `Bearer ${authToken}`,
      })
      .catch((error) => console.log(error));
    setAnimals(response.data);
  };

  useEffect(() => {
    getMyanimals();
    console.log(animals);
  }, []);

  return (
    <>
      <Header />
      <Container>
        {animals.length > 0 ? (
          animals.map((animal) => <CardPrimary animal={animal} />)
        ) : (
          <span>No content</span>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default MyAnimals;
