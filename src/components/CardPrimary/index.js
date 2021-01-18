// STYLE
import { Card, CardImage, CardInfo } from "./style";

const CardPrimary = ({ animal, setOpen }) => {
  return (
    <>
      <Card>
        <CardImage>
          <img src={animal.avatar} alt={animal.name} />
        </CardImage>
        <CardInfo>
          <span>{animal.name}</span>
          <span>
            {animal.age <= 1 ? `${animal.age} ano` : `${animal.age} anos`}
          </span>
          <button onClick={() => setOpen(true)}>Mais informações</button>
        </CardInfo>
      </Card>
    </>
  );
};

export default CardPrimary;
