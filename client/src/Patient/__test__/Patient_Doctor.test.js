import React from "react";
import {
  render,
  screen,
} from "@testing-library/react";
import { BrowserRouter ,Link } from "react-router-dom";

import DoctorsP from "../DoctorsP";

describe("Doctors Page in Patient Dashboard", () => {
    it("renders Doctors Page in Patient Dashboard", () => {
      <BrowserRouter>
        <DoctorsP />
      </BrowserRouter>;
    });
  
    it("Check the Search Bar  is present or not in Doctor Page of Patient dashboard", () => {
      render(
        <BrowserRouter>
          <DoctorsP/>;
        </BrowserRouter>
      );
      const inputBoxElement = screen.getByPlaceholderText('Search Doctors Here.....');
      expect(inputBoxElement).toBeInTheDocument()
    });
  
  
    it("Checking that Doctor Cards are present on The Doctor Page of Patient dashboard", () => {
      render(
        <BrowserRouter>
          <DoctorsP/>;
        </BrowserRouter>
      );
      const divElement = screen.getByTestId('my-div-doctor');
      expect(divElement).toBeInTheDocument();
    });
  
 
  });