import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  font-family: "Amatic SC", cursive;
  position: absolute;
  backdrop-filter: blur(3px);
  @media (min-width: 1000px) {
    padding-top: 50px;
  }
`;

export { Container };
