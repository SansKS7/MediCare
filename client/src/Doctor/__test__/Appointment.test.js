import React from "react";
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import { BrowserRouter ,Link } from "react-router-dom";
import Dr_delete from "../Dr_delete";
import Appointment from "../Appointment";

describe("Render Appointments Page on the Doctor's Dashboard", () => {
    it("Doctor Delete Page ", () => {
      <BrowserRouter>
      <Appointment/>
      </BrowserRouter>;
    }); 
    
    
});

describe("Render the  contains of the Appointment ", () => {
  

    it("Checking that Appointment Table Contents is present or not ", () => {
        render(
          <BrowserRouter>
          <Appointment/>
          </BrowserRouter>
        );
        const divElement = screen.getByTestId("my-div-appo");
        expect(divElement).toBeInTheDocument();
      });

      
    it("Checking that Appointment Table is present or not ", () => {
        render(
          <BrowserRouter>
          <Appointment/>
          </BrowserRouter>
        );
        const divElement = screen.getByTestId("my-table-appo");
        expect(divElement).toBeInTheDocument();
      });


      it("Checking that Appointment Table Row is present or not ", () => {
        render(
          <BrowserRouter>
          <Appointment/>
          </BrowserRouter>
        );
        const divElement = screen.getByTestId("my-table-appo-tr");
        expect(divElement).toBeInTheDocument();
      });

      it("Checking that Appointment ID is present or not ", () => {
        render(
          <BrowserRouter>
          <Appointment/>
          </BrowserRouter>
        );
        const divElement = screen.getByTestId("my-table-appo-tr-aid");
        expect(divElement).toBeInTheDocument();

      });
      
      it("Checking that Patient ID is present or not ", () => {
        render(
          <BrowserRouter>
          <Appointment/>
          </BrowserRouter>
        );
        const divElement = screen.getByTestId("my-table-appo-tr-pid");
        expect(divElement).toBeInTheDocument();
      });
      it("Checking that Patient Name  is present or not ", () => {
        render(
          <BrowserRouter>
          <Appointment/>
          </BrowserRouter>
        );
        const divElement = screen.getByTestId("my-table-appo-tr-pname");
        expect(divElement).toBeInTheDocument();
      });

      it("Checking that Patient Gender  is present or not ", () => {
        render(
          <BrowserRouter>
          <Appointment/>
          </BrowserRouter>
        );
        const divElement = screen.getByTestId("my-table-appo-tr-pgender");
        expect(divElement).toBeInTheDocument();
      });
      it("Checking that Appointment Date  is present or not ", () => {
        render(
          <BrowserRouter>
          <Appointment/>
          </BrowserRouter>
        );
        const divElement = screen.getByTestId("my-table-appo-tr-date");
        expect(divElement).toBeInTheDocument();
      }); 
      
      it("Checking that Appointment Time  is present or not ", () => {
        render(
          <BrowserRouter>
          <Appointment/>
          </BrowserRouter>
        );
        const divElement = screen.getByTestId("my-table-appo-tr-time");
        expect(divElement).toBeInTheDocument();
      });

      it("Checking that  Appointment Msg  is present or not ", () => {
        render(
          <BrowserRouter>
          <Appointment/>
          </BrowserRouter>
        );
        const divElement = screen.getByTestId("my-table-appo-tr-msg");
        expect(divElement).toBeInTheDocument();
      });

      it("Checking that Appointment Status present or not ", () => {
        render(
          <BrowserRouter>
          <Appointment/>
          </BrowserRouter>
        );
        const divElement = screen.getByTestId("my-table-appo-tr-appoStatus");
        expect(divElement).toBeInTheDocument();
      });
          });
