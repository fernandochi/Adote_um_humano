import { Route, Switch } from "react-router-dom";
import RegisterUser from "./pages/Register";
import LoginUser from "./pages/Login";
import Logo from "./components/logo/index";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <h1>awasome app</h1>
          <Logo />
        </Route>

        <Route exact path="/login">
          <LoginUser />
        </Route>

        <Route path="/register">
          <RegisterUser />
        </Route>
      </Switch>
    </>
  );
};

export default App;
