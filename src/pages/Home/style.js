import styled from "styled-components";

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

const Conteudo = styled.div`
  width: 100vw;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ParteOne = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 5vw;
`;

const WhiteBox = styled.div`
  width: 275px;
  height: 287px;
  text-align: center;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    width: 380px;
    height: 295px;
    align-items: center;
    margin-right: 15px;
    padding: 25px 25px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 1024px) {
    width: 380px;
    height: 295px;
    align-items: center;
    margin-right: 10vw;
    padding: 25px 25px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const PawAndFeet = styled.img`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    alt: "Animals paws and Humans Feet forming a way";
    width: 350px;
    height: 200px;
  }
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
  Conteudo,
  ParteOne,
};
