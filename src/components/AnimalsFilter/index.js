import { useState } from "react";

// COMPONENTS
import FilterFeature from "../FilterFeature";
import FilterBar from "../FilterBar";

// STYLES
import { Container, Form } from "./style";

const AnimalsFilter = ({ setAnimals, animals }) => {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");

  const handleSubmit = (e, url) => {
    console.log(url);
  };

  const getAnimals = (e) => {
    e.preventDefault();
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
