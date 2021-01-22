import CardTertiary from "../../components/CardTertiary";
import { Container, Text } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";

const HumansApplication = () => {
  const [humansInterested, setHumansInterested] = useState([]);

  const token = window.localStorage.getItem("accessToken");
  const id = window.localStorage.getItem("id");

  const loadHumans = async () => {
    const firstRequest = await axios.get(
      `https://adote-um-humano.herokuapp.com/animals?donorId=${id}&_embed=subscriber`
    );

    const secondRequest = await axios.get(
      "https://adote-um-humano.herokuapp.com/users",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const animal = await firstRequest.data;

    const humans = await secondRequest.data;

    const subscribers = await animal.map((sub) => sub.subscriber);

    const subs = await subscribers.flatMap((user) => user);

    const adopters = subs
      .map((sub) => humans.filter((user) => sub.userId === user.id))
      .flatMap((user) => user);

    setHumansInterested(adopters);
  };

  useEffect(() => loadHumans(), []);

  return (
    <Container>
      {humansInterested.length !== 0 ? (
        <CardTertiary user={humansInterested} />
      ) : (
        <Text>Seu(s) animai(s) não possue(m) aplicação</Text>
      )}
    </Container>
  );
};

export default HumansApplication;
