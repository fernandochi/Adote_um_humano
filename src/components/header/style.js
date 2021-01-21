import styled from "styled-components";

const Container = styled.div`
  width: 99%;
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
  background-color: ${(props) =>
    props.location === props.path ? "#fad586" : "#d6efc7"};
  border: none;
  border-radius: 10px;
  :hover {
    border-bottom: 1px solid black;
    cursor: pointer;
  }
  @media (max-width: 700px) {
    display: none;
  }
`;

const Menu = styled.div`
  @media (min-width: 700px) {
    display: none;
  }
`;

export { Container, ContainerButtons, Button, Menu };
