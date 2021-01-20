import { Route, Switch } from "react-router-dom";
import RegisterUser from "./pages/Register";
import LoginUser from "./pages/Login";
import Animals from "./pages/Animals";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import RegisterAnimal from "./pages/AnimalForm";
import EditAnimal from "./pages/EditAnimal";
import Error404 from "./pages/Error404";
import Profile from "./pages/Profile/index";
import MyAnimals from "./pages/MyAnimals";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/"></Route>
        <Route exact path="/login">
          <LoginUser />
        </Route>
        <Route path="/register">
          <RegisterUser />
        </Route>
        <Route path="/animals" component={Animals} />
        <Route path="/donor/animal-form">
          <RegisterAnimal />
        </Route>
        <Route path="/adopter">
          <Profile />
        </Route>
        <Route path="/donor">
          <Profile />
        </Route>
        <Route path="/donor/edit-animal">
          <EditAnimal />
        </Route>
        <Route path="/MyAnimals" component={MyAnimals} />
        <Route>
          <Error404 />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
