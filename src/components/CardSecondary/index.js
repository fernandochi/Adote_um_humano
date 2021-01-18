import {
  CardContainer,
  ImageContainer,
  InfoContainer,
  StyledButton,
  FormCheck,
  StyledSpam,
} from "./styles";
import { BsListCheck } from "react-icons/bs";

// const item = {
//   hidden: { y: 20, opacity: 0 },
//   visible: { y: 0, opacity: 1 },
// };

// const container = {
//   transition: {
//     delayChildren: 0.3,
//     straggerChildren: 0.2,
//   },
// };

const CardSecondary = ({
  img,
  name,
  email,
  phone,
  address,
  responsiveForm,
  onClick,
}) => {
  let items = [name, email, phone, address];

  return (
    <CardContainer>
      <ImageContainer>
        <img
          src="https://media.wired.com/photos/5cdefb92b86e041493d389df/1:1/w_988,h_988,c_limit/Culture-Grumpy-Cat-487386121.jpg"
          alt="animal"
        />
      </ImageContainer>
      <InfoContainer>
        {items.map((item) => {
          return <StyledSpam>{item}</StyledSpam>;
        })}

        {responsiveForm && (
          <a href="#">
            <FormCheck />
          </a>
        )}
      </InfoContainer>
    </CardContainer>
  );
};

export default CardSecondary;
