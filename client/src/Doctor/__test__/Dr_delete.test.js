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

describe("Render the Doctor delete Page on Hospital Dashboard", () => {
    it("Doctor Delete Page ", () => {
      <BrowserRouter>
      <Dr_delete/>
      </BrowserRouter>;
    }); 
    
    
});



describe("Render the  contains of the Doctors ", () => {
  

    it("Checking that Doctors Table is present or not ", () => {
        render(
          <BrowserRouter>
          <Dr_delete/>
          </BrowserRouter>
        );
        const divElement = screen.getByTestId("my-div-doctor");
        expect(divElement).toBeInTheDocument();
      });
      it("Checking that Doctors Table contents is present or not ", () => {
        render(
          <BrowserRouter>
          <Dr_delete/>
          </BrowserRouter>
        );
        const divElement = screen.getByTestId("my-table-doctor");
        expect(divElement).toBeInTheDocument();
      });


      it("Checking that Doctors Table rows are   present or not ", () => {
        render(
          <BrowserRouter>
          <Dr_delete/>
          </BrowserRouter>
        );
        const divElement = screen.getByTestId("my-div-doctor-row");
        expect(divElement).toBeInTheDocument();
      });

      it("Checking that DoctorID   present or not  In Table ", () => {
        render(
          <BrowserRouter>
          <Dr_delete/>
          </BrowserRouter>
        );
        const divElement = screen.getByTestId("my-table-doctorID");
        expect(divElement).toBeInTheDocument();
      });

      it("Checking that DoctorName   present or not  In Table ", () => {
        render(
          <BrowserRouter>
          <Dr_delete/>
          </BrowserRouter>
        );
        const divElement = screen.getByTestId("my-table-doctorName");
        expect(divElement).toBeInTheDocument();
      });

      
      it("Checking that Doctor Speciality   present or not  In Table ", () => {
        render(
          <BrowserRouter>
          <Dr_delete/>
          </BrowserRouter>
        );
        const divElement = screen.getByTestId("my-table-doctorspe");
        expect(divElement).toBeInTheDocument();
      });

      
      it("Checking that Doctor Action  present or not  In Table ", () => {
        render(
          <BrowserRouter>
          <Dr_delete/>
          </BrowserRouter>
        );
        const divElement = screen.getByTestId("my-table-doctorAction");
        expect(divElement).toBeInTheDocument();
      });


});
