import { useEffect, useState } from "react";
import axios from "axios";
import CardPrimary from "../../components/CardPrimary";

const MyAnimals = () => {
  const donorId = localStorage.getItem("id");
  const [animals, setAnimals] = useState([]);

  const getMyanimals = async () => {
    let response = await axios
      .get(`https://adote-um-humano.herokuapp.com/animals?donorId=${donorId}`)
      .catch((error) => console.log(error));
    setAnimals([...response]);
  };

  useEffect(() => {}, []);

  return (
    <>
      <CardPrimary animal={animals} />
    </>
  );
};

export default MyAnimals;
