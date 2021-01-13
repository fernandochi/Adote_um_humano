import styled from "styled-components";

import BackgroundImage3 from "../../assets/img/Background3.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
  background-image: url(${BackgroundImage3});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  font-family: "Amatic SC", cursive;
  @media (min-width: 1000px) {
    padding-top: 50px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 35px;
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

  @media (min-width: 1000px) {
    margin: auto;
    width: 30vw;
    height: 85vh;
  }
`;

const Label = styled.label`
  font-size: 16px;
  @media (min-width: 700px) {
    font-size: 20px;
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 5px;
  height: 20px;
  width: 200px;

  @media (min-width: 700px) {
    width: 250px;
    height: 25px;
  }
`;

const Checkbox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 150px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 250px;
  padding-bottom: 5px;
`;

const Errors = styled.span`
  font-size: 9px;
  color: black;
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
    transition: all 0.3s;
  }
`;

const Link = styled.span`
  font-size: 20px;
  margin: 10px 0;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Select = styled.select`
  border: none;
  outline: none;
  border-radius: 5px;
  height: 20px;
  width: 200px;

  @media (min-width: 700px) {
    width: 250px;
    height: 25px;
  }
`;

const TextArea = styled.textarea`
  border: none;
  outline: none;
  border-radius: 5px;
  height: 100px;
  width: 200px;

  @media (min-width: 700px) {
    width: 250px;
    height: 125px;
  }
`;

export {
  Container,
  Title,
  Form,
  Label,
  Input,
  Checkbox,
  CheckboxContainer,
  Errors,
  Button,
  Link,
  Select,
  TextArea,
};
