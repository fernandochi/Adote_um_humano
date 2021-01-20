import { useState } from "react";
import ShowCaseComponent from "../../components/ShowCase";
import { GridContainer, HelpDiv } from "../Register/style";
import PopUpDiv from "./popup.jsx";
import AnimalForm from "../../components/AnimalForm";

const ResgisterAnimal = () => {
  const [ReqError, SetReqError] = useState(false);

  const handleCloseInfo = () => {
    SetReqError(false);
  };

  return (
    <>
      <PopUpDiv isVisible={ReqError} closeInfo={handleCloseInfo} />
      <GridContainer>
        <HelpDiv>
          <p>
            Para cadastrar seu amigo pet, basta preencher o formulário abaixo.
            Escolha uma foto bem <b>bonitona</b> e preencha os demais campos
            para ajudar os candidatos a encontrarem seu pet mais fácil
          </p>
        </HelpDiv>
        <AnimalForm ReqError={ReqError} SetReqError={SetReqError} />
        <ShowCaseComponent />
      </GridContainer>
    </>
  );
};

export default ResgisterAnimal;
