import fetch from "isomorphic-fetch";
import React from "react";
import {
  render,
  screen,
  fireEvent,
  getByLabelText,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Hos_Profile from "../Hos_Profile";
import { BrowserRouter } from "react-router-dom";


describe("Checking Hospital Profile Information Rendering ", () => {
  test("Rendering Hospital Image", () => {
    render(
      <BrowserRouter>
        <Hos_Profile />
      </BrowserRouter>
    );
    const HospitalProfile = screen.getByRole("img", {
      name: /admin/i,
    });
    expect(HospitalProfile).toBeInTheDocument();
  });

  test("Rendering Hospital Id", () => {
    render(
      <BrowserRouter>
        <Hos_Profile />
      </BrowserRouter>
    );
    const HospitalId = screen.getByRole("heading", {
      name: /hospital\-id/i,
    });
    expect(HospitalId).toBeInTheDocument();
  });

  test("Rendering Hospital Name", () => {
    render(
      <BrowserRouter>
        <Hos_Profile />
      </BrowserRouter>
    );
    const HospitalName = screen.getByRole("heading", {
      name: /hospital name/i,
    });
    expect(HospitalName).toBeInTheDocument();
  });

  test("Rendering Hospital Speciality", () => {
    render(
      <BrowserRouter>
        <Hos_Profile />
      </BrowserRouter>
    );
    const HospitalSpeciality = screen.getByRole("heading", {
      name: /speciality/i,
    });
    expect(HospitalSpeciality).toBeInTheDocument();
  });

  test("Rendering Hospital Mail", () => {
    render(
      <BrowserRouter>
        <Hos_Profile />
      </BrowserRouter>
    );
    const HospitalMail = screen.getByRole("heading", {
      name: /mail/i,
    });
    expect(HospitalMail).toBeInTheDocument();
  });

  test("Rendering Hospital Phone No", () => {
    render(
      <BrowserRouter>
        <Hos_Profile />
      </BrowserRouter>
    );
    const HospitalPhone = screen.getByRole("heading", {
      name: /phone no/i,
    });
    expect(HospitalPhone).toBeInTheDocument();
  });

  test("Rendering Hospital Address", () => {
    render(
      <BrowserRouter>
        <Hos_Profile />
      </BrowserRouter>
    );
    const HospitalAddress = screen.getByRole("heading", {
      name: /address/i,
    });
    expect(HospitalAddress).toBeInTheDocument();
  });

  test("Rendering Hospital Information Edit Button", () => {
    render(
      <BrowserRouter>
        <Hos_Profile />
      </BrowserRouter>
    );
    const HospitalEditBtn = screen.getByRole("link", {
      name: /edit profile/i,
    });
    expect(HospitalEditBtn).toBeInTheDocument();
  });

  test("Clicking edit profile button navigate to the profile edit page", () => {
    render(
      <BrowserRouter>
        <Hos_Profile />
      </BrowserRouter>
    );
    const HospitalEditBtn = screen.getByRole("link", {
      name: /edit profile/i,
    });
    userEvent.click(HospitalEditBtn);
    expect(window.location.pathname).toEqual("/Hos_edit");
  });
});


