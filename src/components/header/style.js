import styled from "styled-components";

const Container = styled.h1`
  width: 100%;
  height: 50px;
  background-color: #d6efc7;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 10px;

  span {
    @media (min-width: 700px) {
      display: none;
    }
  }

  @media (min-width: 1000px) {
    padding: 40px;
    justify-content: space-around;
  }
`;

const ContainerButtons = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-around;
  @media (max-width: 700px) {
    display: none;
  }
`;

const Button = styled.button`
  font-family: "Amatic SC";
  font-size: 30px;
  padding: 5px 10px;
  background-color: #d6efc7;
  border: none;
  border-radius: 10px;
  :hover {
    background-color: #fad586;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

export { Container, ContainerButtons, Button };
