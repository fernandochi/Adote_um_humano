import { ShowCase } from "../../pages/Register/style";
import axios from "axios";
import { useEffect, useState } from "react";
import { editAnimal } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import CardPrimary from "../CardPrimary";
import EditIcon from "@material-ui/icons/Edit";
import { EditDiv } from "./style";

const ShowCaseComponent = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [CurrentAnimals, SetCurrentAnimals] = useState([]);
  const id = window.localStorage.getItem("id");
  useEffect(() => {
    axios
      .get(`https://adote-um-humano.herokuapp.com/animals?donorId=${id}`)
      .then((res) => {
        SetCurrentAnimals(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const Edit = (item) => {
    dispatch(editAnimal(item));
    window.localStorage.setItem("animal", JSON.stringify(item));
    history.push("/donor/edit-animal");
  };
  return (
    <ShowCase>
      <p>Os seus atuais animais</p>
      <section>
        {CurrentAnimals.map((item, idx) => {
          return (
            <>
              <CardPrimary key={idx} animal={item} />
              <EditDiv onClick={() => Edit(item)}>
                <EditIcon />
              </EditDiv>
            </>
          );
        })}
      </section>
    </ShowCase>
  );
};

export default ShowCaseComponent;
