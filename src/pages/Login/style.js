import styled from "styled-components";

import BackgroundImage3 from "../../components/images/Background3.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
  background-image: url(${BackgroundImage3});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  font-family: "Amatic SC", cursive;
  @media (min-width: 768px) {
    padding-top: 50px;
  }

  @media (min-width: 1100px) {
    padding-top: 100px;
  }

  @media (min-width: 2000px) {
    padding-top: 175px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 45px;
  padding-bottom: 20px;
`;

const Form = styled.form`
  background-color: #184d47;
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

const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 5px;
  height: 30px;
`;

const Errors = styled.span`
  font-size: 9px;
  color: red;
  font-weight: bolder;

  @media (min-width: 700px) {
    font-size: 14px;
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  border-radius: 5px;
  height: 24px;
  width: 90px;
  font-family: "Amatic SC", cursive;
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
  color: white;
  background-color: #96bb7c;
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

export { Container, Title, Form, Label, Input, Errors, Button, Link };
