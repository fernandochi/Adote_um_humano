// STYLE
import { FiFilter } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Filter } from "./style";

const FilterBar = ({ setOpen, open }) => {
  return (
    <Filter>
      <button onClick={() => setOpen(!open)}>
        {open ? (
          <MdClose />
        ) : (
          <>
            <span>Filtros</span>
            <FiFilter />
          </>
        )}
      </button>
    </Filter>
  );
};

export default FilterBar;
