import { useState, useEffect } from "react";
import axios from "axios";

// COMPONENTS
import FilterFeature from "../FilterFeature";
import FilterBar from "../FilterBar";

// STYLES
import { Container, Form } from "./style";

const AnimalsFilter = ({ setAnimals, animals }) => {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [raca, setRaca] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [sexo, setSexo] = useState("");

  const handleSubmit = (type, data) => {
    switch (type) {
      case "raça":
        setRaca(data);
        return;
      case "tamanho":
        setTamanho(data);
        return;
      case "sexo":
        setSexo(data);
        return;
      default:
        return type;
    }
  };

  useEffect(() => {
    setUrl(`${raca}&${tamanho}&${sexo}`);
  }, [raca, tamanho, sexo]);

  const getAnimals = (e) => {
    e.preventDefault();
    const baseUrl = "https://adote-um-humano.herokuapp.com/animals?";

    axios.get(`${baseUrl + url}`).then((res) => setAnimals(res.data));
  };

  return (
    <>
      <FilterBar setOpen={setOpen} open={open} />
      {open && (
        <Container>
          <Form onSubmit={getAnimals}>
            <FilterFeature
              type="raça"
              animals={animals}
              handleSubmit={handleSubmit}
            />
            <FilterFeature
              type="tamanho"
              animals={animals}
              handleSubmit={handleSubmit}
            />
            <FilterFeature
              type="sexo"
              animals={animals}
              handleSubmit={handleSubmit}
            />
            <button type="submit">Filtrar</button>
          </Form>
        </Container>
      )}
    </>
  );
};

export default AnimalsFilter;
