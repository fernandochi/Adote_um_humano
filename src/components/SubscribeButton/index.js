import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Subscribe = () => {
  const [data, setData] = useState([]);
  const userId = window.localStorage.getItem("id");
  const token = window.localStorage.getItem("accessToken");
  const { id } = useParams();

  const prepareData = () => {
    setData({
      userId: Number(userId),
      animalId: Number(id),
    });
  };

  const postData = () => {
    axios.post("https://adote-um-humano.herokuapp.com/subscriber", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  useEffect(() => {
    prepareData();
  }, [id]);

  return <span onClick={() => postData()}>Quero adotar</span>;
};

export default Subscribe;
