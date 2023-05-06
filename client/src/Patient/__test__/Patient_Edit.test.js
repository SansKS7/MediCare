import React from "react";
import {
  render,
  screen,
  fireEvent,
  getByLabelText,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import fetch from "isomorphic-fetch";
import Edit_profile from "../Edit_profile"
describe("Render the Patient  ProfilrPage in Patient DashBoard", () => {
  it("renders Book Appointment Page in Patient Dashboard", () => {
    <BrowserRouter>
    <Edit_profile/>
    </BrowserRouter>;
  });  
  

  it("Checking that Patient Image  should be render on Profile Page", () => {
    render(
      <BrowserRouter>
      <Edit_profile/>
      </BrowserRouter>
    );
    const patientName=screen.getByTestId("patientImg");
    expect(patientName).toBeInTheDocument()
  })


  it("Checking the Patient ID should be render on Profile Page", () => {
    render(
      <BrowserRouter>
      <Edit_profile/>
      </BrowserRouter>
    );
    const patientName=screen.getByTestId("patientID");
    expect(patientName).toBeInTheDocument()
  })

  it("Checking the Patient Name should be render on Profile Page", () => {
    render(
      <BrowserRouter>
      <Edit_profile/>
      </BrowserRouter>
    );
    const patientName=screen.getByTestId("patientName");
    expect(patientName).toBeInTheDocument()
  })
  it("Checking the Patient LastName should be render on Profile Page", () => {
    render(
      <BrowserRouter>
      <Edit_profile/>
      </BrowserRouter>
    );
    const patientName=screen.getByTestId("patientLastName");
    expect(patientName).toBeInTheDocument()
  })
  it("Checking the Patient Age should be render on Profile Page", () => {
    render(
      <BrowserRouter>
      <Edit_profile/>
      </BrowserRouter>
    );
    const patientName=screen.getByTestId("patientAge");
    expect(patientName).toBeInTheDocument()
  })

  it("Checking the Patient Phone Number should be render on Profile Page", () => {
    render(
      <BrowserRouter>
      <Edit_profile/>
      </BrowserRouter>
    );
    const patientName=screen.getByTestId("patientphono");
    expect(patientName).toBeInTheDocument()
  })

  it("Checking the Patient Age should be render on Profile Page", () => {
    render(
      <BrowserRouter>
      <Edit_profile/>
      </BrowserRouter>
    );
    const patientName=screen.getByTestId("patientAge");
    expect(patientName).toBeInTheDocument()
  })
  it("Checking the Patient BloodGroup should be render on Profile Page", () => {
    render(
      <BrowserRouter>
      <Edit_profile/>
      </BrowserRouter>
    );
    const patientName=screen.getByTestId("patientBloodGroup");
    expect(patientName).toBeInTheDocument()
  })

  it("Checking the Patient Height should be render on Profile Page", () => {
    render(
      <BrowserRouter>
      <Edit_profile/>
      </BrowserRouter>
    );
    const patientName=screen.getByTestId("patientHeight");
    expect(patientName).toBeInTheDocument()
  })
  it("Checking the Patient Weight should be render on Profile Page", () => {
    render(
      <BrowserRouter>
      <Edit_profile/>
      </BrowserRouter>
    );
    const patientName=screen.getByTestId("patientWeight");
    expect(patientName).toBeInTheDocument()
  })
  it("Checking the Patient Address should be render on Profile Page", () => {
    render(
      <BrowserRouter>
      <Edit_profile/>
      </BrowserRouter>
    );
    const patientName=screen.getByTestId("patientAddress");
    expect(patientName).toBeInTheDocument()
  })
  it("Checking the Patient Password should be render on Profile Page", () => {
    render(
      <BrowserRouter>
      <Edit_profile/>
      </BrowserRouter>
    );
    const patientName=screen.getByTestId("patientPassword");
    expect(patientName).toBeInTheDocument()
  })


});



