import styled, { keyframes } from "styled-components";
import BackgroundImage3 from "../../assets/img/Background3.png";

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  background-image: url(${BackgroundImage3});
  background-repeat: no-repeat;
  background-size: cover;
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
  height: 100vh;
  padding: 15px 10px 10px 10px;
  border-radius: 5px;

  @media (min-width: 1000px) {
    margin: auto;
    width: 30vw;
    height: 85vh;
  }
`;

const Label = styled.label`
  font-size: 1em;
  @media (min-width: 700px) {
    font-size: 1.25em;
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
  color: #96bb7c;
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
  font-family: "Amatic SC", cursive;
  font-size: 1.7rem;
  z-index: 3;
  width: 90vw;
  height: 20vh;
  position: fixed;
  top: 8rem;
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
  ${(props) => props.isVisible && `animation: ${popup} 1s`}
`;

const ExteriorDiv = styled.div`
  z-index: ${(props) => (props.isVisible ? 2 : -92)};
  opacity: 0.8;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  ::after {
    opacity: initial;
  }
  ${(props) => props.isVisible && `animation: ${exterior} 1s`}
`;
const TextDiv = styled.div`
  display: flex;
  place-items: center;
  color: #fff;
  grid-area: msg;
  font: inherit;
`;

const CloseDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  color: #fff;
  grid-area: close;

  svg {
    height: 30px;
    width: 30px;
    fill: #fff;
    transition: all ease-in-out 0.3s;
    :hover {
      transform: rotate(90deg);
      cursor: pointer;
    }
  }
`;

const InputImg = styled.input`
  color: #001f43;
  width: 100%;
  font-size: 10px;
  color: transparent;
  outline: none;

  ::focus {
    outline: none;
  }

  ::-webkit-file-upload-button {
    visibility: hidden;
    display: none;
  }

  &:before {
    font: inherit;
    height: 25px;
    content: "Escolha uma foto";
    background-color: #fad586;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 130px;
    color: #333;
    border: none;
    border-radius: 20px;
    padding: 9px;
    outline: none;
    white-space: nowrap;
    border-radius: 40px;
    -webkit-user-select: none;
    cursor: pointer;
    font-size: 14px;
    outline: none;
    text-align: center;
    margin: 0 auto;
  }
`;

const Img = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  object-fit: cover;
  border-radius: 1px solid #333;
`;

const GridContainer = styled(Container)`
  background-color: #d6efc7;
  background-size: 50%;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;

  @media (min-width: 1000px) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "help help"
      "form current";
  }
`;

const ShowCase = styled.div`
  margin: 0 auto;
  justify-self: end;
  align-self: auto;
  font-size: 2rem;
  width: 90vw;
  height: 85vh;
  max-height: 85vh;
  background-color: beige;
  padding: 8px;
  border-radius: 1rem;
  box-sizing: border-box;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: red;
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (min-width: 1000px) {
    margin-right: 15px;
    width: 30vw;
    align-self: center;
    grid-area: current;
  }
`;

const FormAnimals = styled(Form)`
  font-size: 1.25rem;
  width: 90vw;
  margin: 0 auto;
  height: initial;

  @media (min-width: 1000px) {
    margin: auto;
    margin-left: 15px;
    width: 30vw;
    height: 85vh;
    grid-area: form;
  }
`;

const HelpDiv = styled.div`
  width: 90vw;
  margin: 0 auto;
  background: beige;
  color: red;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  text-align: justify;
  padding: 8px;
  margin-top: 1rem;

  @media (min-width: 1000px) {
    grid-area: help;
  }
`;

const exterior = keyframes`
 0% {
    background-color: red;
    opacity: 0;
  }
  80% {
    background-color: red;
  }

  100% {
    background-color: rgba(0, 0, 0, 0.6);
    opacity: 0.8;
  }
`;

const popup = keyframes`
 from {
    top: -8rem;
    opacity: 0;
  }
  to {
    top: 4rem;
    opacity: 1;
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
  InputImg,
  Img,
  GridContainer,
  ShowCase,
  FormAnimals,
  HelpDiv,
};
