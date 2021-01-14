import styled from "styled-components";
import "./style.css";
import BackgroundImage3 from "../../assets/img/Background3.png";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
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
  width: 100vw;
  min-height: 100vh;
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
  font-family: inherit;
  background-color: #fff;
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
  font-family: inherit;
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

const PopUp = styled.div`
  display: ${(props) => (props.isVisible ? "grid" : "none")};
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  z-index: 3;
  width: 70vw;
  height: 40vw;
  position: fixed;
  top: 4rem;
  left: 50%;
  background-color: #184d47;
  border-radius: 0.5em;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  box-shadow: 2px 2px 5px 3px #1b141461;
  grid-template-columns: 1fr 8fr 1fr;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-areas:
    ". . close"
    ". msg ."
    ". . button";
  ${(props) => props.isVisible && "animation: popup 1s"}
`;

const ExteriorDiv = styled.div`
  z-index: ${(props) => (props.isVisible ? 2 : -92)};
  opacity: 0.8;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #333;
  filter: blur(5px);
  ::after {
    opacity: initial;
  }
  ${(props) => props.isVisible && "animation: exterior 1s"}
`;
const TextDiv = styled.div`
  display: flex;
  place-items: center;
  color: #fff;
  grid-area: msg;
`;

const CloseDiv = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-start;
  color: #fff;
  grid-area: close;
  position: absolute;
  top: -40px;
  right: 10px;
  > p {
    font-size: 2rem;
    color: red;
    :hover {
      cursor: pointer;
    }
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
  PopUp,
  ExteriorDiv,
  TextDiv,
  CloseDiv,
};
