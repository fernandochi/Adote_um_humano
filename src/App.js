import { Route, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";

import LoginUser from "./pages/Login";
import Animals from "./pages/Animals";
import Header from "./components/header/index";
import Footer from "./components/footer/index";

import EditAnimal from "./pages/EditAnimal";
import Error404 from "./pages/Error404";
import EditProfilePage from "./pages/EditProfile";
import PrivateRoute, { DonorRoute } from "./router";

const RegisterAnimal = lazy(() => import("./pages/AnimalForm"));
const HomePage = lazy(() => import("./pages/Home"));
const RegisterUser = lazy(() => import("./pages/Register"));

const App = () => {
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

          {/* <PrivateRoute
            exact
            path="/donor/animal-form"
            component={RegisterAnimal}
          /> */}
          <Route exact path="/donor/animal-form" component={RegisterAnimal} />

          <Route path="/edit-profile">
            <EditProfilePage />
          </Route>
          {/* <DonorRoute exact path="/donor/edit-animal" component={EditAnimal} /> */}
          <Route exact path="/donor/edit-animal" component={EditAnimal} />
          <PrivateRoute exact path="/goku" component={LoginUser} />
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
