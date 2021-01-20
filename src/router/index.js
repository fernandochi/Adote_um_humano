import { Route, Redirect } from "react-router-dom";

import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = JSON.parse(window.localStorage.getItem("auth"));
  console.log(auth);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
export default PrivateRoute;

export const DonorRoute = ({ component: Component, ...rest }) => {
  const isDonor = JSON.parse(window.localStorage.getItem("isDonor"));
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isDonor) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/adopter",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
