import Header from "../header/index";
import { render, screen } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
import { Router } from "react-router";
import { createMemoryHistory } from "history";
const history = createMemoryHistory();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "/",
  }),
}));

describe("When the user click in the login button", () => {
  test("should be able to navigate to login page", async () => {
    const { getByTestId } = render(
      <Router history={history}>
        <Header />
      </Router>
    );
    fireEvent.click(getByTestId("login"));
    expect(history.location.pathname).toEqual("/login");
  });
});

describe("When the user click in the register button", () => {
  test("should be able to navigate to register page", async () => {
    const { getByTestId } = render(
      <Router history={history}>
        <Header />
      </Router>
    );
    fireEvent.click(getByTestId("register"));
    expect(history.location.pathname).toEqual("/register");
  });
});
