import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import RegisterUser from "./pages/Register";
import LoginUser from "./pages/Login";
import Animals from "./pages/Animals";
import RegisterAnimal from "./pages/AnimalForm";
import EditAnimal from "./pages/EditAnimal";
import Error404 from "./pages/Error404";
import Profile from "./pages/Profile/index";
import UserDashboard from "./pages/UserDashboard";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/donor/adopters">
          <UserDashboard />
        </Route>

        <Route exact path="/adopter/animals">
          <UserDashboard />
        </Route>

        <Route exact path="/login">
          <LoginUser />
        </Route>

        <Route exact path="/register">
          <RegisterUser />
        </Route>

        <Route exact path="/animals" component={Animals} />

        <Route exact path="/donor/animal-form">
          <RegisterAnimal />
        </Route>

        <Route exact path="/adopter">
          <Profile />
        </Route>

        <Route exact path="/donor">
          <Profile />
        </Route>

        <Route exact path="/donor/edit-animal">
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
