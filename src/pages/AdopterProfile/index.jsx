import axios from "axios";
import { useState, useEffect } from "react";

const AdopterProfile = () => {
  const [user, setUser] = useState([]);
  const id = window.localStorage.getItem("id");
  const token = window.localStorage.getItem("accessToken");

  console.log(id);

  const getData = async () => {
    const { data } = await axios.get(
      `https://adote-um-humano.herokuapp.com/users/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setUser([data]);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {user.map((user, index) => (
        <div key={index}>
          <div>{user.name}</div>
          <div>{user.email}</div>
          <div>{user.contact}</div>
          <div>{user.address}</div>{" "}
        </div>
      ))}
    </>
  );
};

export default AdopterProfile;
