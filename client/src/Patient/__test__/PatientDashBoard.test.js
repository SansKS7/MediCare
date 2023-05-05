import React from "react";
import {
  render,
  screen,
} from "@testing-library/react";
import { BrowserRouter ,Link } from "react-router-dom";
import HeaderP from "../HeaderP";
import Patient_home from "../Patient_home";


describe("Patient DashBoard Content", () => {


    it("Checking the Title is present or Not on the Patient Dashboard ", () => {
      render(
        <BrowserRouter>
          <Patient_home />
        </BrowserRouter>
      );
      const title = screen.getByText(/Medi-Care/i);
    
      expect(title).toBeInTheDocument();
    });
    });
    