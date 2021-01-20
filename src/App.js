import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import RegisterUser from "./pages/Register";
import LoginUser from "./pages/Login";
import Animals from "./pages/Animals";
import RegisterAnimal from "./pages/AnimalForm";
import EditAnimal from "./pages/EditAnimal";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/login">
          <LoginUser />
        </Route>

        <Route exact path="/register">
          <RegisterUser />
        </Route>

        <Route path="/animals" component={Animals} />
        <Route path="/donor/animal-form">
          <RegisterAnimal />
        </Route>
        <Route path="/donor/edit-animal">
          <EditAnimal />
        </Route>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </>
  );
};

export default App;
