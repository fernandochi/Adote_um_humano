import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 80vh;
`;

const Card = styled.div`
  margin: 20px auto;
  width: 80%;
  height: 350px;
  background-color: #184d47;
  color: white;
  border-radius: 10px;

  @media (min-width: 700px) {
    width: 50%;
  }

  @media (min-width: 1000px) {
    width: 30%;
    height: 400px;
  }
`;

const Image = styled.img`
  border-radius: 50%;
  width: 110px;
  height: 110px;
  margin-bottom: 30px;
`;

const Information = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 60%;
`;

const Text = styled.div`
  font-weight: ${(props) => props.bolder && "bolder"};
  font-size: 20px;
  margin-left: ${(props) => props.margin && "28px"};
`;

const TextInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 80%;
`;

const Observations = styled.div`
  width: 80%;
  height: 20%;
  border-radius: 10px;
  font-weight: 600;
  padding: 5px;
  background-color: #fff;
  color: black;
  margin: 10px auto;
  margin-bottom: 0;
`;

const Button = styled.button`
  margin-left: 35%;
  margin-bottom: 5%;
  border: none;
  outline: none;
  border-radius: 5px;
  height: 24px;
  width: 90px;
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  color: white;
  background-color: #96bb7c;
  :hover {
    background-color: #6c8759;
    cursor: pointer;
    transition: all 0.3s;
  }

  @media (min-width: 400px) {
    margin-left: 40%;
  }

  @media (min-width: 700px) {
    margin-left: 45%;
  }

  @media (min-width: 100px) {
    margin-left: 48%;
  }
`;

export {
  Container,
  Card,
  Image,
  Information,
  Text,
  TextInformation,
  Observations,
  Button,
};
