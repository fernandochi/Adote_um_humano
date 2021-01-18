import { Route, Switch } from "react-router-dom";
import RegisterUser from "./pages/Register";
import LoginUser from "./pages/Login";
import RegisterAnimal from "./pages/AnimalForm";
import EditAnimal from "./pages/EditAnimal";

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
        <Route path="/edit-animal">
          <EditAnimal />
        </Route>
      </Switch>
    </>
  );
};

export default App;
