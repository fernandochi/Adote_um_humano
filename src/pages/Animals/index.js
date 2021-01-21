import { useEffect, useState } from "react";
import axios from "axios";

// COMPONENTS
import CardPrimary from "../../components/CardPrimary";
import ModalAnimals from "../../components/ModalAnimals";
import AnimalsFilter from "../../components/AnimalsFilter";
// STYLE
import { Container } from "./style";

const Animals = () => {
  const [animals, setAnimals] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const url = "https://adote-um-humano.herokuapp.com/animals";
    axios.get(url).then((res) => setAnimals(res.data));
  }, []);

  return (
    <Container>
      <AnimalsFilter setAnimals={setAnimals} animals={animals} />
      <ul>
        {animals.map((animal, index) => (
          <li key={index}>
            <CardPrimary animal={animal} setOpen={setOpen} />
          </li>
        ))}
      </ul>
      {open && <ModalAnimals setOpen={setOpen} />}
    </Container>
  );
};

export default Animals;
