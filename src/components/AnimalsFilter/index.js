import { useState } from "react";

// COMPONENTS
import FilterFeature from "../FilterFeature";
import FilterBar from "../FilterBar";

const AnimalsFilter = ({ setAnimals, animals }) => {
  const handleSubmit = (e, type) => {
    e.preventDefault();
    console.log(e.target.value, type);
  };

  return (
    <>
      <FilterBar />
      <div>
        <form onSubmit={handleSubmit}>
          <FilterFeature
            type="race"
            animals={animals}
            handleSubmit={handleSubmit}
          />
          <FilterFeature
            type="size"
            animals={animals}
            handleSubmit={handleSubmit}
          />
          <FilterFeature
            type="sexo"
            animals={animals}
            handleSubmit={handleSubmit}
          />
          <button type="submit">Filtrar</button>
        </form>
      </div>
    </>
  );
};

export default AnimalsFilter;
