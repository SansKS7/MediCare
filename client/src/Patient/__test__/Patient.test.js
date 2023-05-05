import React from "react";
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import { BrowserRouter ,Link } from "react-router-dom";
import HeaderP from "../HeaderP";
import Patient_home from "../Patient_home";
import Patient_login, { handleSubmit } from "../Patient_login";
import HospitalP from "../HospitalP";
import DoctorsP from "../DoctorsP";
import Book_Appointment from "../Book_Appointment";
describe("Patient DashBoard Header", () => {
  test("renders the navigation links of patient dashboard", () => {
    render(
      <BrowserRouter>
        <HeaderP />
      </BrowserRouter>
    );
    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).toBeInTheDocument();

    const hospitalLink = screen.getByRole("link", { name: "Hospital" });
    expect(hospitalLink).toBeInTheDocument();

    const doctorLink = screen.getByRole("link", { name: "Doctor" });
    expect(doctorLink).toBeInTheDocument();

    const profileLink = screen.getByRole("link", { name: "Profile" });
    expect(profileLink).toBeInTheDocument();

    const viewAppointment = screen.getByRole("link", {
      name: "View Appointment",
    });
    expect(viewAppointment).toBeInTheDocument();

    const buttonLogout = screen.getByRole("button");
    expect(buttonLogout).toBeInTheDocument();
  });
});








