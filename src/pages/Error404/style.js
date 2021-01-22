import styled from "styled-components";

export const BackgrounDiv = styled.div`
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1047%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(126%2c 220%2c 237%2c 1)'%3e%3c/rect%3e%3cpath d='M 0%2c161 C 72%2c135.2 216%2c20.2 360%2c32 C 504%2c43.8 576%2c217.6 720%2c220 C 864%2c222.4 936%2c38 1080%2c44 C 1224%2c50 1368%2c208.8 1440%2c250L1440 560L0 560z' fill='rgba(2%2c 141%2c 38%2c 1)'%3e%3c/path%3e%3cpath d='M 0%2c353 C 96%2c381.4 288%2c495.8 480%2c495 C 672%2c494.2 768%2c358 960%2c349 C 1152%2c340 1344%2c429.8 1440%2c450L1440 560L0 560z' fill='rgba(214%2c 239%2c 199%2c 1)'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1047'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  > div > p {
    font-family: "Amatic SC", cursive;
    margin-left: 8px;
    font-size: 1.5rem;
    text-align: justify;

    a {
      text-decoration: none;
      border-bottom: 1px solid red;
      :hover {
        cursor: pointer;
      }
      :visited {
        color: initial;
      }
    }
  }
`;

export const ImgDiv = styled.div`
  display: flex;
  flex-flow: nowrap;
  align-items: center;
  background-color: #f5f5dccc;
  border-radius: 0.5rem;
  margin: 0 auto;
  min-width: 280px;
  width: 80vw;
  max-width: 600px;
  padding: 8px;
  > img {
    width: 45%;
  }
`;
