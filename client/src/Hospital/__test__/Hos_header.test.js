import React from "react";
import {
  render,
  screen,
  fireEvent,
  getByLabelText,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../Hos_header";
import { BrowserRouter } from "react-router-dom";
import fetch from "isomorphic-fetch";



describe(' Checking Hospital Navbar Component Elements Rendering ', () => {

    test("Renders the logo image", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
      const logoImage = screen.getByRole("link", {
        name: /medicare/i,
      });
      expect(logoImage).toBeInTheDocument();
    });
    
    test('Renders the navigation links', () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
      const homeLink = screen.getByRole('link', { name: 'Home' });
      expect(homeLink).toBeInTheDocument();
    
      const viewProfileLink = screen.getByRole('link', { name: 'View Profile' });
      expect(viewProfileLink).toBeInTheDocument();
    
      const addDoctorLink = screen.getByRole('link', { name: 'Add New Doctor' });
      expect(addDoctorLink).toBeInTheDocument();
    
      const viewHospitalLink = screen.getByRole('link', { name: 'View Doctor Details' });
      expect(viewHospitalLink).toBeInTheDocument();
    
    });
    
    test('Hospital navbar navigates to the correct route when a link is clicked', () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );
      const viewProfileLink = screen.getByRole('link', { name: 'View Profile' });
      userEvent.click(viewProfileLink);
      expect(window.location.pathname).toEqual('/Hos_Profile');
    
      const addDoctorLink = screen.getByRole('link', { name: 'Add New Doctor' });
      userEvent.click(addDoctorLink);
      expect(window.location.pathname).toEqual('/Dr_register');

      const viewHospitalLink = screen.getByRole('link', { name: 'View Doctor Details' });
      userEvent.click(viewHospitalLink);
      expect(window.location.pathname).toEqual('/Dr_Delete');
    
    });
    });

