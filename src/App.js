import { Route, Switch, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import PrivateRoute, { DonorRoute } from "./router";
import { thunkUserAuthenticated, thunkIsDonor } from "./redux/thunk";
import { useDispatch, useSelector } from "react-redux";

import LoginUser from "./pages/Login";
import Animals from "./pages/Animals";
import Header from "./components/header/index";
import Footer from "./components/footer/index";

import EditAnimal from "./pages/EditAnimal";
import Error404 from "./pages/Error404";
import EditProfilePage from "./pages/EditProfile";
import Profile from "./pages/Profile/index";

const RegisterAnimal = lazy(() => import("./pages/AnimalForm"));
const HomePage = lazy(() => import("./pages/Home"));
const RegisterUser = lazy(() => import("./pages/Register"));

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const id = window.localStorage.getItem("id");
  const token = window.localStorage.getItem("accessToken");

  useEffect(() => {
    dispatch(thunkUserAuthenticated(token));
    dispatch(thunkIsDonor(id, token));
  }, [location.pathname]);
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <div style={{ width: "100vw", height: "100vh", fontSize: "8rem" }}>
            Carregando...
          </div>
        }
      >
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/login">
            <LoginUser />
          </Route>

          <Route path="/register" component={RegisterUser} />

          <Route path="/animals" component={Animals} />

          <PrivateRoute path="/edit-profile" component={EditProfilePage} />

          <DonorRoute
            exact
            path="/donor/animal-form"
            component={RegisterAnimal}
          />

          <DonorRoute exact path="/donor/edit-animal" component={EditAnimal} />

          <PrivateRoute exact path="/goku" component={LoginUser} />

          <PrivateRoute path="/adopter" component={Profile} />

          <DonorRoute path="/donor" component={Profile} />

          <Route>
            <Error404 />
          </Route>
        </Switch>
      </Suspense>

      <Footer />
    </>
  );
};

export default App;
