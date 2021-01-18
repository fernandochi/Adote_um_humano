import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 100%;
  min-height: 100vh;
  position: relative;

  ul {
    display: flex;
    flex-flow: row wrap;
  }

  li {
    width: 25%;
    padding: 0 15px;
  }
`;
