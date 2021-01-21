import CardTertiary from "../../components/CardTertiary";
import { Container, Text } from "./style";
import { useEffect, useState } from "react";
import axios from "axios";

const HumansApplication = () => {
  const [humansInterested, setHumansInterested] = useState([]);

  const token = window.localStorage.getItem("accessToken");
  const id = window.localStorage.getItem("id");

  const getHumansInterested = () => {
    axios
      .get(
        `https://adote-um-humano.herokuapp.com/animals?donorId=1&_embed=subscriber`
      )
      .then((res) => {
        res.data.map((animal) =>
          animal.subscriber.map((human) => {
            axios
              .get(
                `https://adote-um-humano.herokuapp.com/users/${human.userId}`,
                {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                }
              )
              .then((resp) => {
                setHumansInterested([...humansInterested, resp.data]);
              });
          })
        );
      });
  };

  useEffect(() => getHumansInterested(), []);

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
