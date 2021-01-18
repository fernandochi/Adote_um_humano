import { Route, Switch } from "react-router-dom";
import RegisterUser from "./pages/Register";
import LoginUser from "./pages/Login";
import Animals from "./pages/Animals";
import Header from "./components/header/index";
import Footer from "./components/footer/index";
import RegisterAnimal from "./pages/AnimalForm";
import Error404 from "./pages/Error404";
<<<<<<< HEAD
import AdopterProfile from "./pages/AdopterProfile";
=======
import CardSecondary from "./components/CardSecondary";
import imgTest from "./assets/img/306277-min.png";
>>>>>>> c4a2a9e91d2ce2b832d32a41a14b33a2be4947d2

const App = () => {
  return (
    <>
      <Header />
      <Switch>
<<<<<<< HEAD
        <Route exact path="/">
          <Header />
          <CardSecondary
            img={imgTest}
            name="Viktor Fagioanto"
            email="viktor@gmail.com"
            phone="(11) 94729-2091"
            address="Rua Logo Ali, 150 - San Andreas - SP"
            responsiveForm
          />
        </Route>
=======
        <Route exact path="/"></Route>
>>>>>>> b928e001ba71f31e1a5f8831786f2ef373640ebb

        <Route exact path="/login">
          <LoginUser />
        </Route>
        <Route path="/register">
          <RegisterUser />
        </Route>

        <Route path="/animals" component={Animals} />
        <Route path="/animal-form">
          <RegisterAnimal />
        </Route>
        <Route path="/adopter">
          <AdopterProfile />
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
