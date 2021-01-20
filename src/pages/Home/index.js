import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { thunkUserAuthenticated, thunkIsDonor } from "../../redux/thunk";

const HomePage = () => {
  const dispatch = useDispatch();

  const id = window.localStorage.getItem("id");
  const token = window.localStorage.getItem("accessToken");

  useEffect(() => {
    dispatch(thunkUserAuthenticated(token));
    dispatch(thunkIsDonor(id, token));
  }, [token]);

  const auth = useSelector((state) => state.auth);
  console.log(auth);

  return <div>Home Page</div>;
};
export default HomePage;
