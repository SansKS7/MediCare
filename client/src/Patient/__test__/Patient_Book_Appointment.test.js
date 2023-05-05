import React from "react";
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import { BrowserRouter ,Link } from "react-router-dom";
import Book_Appointment from "../Book_Appointment";



describe("Book Apointment Page in Patient DashBoard", () => {
    it("renders Book Appointment Page in Patient Dashboard", () => {
      <BrowserRouter>
      <Book_Appointment/>
      </BrowserRouter>;
    });  

    // it("renders Patient Name Label is present or Not in Book Appointment", () => {
        
    //     render(
    //     <BrowserRouter>
    //   <Book_Appointment/>
    //   </BrowserRouter>);
    //    // const patientNameInput = screen.getByLabelText("Patient Name");

       
    //    const patientNameInput = screen.getByLabelText(/Patient Name/i);
    //     expect(patientNameInput).toBeInTheDocument();

    // })



  });
  