import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgb(84 84 84 / 60%);
  }
`;

export const Modal = styled.div`
  position: absolute;
  width: 500px;
  height: auto;
  z-index: 2;
  background-color: #d6efc7;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const ModalHeader = styled.div`
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 20px;

  svg {
    height: 30px;
    width: 30px;
    fill: #184d47;
    transition: all ease-in-out 0.3s;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &:hover {
      svg {
        transform: rotate(90deg);
      }
    }
  }
`;

export const ModalContent = styled.div`
  padding: 20px;
  height: 200px;
  display: flex;
  align-items: center;

  @media (max-width: 370px) {
    height: 160px;
  }

  h2 {
    font-size: 2rem;
    text-align: center;
    color: #184d47;

    @media (max-width: 490px) {
      font-size: 1.6rem;
    }
  }
`;

export const ModalFooter = styled.div`
  height: 80px;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  button {
    border: none;
    background-color: #184d47;
    border-radius: 5px;
    height: 45px;
    width: 100%;
    max-width: 180px;
    font-size: 1.3rem;
    cursor: pointer;
    transition: all 0.3s;
    color: #fff;

    @media (max-width: 490px) {
      max-width: 35%;
      font-size: 1.1rem;
    }

    @media (max-width: 370px) {
      max-width: 40%;
    }
  }

  button:nth-of-type(1) {
    margin-right: 15px;
  }
`;
