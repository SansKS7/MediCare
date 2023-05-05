import React from "react";
import {
  render,
  screen,
  fireEvent,
  getByLabelText,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Hos_home from "../Hos_home";
import { BrowserRouter } from "react-router-dom";
import fetch from "isomorphic-fetch";


describe('Checking Hospital Home Component Rendering ', () => {

  test("Rendering the Header Section", () => {
    render(
      <BrowserRouter>
        <Hos_home />
      </BrowserRouter>
    );
    const logoImage = screen.getByRole("link", {
      name: /medicare/i,
    });
    expect(logoImage).toBeInTheDocument();
  });
  

  test("Rendering the About Section", () => {
    render(
      <BrowserRouter>
        <Hos_home/>
      </BrowserRouter>
    );
    const aboutUs = screen.getByRole('heading', {
      name: /about us/i
    });
    expect(aboutUs).toBeInTheDocument();
  });
  test("Rendering the FAQ Section", () => {
    render(
      <BrowserRouter>
        <Hos_home/>
      </BrowserRouter>
    );
    const FAQ = screen.getByRole('heading', {
      name: /frequently asked questions/i
    })
    expect(FAQ).toBeInTheDocument();
  });
  test("Rendering the Contact Section", () => {
    render(
      <BrowserRouter>
        <Hos_home/>
      </BrowserRouter>
    );
    const contactUs = screen.getByRole('heading', {
      name: /contact us/i
    })
    expect(contactUs).toBeInTheDocument();
  });


});