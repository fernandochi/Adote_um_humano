import CardTertiary from "../../components/CardTertiary";
import { Container, Text } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";

const HumansApplication = () => {
  const [humansInterested, setHumansInterested] = useState([]);

  const [animals, setAnimals] = useState([]);

  const token = window.localStorage.getItem("accessToken");
  const id = window.localStorage.getItem("id");

  const getAnimals = () => {
    axios
      .get(
        `https://adote-um-humano.herokuapp.com/animals?donorId=1&_embed=subscriber`
      )
      .then((res) => {
        setAnimals([...animals, res.data]);
      });
  };

  const getHumansProfile = async (userId) => {
    const profiles = await axios.get(
      `https://adote-um-humano.herokuapp.com/users/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(profiles.data);

    return await Promise.resolve(profiles);
  };

  const loadHumans = async () => {
    const firstRequest = await axios.get(
      `https://adote-um-humano.herokuapp.com/animals?donorId=1&_embed=subscriber`
    );

    const animal = await firstRequest.data;

    const subscribers = await animal.map((sub) => sub.subscriber);

    const subs = await subscribers.flatMap((user) => user);

    const humansProfile = await subs.map(
      async (human) => await getHumansProfile(human.userId)
    );

    console.log(humansProfile);

    return humansProfile;

    // const secondRequest = await getHumansInterested(firstRequest);
  };

  useEffect(() => loadHumans(), []);

  return (
    <Container>
      {/* {
        humansInterested.length !== 0
          ? console.log(loadHumans())
          : console.log(loadHumans())

        // humansInterested.map((human) => <CardTertiary user={human} />)
        // <Text>Seu(s) animai(s) não possue(m) aplicação</Text>
      } */}
    </Container>
  );
};

export default HumansApplication;
