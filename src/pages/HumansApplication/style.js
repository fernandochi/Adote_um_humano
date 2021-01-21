import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-gap: 10px;
  list-style: none;
  width: 100vw;
  justify-content: center;
`;

const Text = styled.div`
  font-family: Roboto;
  font-style: italic;
  font-weight: 300;
  font-size: 14px;
  color: #000000;
`;

export { Container, Text };
