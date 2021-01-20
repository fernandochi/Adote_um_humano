import { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = JSON.parse(window.localStorage.getItem("auth"));

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
                pathname: "/",
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

export const AdopterRoute = ({ component: Component, ...rest }) => {
  const isDonor = window.localStorage.getItem("isDonor");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isDonor) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
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
