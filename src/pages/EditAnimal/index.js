import { useState } from "react";
import PopUpDiv from "../AnimalForm/popup.jsx";
import styled from "styled-components";
import EditAnimalForm from "../../components/EditAnimalForm";

const BackgroundDivColor = styled.div`
  background-color: #d6efc7;
  min-height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  color: white;
  font-family: "Amatic SC", cursive;
`;

const EditAnimal = () => {
  const [ReqError, SetReqError] = useState(false);

  const handleCloseInfo = () => {
    SetReqError(false);
  };

  return (
    <BackgroundDivColor>
      <PopUpDiv isVisible={ReqError} closeInfo={handleCloseInfo} />

      <EditAnimalForm ReqError={ReqError} SetReqError={SetReqError} />
    </BackgroundDivColor>
  );
};

export default EditAnimal;
