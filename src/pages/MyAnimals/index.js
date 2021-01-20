import { useEffect, useState } from "react";
import axios from "axios";
import CardPrimary from "../../components/CardPrimary";
import { Container } from "./style";

const MyAnimals = () => {
  const authToken = localStorage.getItem("accessToken");
  const donorId = localStorage.getItem("id");
  const [animals, setAnimals] = useState([]);

  const getMyanimals = async () => {
    let response = await axios
      .get(`https://adote-um-humano.herokuapp.com/animals?donorId=${4}`, {
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
    <Container>
      {animals.map((animal) => (
        <CardPrimary animal={animal} />
      ))}
    </Container>
  );
};

export default MyAnimals;
