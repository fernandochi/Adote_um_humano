import { Route, Link, Switch } from "react-router-dom";
import RegisterUser from "./pages/Register";
const App = () => {
  return (
    <>
      <Link to="/register">Cadastrar</Link>
      <Switch>
        <Route exact path="/">
          <h1>awasome app</h1>
        </Route>
        <Route path="/register">
          <RegisterUser />
        </Route>
      </Switch>
    </>
  );
};

export default App;
