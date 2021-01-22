import styled from "styled-components";

const Container = styled.div`
  max-width: 100vw;
  max-height: 100vh;
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
  margin-bottom: 3vh;
  margin-top: 2vh;
`;

const WhiteBox = styled.div`
  width: 200px;
  height: 287px;
  text-align: center;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    width: 300px;
    height: 250px;
    align-items: center;
    margin-right: 15px;
    padding: 5px 5px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 1024px) {
    width: 300px;
    height: 250px;
    align-items: center;
    margin-right: 10vw;
    padding: 5px 5px;
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
  margin-bottom: 2vh;
  margin-top: -30px;

  :hover {
    background-color: #6c8759;
    cursor: pointer;
  }
`;

export { WhiteBox, Container, PawAndFeet, TextBox, Button, ParteOne };
