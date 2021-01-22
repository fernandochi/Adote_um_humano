import { Route, Switch } from "react-router-dom";
import { DonorRoute, AdopterRoute } from "./routes";

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
import EditProfilePage from "../pages/EditProfile";
import Responsible from "../pages/ResponsibleForm";
import MyAnimals from "../pages/MyAnimals";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/login" component={LoginUser} />

      <Route exact path="/register" component={RegisterUser} />

      <Route exact path="/animals" component={Animals} />

      <AdopterRoute
        exact
        path="/adopter/edit-profile"
        component={EditProfilePage}
      />

      <AdopterRoute exact path="/adopter" component={Profile} />

      <AdopterRoute exact path="/animals/:id" component={AnimalsProfile} />
      <AdopterRoute
        exact
        path="/adopter/responsible-form"
        component={Responsible}
      />

      <AdopterRoute
        exact
        path="/adopter/applications"
        component={WantToAdopt}
      />

      <DonorRoute exact path="/donor" component={Profile} />

      <DonorRoute
        exact
        path="/donor/edit-profile"
        component={EditProfilePage}
      />

      <DonorRoute exact path="/donor/animal-form" component={RegisterAnimal} />

      <DonorRoute exact path="/donor/edit-animal" component={EditAnimal} />

      <DonorRoute
        exact
        path="/donor/applications"
        component={HumansApplication}
      />

      <DonorRoute exact path="/donor/my-animals" component={MyAnimals} />

      <Route component={Error404} />
    </Switch>
  );
};

export default Routes;
