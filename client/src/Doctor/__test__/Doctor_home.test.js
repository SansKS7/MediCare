import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Dr_home from "../Dr_home";

describe('Doctor Homepage',() => {
    it('test case to check whether the page is rendering', () => {
        render(
          <BrowserRouter>
            <Dr_home />
          </BrowserRouter>
        );
        const title = screen.getByText(/Welcome/i);
        expect(title).toBeInTheDocument();
      });

      it('test case to check whether the page is rendering to doctor home and having about us component', () => {
        render(
          <BrowserRouter>
            <Dr_home />
          </BrowserRouter>
        );
        const title = screen.getByText(/About Us/i);
        expect(title).toBeInTheDocument();
      });

      it('test case to check whether the page is rendering to doctor home and having frequently asked question component', () => {
        render(
          <BrowserRouter>
            <Dr_home />
          </BrowserRouter>
        );
        const title = screen.getByText(/Frequently Asked Question/i);
        expect(title).toBeInTheDocument();
      });


      it('test case to check whether the page is rendering to doctor home and having contact us component', () => {
        render(
          <BrowserRouter>
            <Dr_home />
          </BrowserRouter>
        );
        const title = screen.getByText("Contact Us");
        expect(title).toBeInTheDocument();
      });
});
