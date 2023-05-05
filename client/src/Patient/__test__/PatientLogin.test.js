
import React from "react";
import {
  render,
  screen,
  fireEvent,
  act,
} from "@testing-library/react";
import { BrowserRouter ,Link } from "react-router-dom";
import HeaderP from "../HeaderP";
import Patient_home from "../Patient_home";
import Patient_login, { handleSubmit } from "../Patient_login";
import HospitalP from "../HospitalP";
import DoctorsP from "../DoctorsP";
import Book_Appointment from "../Book_Appointment";

describe(" Patient Login-Page", () => {
    it("Patient dashboard Login Page", () => {
      // render the login page component
      const handleSubmit = jest.fn();
      const { getByLabelText, getByText } = render(
        <BrowserRouter>
          <Patient_login onSubmit={handleSubmit} />;
        </BrowserRouter>
      );
  
      // get the input fields
      const usernameInput = getByLabelText("Enter Patient-ID");
      expect(usernameInput).toBeInTheDocument();
      const passwordInput = getByLabelText("Password");
      expect(passwordInput).toBeInTheDocument();
  
      fireEvent.change(usernameInput, { target: { value: "P101" } });
      fireEvent.change(passwordInput, { target: { value: "sanket123" } });
  
      const button = screen.getByRole("button", { name: "Login" });
      expect(button).toBeInTheDocument();
      fireEvent.click(button);
      expect(handleSubmit).toHaveBeenCalledTimes(0);
    });
  
  
    
  it("useEffect sets session variable to null", () => {
    let mySessionVariable;
    act(() => {
      render(
        <BrowserRouter>
          <Patient_login />;
        </BrowserRouter>
      );
      mySessionVariable = sessionStorage.getItem("PatientUser");
    });
  
    expect(mySessionVariable).toBeNull();
  });
  
  it("session variable is set in useEffect", () => {
    const variableName = "PatientUser";
    const variableValue = "P101";
    sessionStorage.setItem(variableName, variableValue);
    render(
      <BrowserRouter>
        <Patient_login onSubmit={handleSubmit} />;
      </BrowserRouter>
    );
  
    // assertions go here
  });
  
  it("session variable is set in useEffect", () => {
    const variableName = "PatientUser";
    const variableValue = "P101";
    sessionStorage.setItem(variableName, variableValue);
  
    render(
      <BrowserRouter>
        <Patient_login onSubmit={handleSubmit} />;
      </BrowserRouter>
    );
  
    expect(sessionStorage.getItem(variableName)).toEqual(variableValue);
  });
  
  it("Checking for Login details Submit", () => {
    // render the login page component
    const handleSubmit = jest.fn();
    const { getByLabelText, getByText } = render(
      <BrowserRouter>
        <Patient_login onSubmit={handleSubmit} />;
      </BrowserRouter>
    );
  
    // get the input fields
    const usernameInput = getByLabelText("Enter Patient-ID");
    expect(usernameInput).toBeInTheDocument();
    const passwordInput = getByLabelText("Password");
    expect(passwordInput).toBeInTheDocument();
  
    fireEvent.change(usernameInput, { target: { value: "P101" } });
    fireEvent.change(passwordInput, { target: { value: "sanket123" } });
  
    const button = screen.getByRole("button", { name: "Login" });
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(handleSubmit).toHaveBeenCalledTimes(0);
  });
  
  
  
  it("all fields are completely filled In the Login Form ", () => {
    render(
      <BrowserRouter>
        <Patient_login onSubmit={handleSubmit} />;
      </BrowserRouter>
    );
  
    const IdInput = screen.getByLabelText("Enter Patient-ID");
    const passwordInput = screen.getByLabelText("Password");
  
    fireEvent.change(IdInput, { target: { value: "P101" } });
    fireEvent.change(passwordInput, { target: { value: "sanket123" } });
  
    expect(IdInput.value).toEqual("P101");
    expect(passwordInput.value).toEqual("sanket123");
  });
  });
  
  
  
  
  