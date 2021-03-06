import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import CardSecondary from "../../components/CardSecondary";

const Profile = () => {
  const [user, setUser] = useState([]);

  const id = window.localStorage.getItem("id");
  const token = window.localStorage.getItem("accessToken");

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
    data.responsible && window.localStorage.setItem("responsible", true);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container>
      <CardSecondary user={user} />
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
`;
