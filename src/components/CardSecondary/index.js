import {
  CardContainer,
  ImageContainer,
  InfoContainer,
  StyledButton,
} from "./styles";

import { motion } from "framer-motion";

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const container = {
  transition: {
    delayChildren: 0.3,
    straggerChildren: 0.2,
  },
};

const CardSecondary = ({
  img,
  name,
  contact,
  phone,
  address,
  responsiveForm,
}) => {
  let items = [img, name, contact, phone, address, responsiveForm];

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
          return <span>{item}</span>;
        })}

        <StyledButton onClick={onClick}>Mais informações</StyledButton>
      </InfoContainer>
    </CardContainer>
  );
};

export default CardSecondary;
