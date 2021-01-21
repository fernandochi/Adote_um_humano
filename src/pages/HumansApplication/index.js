import CardTertiary from "../../components/CardTertiary";
import { Container, Text } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";

const HumansApplication = () => {
  const [humansInterested, setHumansInterested] = useState([]);

  const [animals, setAnimals] = useState([]);

  const token = window.localStorage.getItem("accessToken");
  const id = window.localStorage.getItem("id");

  const getAllUsers = () => {};

  const getHumansProfile = async (userId) => {
    const profiles = await axios.get(
      `https://adote-um-humano.herokuapp.com/users/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return await Promise.resolve(profiles);
  };

  const loadHumans = async () => {
    const firstRequest = await axios.get(
      `https://adote-um-humano.herokuapp.com/animals?donorId=1&_embed=subscriber`
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

    // console.log(humansAdopters);

    const subscribers = await animal.map((sub) => sub.subscriber);

    const subs = await subscribers.flatMap((user) => user);

    const adopters = subs.map((sub) =>
      humans.filter((user) => sub.userId === user.id)
    );

    setHumansInterested(adopters);

    // console.log(adopters);
    // const humansProfile = await subs.filter((human) => human.userId === hu);

    // console.log(humansProfile);

    // return humansProfile;

    // const secondRequest = await getHumansInterested(firstRequest);
  };

  useEffect(() => loadHumans(), []);

  return (
    <Container>
      {humansInterested.length !== 0 ? (
        humansInterested.map((human) => <CardTertiary user={human} />)
      ) : (
        <Text>Seu(s) animai(s) não possue(m) aplicação</Text>
      )}
    </Container>
  );
};

export default HumansApplication;
