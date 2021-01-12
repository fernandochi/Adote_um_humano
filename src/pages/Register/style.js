import styled from "styled-components";
import BackgroundImage from "../../components/images/Background.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  color: white;
  background-image: url(${BackgroundImage});
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
`;

const Input = styled.input`
  border: none;
  outline: none;
  border-radius: 5px;
  height: 20px;
`;

const TextArea = styled.textarea`
  border: none;
  outline: none;
  border-radius: 5px;
  width: 200px;
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
`;

const Errors = styled.span`
  font-size: 9px;
  color: black;
  font-weight: bolder;
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
  font-size: 18px;
  margin: 10px 0;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export {
  Container,
  Title,
  Form,
  Label,
  Input,
  TextArea,
  Checkbox,
  CheckboxContainer,
  Errors,
  Button,
  Link,
};
