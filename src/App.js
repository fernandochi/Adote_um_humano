import { useLocation } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { thunkUserAuthenticated, thunkIsDonor } from "./redux/thunk";

import Routes from "./Routes";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const id = window.localStorage.getItem("id");
  const token = window.localStorage.getItem("accessToken");

  useEffect(() => {
    dispatch(thunkUserAuthenticated(token));
    dispatch(thunkIsDonor(id, token));
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
};

export default App;
