import styled from "styled-components";
import CardPrimary from "../../components/CardPrimary/";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 100%;
  min-height: 80vh;
  position: relative;
  height: auto;

  ul {
    display: flex;
    flex-flow: row wrap;
    margin-top: 45px;
    list-style: none;
  }

  li {
    width: 20%;
    padding: 0 15px;
    margin-bottom: 30px;

    @media (max-width: 2000px) {
      width: 25%;
    }

    @media (max-width: 1440px) {
      width: 33.3333%;
    }

    @media (max-width: 1050px) {
      width: 50%;
    }

    @media (max-width: 600px) {
      width: 100%;
      padding: 0;
    }
  }
`;

const NewCard = styled(CardPrimary)`
  width: 400px;
`;

const Text = styled.div`
  font-family: Roboto;
  font-style: italic;
  font-weight: 300;
  font-size: 14px;
  color: #000000;
`;

export { Container, Text, NewCard };
