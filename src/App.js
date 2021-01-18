import { Route, Switch } from "react-router-dom";
import RegisterUser from "./pages/Register";
import LoginUser from "./pages/Login";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import RegisterAnimal from "./pages/AnimalForm";
import EditAnimal from "./pages/EditAnimal";
import Error404 from "./pages/Error404";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header />
        </Route>

        <Route exact path="/login">
          <LoginUser />
        </Route>
        <Route path="/register">
          <RegisterUser />
        </Route>
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
      <Footer />
    </>
  );
};

export default App;
