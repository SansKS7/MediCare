
import React from "react";
import {
  render,
  screen,
} from "@testing-library/react";
import { BrowserRouter ,Link } from "react-router-dom";
import HospitalP from "../HospitalP";



describe("Hospital Page in Patient DashBoard", () => {
    it("renders Hospital Page in Patient Dashboard", () => {
      <BrowserRouter>
        <HospitalP />
      </BrowserRouter>;
    });
  
    it("Check the Search Bar is present or not  in Hospital Page of Patient dashboard", () => {
      render(
        <BrowserRouter>
          <HospitalP/>;
        </BrowserRouter>
      );
      const inputBoxElement = screen.getByPlaceholderText('Search Hospitals Here.....');
      expect(inputBoxElement).toBeInTheDocument()
    });
    
    it("Checking that Hospital Cards are present on The Hospital Page of Patient dashboard", () => {
      render(
        <BrowserRouter>
          <HospitalP/>;
        </BrowserRouter>
      );
      const divElement = screen.getByTestId('my-div-hospital');
      expect(divElement).toBeInTheDocument();
    });
  
  
    it("Checking that Hospital is Linked with its perticular doctors  of Patient dashboard", () => {
      render(
        <BrowserRouter>
          <HospitalP/>;
        </BrowserRouter>
      );
      
    
      const linkElement = screen.getByText(/view/i);
      expect(linkElement).toBeInTheDocument();
    });
  
  
  });
  
  
  