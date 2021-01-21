// STYLE
import { FiFilter } from "react-icons/fi";
import { Filter } from "./style";

const FilterBar = () => {
  return (
    <Filter>
      <span>Filtros</span>
      <FiFilter />
    </Filter>
  );
};

export default FilterBar;
