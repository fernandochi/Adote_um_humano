import { useEffect, useState } from "react";
import axios from "axios";

// COMPONENTS
import CardPrimary from "../../components/CardPrimary";

// STYLE
import { Container } from "./style";

const Animals = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const url = "https://adote-um-humano.herokuapp.com/animals";
    axios.get(url).then((res) => setAnimals(res.data));
  }, []);

  return (
    <Container>
      <ul>
        {animals.map((animal, index) => (
          <CardPrimary key={index} animal={animal} />
        ))}
      </ul>
    </Container>
  );
};

export default Animals;
