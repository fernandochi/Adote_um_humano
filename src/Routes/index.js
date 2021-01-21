import { Route, Switch } from "react-router-dom";

// PAGES
import Home from "../pages/Home";
import RegisterUser from "../pages/Register";
import LoginUser from "../pages/Login";
import Animals from "../pages/Animals";
import RegisterAnimal from "../pages/AnimalForm";
import EditAnimal from "../pages/EditAnimal";
import Error404 from "../pages/Error404";
import AnimalsProfile from "../pages/AnimalsProfile";
import Profile from "../pages/Profile/index";
import HumansApplication from "../pages/HumansApplication";
import WantToAdopt from "../pages/WantToAdopt";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/login" component={LoginUser} />

      <Route exact path="/register" component={RegisterUser} />

      <Route exact path="/animals" component={Animals} />

      <Route exact path="/animals/:id" component={AnimalsProfile} />

      <Route exact path="/donor/animal-form" component={RegisterAnimal} />

      <Route exact path="/adopter" component={Profile} />

      <Route exact path="/donor" component={Profile} />

      <Route exact path="/donor/edit-animal" component={EditAnimal} />

      <Route exact path="/donor/applications" component={HumansApplication} />

      <Route exact path="/adopter/applications" component={WantToAdopt} />

      <Route component={Error404} />
    </Switch>
  );
};

export default Routes;
