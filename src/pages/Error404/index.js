import { BackgrounDiv, ImgDiv } from "./style";

const Error404 = () => {
  return (
    <BackgrounDiv>
      <ImgDiv>
        <img src="https://i.imgur.com/lKJiT77.png" alt="doguinho" />
        <p>
          Oh não, o doguinho comeu a página. Por favor volte para a{" "}
          <a href="/">home</a>
        </p>
      </ImgDiv>
    </BackgrounDiv>
  );
};

export default Error404;
