import CardPrimary from "../../components/CardPrimary";
import { Container, Text } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";

const WantToAdopt = () => {
  const [animalsApllication, setAnimalsApllication] = useState([]);

  const token = window.localStorage.getItem("accessToken");
  const id = window.localStorage.getItem("id");

  const getAnimalsApllication = () => {
    axios
      .get("https://adote-um-humano.herokuapp.com/subscriber", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const animals = res.data.filter((user) => user.userId === parseInt(id));

        animals.map((animal) =>
          axios
            .get(
              `https://adote-um-humano.herokuapp.com/animals/${animal.animalId}`
            )
            .then((resp) =>
              setAnimalsApllication([...animalsApllication, resp.data])
            )
        );
      });
  };

  useEffect(() => getAnimalsApllication(), []);

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
