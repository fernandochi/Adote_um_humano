import styled from "styled-components";

export const Card = styled.div`
  background-color: #184d47;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 30px 0;
  height: 182px;
  box-shadow: 0px 2px 4px -1px rgba(51, 51, 51, 0.2),
    0px 4px 5px 0px rgba(51, 51, 51, 0.14),
    0px 1px 10px 0px rgba(51, 51, 51, 0.12);

  @media (max-width: 768px) {
    height: 160px;
  }

  @media (max-width: 330px) {
    height: 140px;
    padding: 15px 0;
  }
`;

export const CardImage = styled.div`
  @media (max-width: 1440px) {
    display: flex;
    align-items: center;
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;

    @media (max-width: 1440px) {
      width: 100px;
      height: 100px;
    }

    @media (max-width: 768px) {
      width: 90px;
      height: 90px;
    }

    @media (max-width: 330px) {
      width: 80px;
      height: 80px;
    }
  }
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 45%;

  @media (max-width: 1440px) {
    width: 50%;
  }

  span {
    color: #fff;
    font-size: 1.2rem;

    @media (max-width: 768px) {
      font-size: 1rem;
    }
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

    @media (max-width: 1440px) {
      max-width: 90%;
    }

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    &:hover {
      background-color: #80a069;
    }

    &:focus {
      outline: none;
    }
  }
`;
