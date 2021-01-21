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

const Text = styled.div`
  font-family: Roboto;
  font-style: italic;
  font-weight: 300;
  font-size: 14px;
  color: #000000;
`;

export { Container, Text };
