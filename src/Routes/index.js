import { Route, Switch } from "react-router-dom";
import PrivateRoute, { DonorRoute, AdopterRoute } from "./routes";

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
import EditProfilePage from "../pages/EditProfile";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/login" component={LoginUser} />

      <Route exact path="/register" component={RegisterUser} />

      <Route exact path="/animals" component={Animals} />

      <AdopterRoute exact path="/animals/:id" component={AnimalsProfile} />

      <DonorRoute exact path="/donor/animal-form" component={RegisterAnimal} />

      <AdopterRoute exact path="/adopter" component={Profile} />

      <DonorRoute exact path="/donor" component={Profile} />

      <DonorRoute exact path="/donor/edit-animal" component={EditAnimal} />

      <PrivateRoute exact path="/edit-profile" component={EditProfilePage} />

      <Route component={Error404} />
    </Switch>
  );
};

export default Routes;
