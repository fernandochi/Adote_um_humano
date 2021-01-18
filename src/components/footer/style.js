import styled from "styled-components";

const Container = styled.h1`
  width: 100%;
  height: 60px;
  background-color: #d6efc7;
  font-family: "Amatic SC", cursive;
  font-size: 16px;
  font-weight: bold;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 700px) {
    font-size: 18px;
  }
`;

const Text = styled.div`
  /* display: flex;
  flex-wrap: no;
  justify-content: center;
  align-items: center; */
`;

const Link = styled.a`
  color: #e3b36f;

  @media (min-width: 700px) {
    padding: 0 5px;
  }
`;

export { Container, Text, Link };
