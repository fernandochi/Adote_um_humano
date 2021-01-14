import { Route, Switch } from "react-router-dom";
import RegisterUser from "./pages/Register";
import LoginUser from "./pages/Login";
import RegisterAnimal from "./pages/AnimalForm";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <h1>awasome app</h1>
        </Route>

        <Route exact path="/login">
          <LoginUser />
        </Route>

        <Route path="/register">
          <RegisterUser />
        </Route>
        <Route path="/animal-form">
          <RegisterAnimal />
        </Route>
      </Switch>
    </>
  );
};

export default App;
