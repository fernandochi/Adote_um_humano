import axios from "axios";
import { userAuthenticated, isDonor } from "./actions";

export const thunkUserAuthenticated = (token) => (dispatch, _getState) => {
  axios
    .get("https://adote-um-humano.herokuapp.com/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch(userAuthenticated(true));
      window.localStorage.setItem("auth", true);
    })
    .catch(() => {
      console.log("erro muito feio, era para ser falso");
      dispatch(userAuthenticated(false));
      window.localStorage.setItem("auth", false);
    });
};

export const thunkIsDonor = (id, token) => async (dispatch, _getState) => {
  await axios
    .get(`https://adote-um-humano.herokuapp.com/users/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch(isDonor(res.data.donor));
      dispatch(userAuthenticated(true));
      window.localStorage.setItem("isDonor", res.data.donor);
      window.localStorage.setItem("auth", true);
    })
    .catch((err) => {
      dispatch(isDonor(false));
      dispatch(userAuthenticated(true));
      window.localStorage.setItem("isDonor", false);
      window.localStorage.setItem("auth", false);
    });
};
