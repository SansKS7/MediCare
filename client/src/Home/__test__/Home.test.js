import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

import userEvent from '@testing-library/user-event';


describe(' Checking Navbar Component Elements Rendering ', () => {

test("renders the logo image", () => {
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

test('renders the navigation links', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const homeLink = screen.getByRole('link', { name: 'Home' });
  expect(homeLink).toBeInTheDocument();

  const aboutLink = screen.getByRole('link', { name: 'About' });
  expect(aboutLink).toBeInTheDocument();

  const doctorLink = screen.getByRole('link', { name: 'Doctors' });
  expect(doctorLink).toBeInTheDocument();

  const hospitalLink = screen.getByRole('link', { name: 'Hospitals' });
  expect(hospitalLink).toBeInTheDocument();

  const contactLink = screen.getByRole('link', { name: 'Contact' });
  expect(contactLink).toBeInTheDocument();
});

test('navigates to the correct route when a link is clicked', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const doctorLink = screen.getByRole('link', { name: 'Doctors' });
  userEvent.click(doctorLink);
  expect(window.location.pathname).toEqual('/Doctors');

  const homeLink = screen.getByRole('link', { name: 'Home' });
  userEvent.click(homeLink);
  expect(window.location.pathname).toEqual('/Home');
});
});

