import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  /* height: 100%; */
`;

const Title = styled.h1`
  text-align: center;
  font-family: "Amatic SC", cursive;
  font-size: 35px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #184d47;
  width: 80%;
  height: 450px;
  margin: 10% auto;
  padding: 10px;
`;

const Label = styled.label``;

const Input = styled.input``;

const TextArea = styled.textarea``;

const Errors = styled.span``;

const Button = styled.button``;

const Link = styled.span``;

export { Container, Title, Form, Label, Input, TextArea, Errors, Button, Link };
