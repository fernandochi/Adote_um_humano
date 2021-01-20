import { useHistory } from "react-router-dom";

const ButtonAnimals = ({ setOpen, id }) => {
  const token = window.localStorage.getItem("accessToken");
  const history = useHistory();

  const handleInfo = () => {
    if (token) {
      history.push(`/animals/${id}`);
      return;
    }

    setOpen(true);
  };

  return <button onClick={() => handleInfo()}>Mais informações</button>;
};

export default ButtonAnimals;
