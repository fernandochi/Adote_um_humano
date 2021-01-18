import styled from "styled-components";
import { BsListCheck } from "react-icons/bs";

export const CardContainer = styled.div`
  width: 400px;
  height: 200px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 10px 1px black;
  background-color: #184d47;
  display: flex;
  flex-wrap: nowrap;
`;

export const ImageContainer = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;

  img {
    width: 70%;
    height: 60%;
    border-radius: 50%;
    /* border: 4px solid orange; */
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

export const FormCheck = styled(BsListCheck)`
  width: 25px;
  height: 25px;
  color: white;
  justify-self: flex-end;
`;

export const StyledButton = styled.div`
  background-color: #96bb7c;
  line-height: 2rem;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
`;

export const StyledSpam = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  text-align: center;
`;
