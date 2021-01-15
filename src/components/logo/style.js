import styled from "styled-components";

const Text = styled.h1`
  font-family: "Amatic SC";
  font-weight: bolder;
  font-size: 30px;
  padding-right: 10px;

  @media (min-width: 768px) {
    font-size: 45px;
  }

  @media (min-width: 1000px) {
    font-size: 60px;
  }
`;

export { Text };
