import CardPrimary from "../../components/CardPrimary";
import { Container, Text } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";

const WantToAdopt = () => {
  const [animalsApllication, setAnimalsApllication] = useState([]);

  const token = window.localStorage.getItem("accessToken");
  const id = window.localStorage.getItem("id");

  const loadAnimals = async () => {
    const firstRequest = await axios.get(
      `https://adote-um-humano.herokuapp.com/subscriber`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const secondRequest = await axios.get(
      "https://adote-um-humano.herokuapp.com/animals"
    );

    const animals = await secondRequest.data;

    const subscribers = await firstRequest.data;

    const userSubs = await subscribers.filter(
      (sub) => sub.userId === parseInt(id)
    );

    const animalsToAdopt = await userSubs
      .map((sub) => animals.filter((animal) => sub.animalId === animal.id))
      .flatMap((animal) => animal);

    setAnimalsApllication(animalsToAdopt);
  };

  useEffect(() => loadAnimals(), []);

  return (
    <Container>
      {animalsApllication.length !== 0 ? (
        animalsApllication.map((animal) => <CardPrimary animal={animal} />)
      ) : (
        <Text>Você não se aplicou a adoção de nenhum animal</Text>
      )}
    </Container>
  );
};

export default WantToAdopt;
