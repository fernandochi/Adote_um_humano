import { Route, Link, Switch } from "react-router-dom";
import RegisterUser from "./pages/Register";
import RegisterAnimal from "./pages/AnimalForm";
const App = () => {
  return (
    <>
      {/* <Link to="/register">Cadastrar</Link> */}

      <Switch>
        <Route exact path="/">
          <h1>awasome app</h1>
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
