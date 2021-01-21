import {
  Container,
  Card,
  Image,
  Information,
  Text,
  TextInformation,
  Observations,
  Button,
} from "./style";
import { useLocation, useHistory } from "react-router-dom";
import { useState } from "react";
import Subscribe from "../SubscribeButton";
import Notification from "../notification/index";

const AnimalCard = ({ animal }) => {
  const history = useHistory();
  const location = useLocation();
  const [added, setAdded] = useState(false);

  setTimeout(() => {
    setAdded(false);
  }, 5000);

  return (
    <Container>
      <Notification added={added} />
      <Card>
        {animal.map((animal, index) => (
          <>
            <Information>
              <Image src={animal.avatar} alt={animal.name} />
              <TextInformation>
                <Text bolder={true} key={animal.name}>
                  {animal.name}
                </Text>
                <Text key={animal.age}>Idade: {animal.age}</Text>
                <Text key={animal.size}>
                  Porte: {animal.size === "small" ? "Pequeno" : "Grande"}{" "}
                  {animal.size === "medium" && "Médio"}
                </Text>
                <Text key={animal.color}>Pelagem: {animal.color}</Text>
                <Text key={animal.castrated}>
                  É castrado (a): {animal.castrated === false ? "Não" : "Sim"}
                </Text>
                <Text key={animal.vacinated}>
                  É vacinado (a): {animal.vacinated === false ? "Não" : "Sim"}
                </Text>
              </TextInformation>
            </Information>
            <Text margin={true}>Observações:</Text>
            <Observations key={animal.id}>{animal.obs}</Observations>
          </>
        ))}
      </Card>
      {location.pathname === "/donor/animal/:id" ? (
        <Button onClick={() => history.push("/donor/edit-animal")}>
          Editar Perfil
        </Button>
      ) : (
        <Button onClick={() => setAdded(true)}>
          <Subscribe />
        </Button>
      )}
    </Container>
  );
};

export default AnimalCard;
