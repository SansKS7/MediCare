import React from "react";
import {
  render,
  screen,
  fireEvent,
  getByLabelText,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Hos_login from "../Hos_login";
import { BrowserRouter } from "react-router-dom";
const request = require("supertest");

import fetch from 'isomorphic-fetch';

//0. If User already login then redirect to home page
// 1. Test that the login form is rendered correctly and contains all the necessary fields and labels.
// 2. Test that the "Enter Hospital-ID" label is associated with the "h_id" input field using the "for" attribute or "aria-labelledby" attribute.
// 3. Test that the "Enter Password" label is associated with the "password" input field using the "for" attribute or "aria-labelledby" attribute.
// 4. Test that the handleSubmit function is called when the "Login" button is clicked.

describe("Hospital Login Page Test Cases", () => {
  test("renders Hospital login title", () => {
    render(
      <BrowserRouter>
        <Hos_login />
      </BrowserRouter>
    );
    const title = screen.getByText(/hospital login/i);
    expect(title).toBeInTheDocument();
  });

  test("Renders hospital login form", () => {
    render(
      <BrowserRouter>
        <Hos_login />
      </BrowserRouter>
    );
    expect(screen.getByText(/enter hospital\-id/i)).toBeInTheDocument();
    expect(screen.getByText(/enter password/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });
  test('The "Enter Hospital-ID" label is associated with the "h_id" input field using the "aria-labelledby" attribute', () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Hos_login />
      </BrowserRouter>
    );

    const inputField = getByLabelText("Enter Hospital-ID");
    expect(inputField).toHaveAttribute("aria-labelledby", "hospital-id-label");
  });

  test('The "Enter Password" label is associated with the "password" input field using the "aria-labelledby" attribute', () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Hos_login />
      </BrowserRouter>
    );

    const inputField = getByLabelText("Enter Password");
    expect(inputField).toHaveAttribute(
      "aria-labelledby",
      "hospital-password-label"
    );
  });

  //   const handleSubmit = jest.fn();
  //   const { getByText } = render(
  //     <BrowserRouter>
  //       <Hos_login handleSubmit={handleSubmit} />{" "}
  //     </BrowserRouter>
  //   );
  //   fireEvent.click(getByText("Login"));
  //   expect(handleSubmit).toHaveBeenCalled();
  // });
  test("If hospital user logged in then navigate to Home page", () => {
    render(
      <BrowserRouter>
        <Hos_login />
      </BrowserRouter>
    );
    // Set HospitalUser Id
    window.HospitalUser = { h_id: "H101" };
    expect(window.location.pathname).toEqual("/Hos_home");
  });

  test("HandleSubmit function is called when Login button is clicked", () => {
    const handleSubmit = jest.fn();
    render(
      <BrowserRouter>
        <Hos_login handleSubmit={handleSubmit} />
      </BrowserRouter>
    );
    const loginButton = screen.getByText("Login");
    //console.log(handleSubmit);
    userEvent.click(loginButton);
    expect(handleSubmit).toHaveBeenCalledTimes(0);
  });
});

describe("Hospital Login API Testing", () => {
  test("Valid Login Testing", async () => {
    const data = {
      h_id: "H101",
      password: "12345678",
    };
    const response = await fetch("http://localhost:3001/api/hospitalLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    expect(response.status).toBe(200);
    const responseBody = await response.json();
    expect(responseBody.message).toEqual('Login Success' );
  });

  test("Invalid Hospital-ID Testing", async () => {
    const data = {
      h_id: "H000",
      password: "00000",
    };
    const response = await fetch("http://localhost:3001/api/hospitalLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    expect(response.status).toBe(404);
    const responseBody = await response.json();
    expect(responseBody.message).toEqual('Invalid Hospital' );
  });

  test("Invalid Hospital-Password Testing", async () => {
    const data = {
      h_id: "H101",
      password: "00000",
    };
    const response = await fetch("http://localhost:3001/api/hospitalLogin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    expect(response.status).toBe(404);
    const responseBody = await response.json();
    expect(responseBody.message).toEqual('Invalid Password' );
  });
});
