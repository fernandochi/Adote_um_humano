import styled from "styled-components";
import PawAndFeetImg from "../../assets/img/Paw-and-Feet.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  flex-wrap: wrap;
`;

const WhiteBox = styled.div`
  width: 275px;
  height: 287px;
  left: 60px;
  top: 73px;
`;

const PawAndFeet = styled.img`
  src: ${PawAndFeetImg};
  width: 300px;
  height: 300px;
`;

const TextBox = styled.div`
  font-family: Roboto;
  font-style: italic;
  font-weight: 300;
  font-size: 14px;
  color: #000000;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 45px;
  padding-bottom: 20px;
`;

const OrangeBox = styled.div`
  background-color: #fad586;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
  padding: 15px 10px 10px 10px;
  border-radius: 5px;

  @media (min-width: 768px) {
    margin: 0 auto;
    min-width: 319px;
    max-width: 30vw;
    height: 65vh;
  }

  @media (min-width: 1100px) {
    margin: 0 auto;
    max-height: 55vh;
    max-width: 25vw;
  }
`;

const Label = styled.label`
  font-size: 20px;
  @media (min-width: 768px) {
    font-size: 25px;
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 5px;
  height: 24px;
  width: 200px;
  font-family: "Amatic SC", cursive;
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  color: white;
  background-color: #184d47;
  :hover {
    background-color: #6c8759;
    cursor: pointer;
  }
`;

const Link = styled.span`
  font-size: 22px;
  margin: 10px 0;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export {
  WhiteBox,
  Container,
  PawAndFeet,
  TextBox,
  Title,
  OrangeBox,
  Label,
  Button,
  Link,
};
