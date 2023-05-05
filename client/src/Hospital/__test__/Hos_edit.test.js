import React from "react";
import {
  render,
  screen,
  fireEvent,
  getByLabelText,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Hos_edit from "../Hos_edit";
import { BrowserRouter } from "react-router-dom";
import fetch from "isomorphic-fetch";
function generatePhoneNumber() {
  const prefix = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  const firstPart = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  const secondPart = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  return `${prefix}${firstPart}${secondPart}`;
}

describe("Hospital Get Information API Testing ", () => {
  test("Returns correct result for valid search query", async () => {
    const searchQuery = "H101";
    const response = await fetch(`http://localhost:3001/api/hospital?search=${searchQuery}`);
   expect(response.status).toBe(200);
   const data = await response.json();
    expect(data.length).toBeGreaterThan(0);
  });

  test("Returns error message for invalid search query", async () => {
    const searchQuery = "invalid_query";
    const response = await fetch(`http://localhost:3001/api/hospital?search=${searchQuery}`);
    expect(response.status).toBe(500);
    const data = await response.json();
    expect(data.message).toBe("Internet Server Error");
  });

});

describe("Hospital Update Information API Testing ", () => {
  test("Update a hospital information", async () => {
    const data = 
      {
        h_id: "H105",
        name: "Apex Wellness Hospital ",
        speciality: "Ca",
        mail: "Apex_wellness@gmail.com",
        phoneNo: generatePhoneNumber(),
        address: "Survey No 799, Plot No 187, Behind Prakash Petrol Pump,  Govid Nahgar , Nashik",
        password: "apex@123",
        profileUrl: "https://res.cloudinary.com/didso0xgl/image/upload/v1683125692/hagxww0fpen4e7btvd5v.jpg"

      };

      const response = await fetch('http://localhost:3001/api/hospitalUpdate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      expect(response.status).toBe(200);
      expect(json.modifiedCount).toBeGreaterThan(0);


  });

});


describe("Hospital Update Information Input Field Test Cases", () => {
  test("Should render Hospital-ID update input field", () => {
    render(
      <BrowserRouter>
        <Hos_edit />
      </BrowserRouter>
    );
    const hospitalIdInput = screen.getByLabelText("Hospital-ID");
    expect(hospitalIdInput).toBeInTheDocument();
  });

  test("Should render Name update input field", () => {
    render(
      <BrowserRouter>
        <Hos_edit />
      </BrowserRouter>
    );
    const nameInput = screen.getByLabelText("Hospital Name");
    expect(nameInput).toBeInTheDocument();
  });
  test("Should render Speciality update input field", () => {
       render(
      <BrowserRouter>
        <Hos_edit />
      </BrowserRouter>
    );
    const specialityInput = screen.getByLabelText("Speciality");
    expect(specialityInput).toBeInTheDocument();
  });

  test("Should render Mail-ID update input field", () => {
       render(
      <BrowserRouter>
        <Hos_edit />
      </BrowserRouter>
    );
    const mailInput = screen.getByLabelText("Mail-ID");
    expect(mailInput).toBeInTheDocument();
  });

  test("Should render Phone No update input field", () => {
       render(
      <BrowserRouter>
        <Hos_edit />
      </BrowserRouter>
    );
    const phoneNoInput = screen.getByLabelText("Phone No");
    expect(phoneNoInput).toBeInTheDocument();
  });

  test("Should render Address update input field", () => {
       render(
      <BrowserRouter>
        <Hos_edit />
      </BrowserRouter>
    );
    const addressInput = screen.getByLabelText("Address");
    expect(addressInput).toBeInTheDocument();
  });

  test("Should render Password update input field", () => {
       render(
      <BrowserRouter>
        <Hos_edit />
      </BrowserRouter>
    );
    const passwordInput = screen.getByLabelText("Password");
    expect(passwordInput).toBeInTheDocument();
  });

 
  test("Should Render Hospital Information Update Button", () => {
    render(
      <BrowserRouter>
        <Hos_edit />
      </BrowserRouter>
    );
    const HospitalUpdateBtn = screen.getByRole('button', {
      name: /update/i
    })
    expect(HospitalUpdateBtn).toBeInTheDocument();
  });

});


 
