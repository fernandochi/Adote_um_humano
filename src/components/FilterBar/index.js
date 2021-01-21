// STYLE
import { FiFilter } from "react-icons/fi";
import { Filter } from "./style";

const FilterBar = () => {
  return (
    <Filter>
      <button>
        <span>Filtros</span>
        <FiFilter />
      </button>
    </Filter>
  );
};

export default FilterBar;
