// STYLE
import { Card } from "./style";

const CardPrimary = ({ animal }) => {
  return (
    <Card>
      <div className="side__left">
        <img src="https://i.pravatar.cc/300" alt="" />
      </div>
      <div className="side__right">
        <span>{animal.name}</span>
        <span>1 ano</span>
        <button>Mais informações</button>
      </div>
    </Card>
  );
};

export default CardPrimary;
