import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import RegisterUser from "./pages/Register";
import LoginUser from "./pages/Login";
import Header from "./components/header/index";
import Footer from "./components/footer/index";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>

        <Route exact path="/login">
          <LoginUser />
        </Route>

        <Route exact path="/register">
          <RegisterUser />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
