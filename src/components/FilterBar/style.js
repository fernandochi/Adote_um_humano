import styled from "styled-components";

export const Filter = styled.div`
  height: 60px;
  background-color: #fad586;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 5%;

  button {
    height: 40px;
    width: 80px;
    background-color: #fad586;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 1rem;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  span {
    font-size: 1.1rem;
  }

  svg {
    height: 20px;
    width: 20px;
  }
`;
