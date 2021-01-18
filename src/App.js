import { Route, Switch } from "react-router-dom";
import RegisterUser from "./pages/Register";
import LoginUser from "./pages/Login";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import RegisterAnimal from "./pages/AnimalForm";
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
        <Route path="/animal-form">
          <RegisterAnimal />
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
