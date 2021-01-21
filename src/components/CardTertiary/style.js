import styled from "styled-components";

export const CardContainer = styled.div`
  width: 90%;
  height: 300px;
  margin: 50px auto;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 1px black;
  background-color: #184d47;
  display: flex;
  flex-wrap: nowrap;

  @media (min-width: 600px) {
    width: 60%;
  }

  @media (min-width: 600px) {
    width: 40%;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;

  img {
    width: 75%;
    height: 50%;
    border-radius: 50%;
    border: 4px solid orange;

    @media (min-width: 600px) {
      width: 60%;
    }
  }
`;

export const InfoContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: #fff;
`;

export const StyledButton = styled.div`
  background-color: #96bb7c;
  line-height: 2rem;
  border-radius: 5px;
  padding: 5px;
  width: 200px;
  margin: auto;
  text-align: center;
  font-size: 25px;
  color: white;
  font-weight: bolder;

  :hover {
    background-color: #6c8759;
    cursor: pointer;
    transition: all 0.3s;
  }
`;

export const StyledSpam = styled.span`
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
