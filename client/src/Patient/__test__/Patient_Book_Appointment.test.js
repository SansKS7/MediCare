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



  });
  