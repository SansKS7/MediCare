import React from "react";
import { getAllByTestId, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Dr_edit from "../Dr_edit";

describe('Edit Profile', () => {
    it('render address input field for hospital-id', () => {
      render(
      <BrowserRouter>
      <Dr_edit/>
      </BrowserRouter>
      );
    const h_id = screen.getByLabelText("Hospital-ID");
    expect(h_id).toBeInTheDocument();
    });


    it('render address input field for hospital name', () => {
        render(
        <BrowserRouter>
        <Dr_edit/>
        </BrowserRouter>
        );
      const HospitalName = screen.getByLabelText("Hospital-Name");
      expect(HospitalName).toBeInTheDocument();
      });

      it('render address input field for doctor-id', () => {
        render(
        <BrowserRouter>
        <Dr_edit/>
        </BrowserRouter>
        );
      const d_id = screen.getByLabelText("Doctor-ID");
      expect(d_id).toBeInTheDocument();
      });

      it('render address input field for mail-id', () => {
        render(
        <BrowserRouter>
        <Dr_edit/>
        </BrowserRouter>
        );
      const Mail = screen.getByLabelText("Mail-ID");
      expect(Mail).toBeInTheDocument();
      });

      it('render address input field for phone no', () => {
        render(
        <BrowserRouter>
        <Dr_edit/>
        </BrowserRouter>
        );
      const phone = screen.getByLabelText("Phone No");
      expect(phone).toBeInTheDocument();
      });

      it('render address input field for address', () => {
        render(
        <BrowserRouter>
        <Dr_edit/>
        </BrowserRouter>
        );
      const address = screen.getByLabelText("Address");
      expect(address).toBeInTheDocument();
      });

      it('render address input field for speciality', () => {
        render(
        <BrowserRouter>
        <Dr_edit/>
        </BrowserRouter>
        );
      const speciality = screen.getByLabelText("Speciality");
      expect(speciality).toBeInTheDocument();
      });

      it('render address input field for experience', () => {
        render(
        <BrowserRouter>
        <Dr_edit/>
        </BrowserRouter>
        );
      const experience = screen.getByLabelText("Experience");
      expect(experience).toBeInTheDocument();
      });

      it('render address input field for charges', () => {
        render(
        <BrowserRouter>
        <Dr_edit/>
        </BrowserRouter>
        );
      const charges = screen.getByLabelText("Charges");
      expect(charges).toBeInTheDocument();
      });

      
      it('render address input field for qaulification', () => {
        render(
        <BrowserRouter>
        <Dr_edit/>
        </BrowserRouter>
        );
      const qaulification = screen.getByLabelText("Qualification");
      expect(qaulification).toBeInTheDocument();
      });

      
      it('render address input field for password', () => {
        render(
        <BrowserRouter>
        <Dr_edit/>
        </BrowserRouter>
        );
      const password = screen.getByLabelText("Password");
      expect(password).toBeInTheDocument();
      });
  });
