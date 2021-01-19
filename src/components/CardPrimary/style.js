import styled from "styled-components";

export const Card = styled.div`
  background-color: #184d47;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 30px 0;
  margin-bottom: 30px;
  height: 182px;
  box-shadow: 0px 2px 4px -1px rgba(51, 51, 51, 0.2),
    0px 4px 5px 0px rgba(51, 51, 51, 0.14),
    0px 1px 10px 0px rgba(51, 51, 51, 0.12);
`;

export const CardImage = styled.div`
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 45%;

  span {
    color: #fff;
    font-size: 1.2rem;
  }

  button {
    border: none;
    background-color: #96bb7c;
    border-radius: 5px;
    height: 35px;
    width: 100%;
    max-width: 180px;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s;
    color: #fff;

    &:hover {
      background-color: #80a069;
    }

    &:focus {
      outline: none;
    }
  }
`;
