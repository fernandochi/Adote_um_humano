import { useState, useEffect } from "react";
import ShowCaseComponent from "../../components/ShowCase";
import { GridContainer, HelpDiv } from "../Register/style";
import PopUpDiv from "./popup.jsx";
import AnimalForm from "../../components/AnimalForm";
import { useSelector, useDispatch } from "react-redux";
import { thunkIsDonor, thunkUserAuthenticated } from "../../redux/thunk";

const ResgisterAnimal = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const id = window.localStorage.getItem("id");
  const token = window.localStorage.getItem("accessToken");

  useEffect(() => {
    dispatch(thunkUserAuthenticated(token));
    dispatch(thunkIsDonor(id, token));
  }, [auth]);

  const [ReqError, SetReqError] = useState(false);

  const handleCloseInfo = () => {
    SetReqError(false);
  };

  return auth ? (
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
  ) : (
    <div>Não é possível acessar essa página</div>
  );
};

export default ResgisterAnimal;
