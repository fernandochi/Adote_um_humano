import { Route, Switch } from "react-router-dom";
import RegisterUser from "./pages/Register";
import LoginUser from "./pages/Login";
import Header from "./components/header/index";
import Footer from "./components/footer/index";

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
      </Switch>
      <div>alooooo</div>
      <Footer />
    </>
  );
};

export default App;
