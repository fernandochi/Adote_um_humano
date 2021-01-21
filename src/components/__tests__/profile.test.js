import axios from "axios";
import CardSecondary from "../CardSecondary";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("axios");
const mockedAxios = axios;

describe("When user is on profile", () => {
  test("Shoul show the user information", async () => {
    let user = [
      {
        address: "Rua Nemphilim, 222",
        contact: 41123456,
        donor: false,
        email: "isabella@gmail.com",
        name: "Isabella",
        password: "1Aaloalo*",
      },
    ];

    mockedAxios.get.mockResolvedValueOnce([...user]);

    render(<CardSecondary user={user} />);
    const returnInformation = await screen.findByRole("img");
    expect(returnInformation).toBeInTheDocument();
  });
});
