import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: #fad586;
  box-shadow: 0px 15px 13px -22px rgba(125, 125, 125, 1);
`;

export const Form = styled.form`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  > fieldset {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }

  > fieldset legend {
    font-family: "Amatic SC", cursive;
    font-size: 1.5rem;
    color: #000 !important;
    margin-bottom: 10px;
  }

  > fieldset > div {
    flex-direction: row;
    justify-content: center;
    width: 100%;
  }

  > fieldset .MuiTypography-body1 {
    font-family: "Amatic SC", cursive;
    font-size: 1.2rem;
  }
  > button {
    background-color: #174d47;
    font-size: 1.1rem;
    border: none;
    border-radius: 5px;
    color: #fff;
    height: 30px;
    width: 100px;
    margin-bottom: 50px;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }
`;
