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

const Card = ({ img, name, age, onClick, isAnimal, animalName }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <img
          src="https://media.wired.com/photos/5cdefb92b86e041493d389df/1:1/w_988,h_988,c_limit/Culture-Grumpy-Cat-487386121.jpg"
          alt="animal"
        />
      </ImageContainer>
      <InfoContainer>
        <span>{name}</span>
        {isAnimal ? (
          <span>{age > 1 ? `${age} anos` : `${age} ano`}</span>
        ) : (
          <span>{`quer adotar ${animalName}`}</span>
        )}
        <StyledButton onClick={onClick}>Mais informações</StyledButton>
      </InfoContainer>
    </CardContainer>
  );
};

export default Card;
