import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AnimalCard from "../../components/AnimalProfileCard";

const AnimalsProfile = () => {
  const { id } = useParams();
  const [animal, setAnimal] = useState([]);
  const token = window.localStorage.getItem("accessToken");

  const getData = async () => {
    const { data } = await axios.get(
      `https://adote-um-humano.herokuapp.com/animals/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setAnimal([data]);
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div>
      <AnimalCard animal={animal} />
    </div>
  );
};

export default AnimalsProfile;
