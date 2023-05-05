import React from "react";
import {
  render,
  screen,
  fireEvent,
  act,
  waitFor,
} from "@testing-library/react";
import { BrowserRouter ,Link } from "react-router-dom";
import View_Appointment from "../View_Appointment";
import DoctorsP from "../DoctorsP";

describe("View Apointment Page in Patient DashBoard", () => {
    it("renders Book Appointment Page in Patient Dashboard", () => {
      <BrowserRouter>
      <View_Appointment/>
      </BrowserRouter>;
    });  
});

describe("Render the  All type of Appointments of the Patient", () => {
  

  it("Checking that Pending Appointments are present Appointment Page", () => {
    render(
      <BrowserRouter>
      <View_Appointment/>
      </BrowserRouter>
    );
    const divElement = screen.getByTestId("my-div-pending");
    expect(divElement).toBeInTheDocument();
  });

  it("Checking that Accepted Appointments are present Appointment Page", () => {
    render(
      <BrowserRouter>
      <View_Appointment/>
      </BrowserRouter>
    );
    const divElement = screen.getByTestId("my-div-accepted");
    expect(divElement).toBeInTheDocument();
  });

  
  it("Checking that Rejected Appointments are present Appointment Page", () => {
    render(
      <BrowserRouter>
      <View_Appointment/>
      </BrowserRouter>
    );
    const divElement = screen.getByTestId("my-div-rejected");
    expect(divElement).toBeInTheDocument();
  });

});


describe("Pending Appointment Table Contents", () => {
  

  it("Checking that Pending Appointments Table is  present Appointment Page", () => {
    render(
      <BrowserRouter>
      <View_Appointment/>
      </BrowserRouter>
    );
    const tableElement = screen.getByTestId("my-table-pending");
    expect(tableElement).toBeInTheDocument();
  }); 
  
  it("Checking that Pending Appointments Table  contains Appointment Page", () => {
    render(
      <BrowserRouter>
      <View_Appointment/>
      </BrowserRouter>
    );
    const tableElement = screen.getByTestId("my-row-pending");
    expect(tableElement).toBeInTheDocument();
  });

  it("Checking that Pending Appointments Table  contains its Table Header in Appointment Page", () => {
    render(
      <BrowserRouter>
      <View_Appointment/>
      </BrowserRouter>
    );
    const tableElementSr = screen.getByTestId("my-col-pending-sr");
    const tableElementHid = screen.getByTestId("my-col-pending-hname");
    const tableElementDid = screen.getByTestId("my-col-pending-dname");
    const tableElementDate = screen.getByTestId("my-col-pending-date");
    const tableElementTime = screen.getByTestId("my-col-pending-time");
    const tableElementMsg = screen.getByTestId("my-col-pending-msg");
    const tableElementAppoStatus = screen.getByTestId("my-col-pending-appostatus");
  
    
    expect(tableElementSr).toBeInTheDocument();
    expect(tableElementAppoStatus).toBeInTheDocument();
    expect(tableElementDate).toBeInTheDocument();
    expect(tableElementHid).toBeInTheDocument();
    expect(tableElementDid).toBeInTheDocument();
    expect(tableElementTime).toBeInTheDocument();
    expect(tableElementMsg).toBeInTheDocument();
    });

   
  });
  describe("Accepted Appointment Table Contents", () => {
  

    it("Checking that Accepted Appointments Table is  present Appointment Page", () => {
      render(
        <BrowserRouter>
        <View_Appointment/>
        </BrowserRouter>
      );
      const tableElement = screen.getByTestId("my-table-accepted");
      expect(tableElement).toBeInTheDocument();
    }); 
    
    it("Checking that Accepted Appointments Table  contains Appointment Page", () => {
      render(
        <BrowserRouter>
        <View_Appointment/>
        </BrowserRouter>
      );
      const tableElement = screen.getByTestId("my-row-accepted");
      expect(tableElement).toBeInTheDocument();
    });
  
    it("Checking that Accepted Appointments Table  contains its Table Header in Appointment Page", () => {
      render(
        <BrowserRouter>
        <View_Appointment/>
        </BrowserRouter>
      );
      const tableElementSr = screen.getByTestId("my-col-accepted-sr");
      const tableElementHid = screen.getByTestId("my-col-accepted-hname");
      const tableElementDid = screen.getByTestId("my-col-accepted-dname");
      const tableElementDate = screen.getByTestId("my-col-accepted-date");
      const tableElementTime = screen.getByTestId("my-col-accepted-time");
      const tableElementMsg = screen.getByTestId("my-col-accepted-msg");
      const tableElementAppoStatus = screen.getByTestId("my-col-accepted-appoStatus");
      
      expect(tableElementSr).toBeInTheDocument();
      expect(tableElementAppoStatus).toBeInTheDocument();
      expect(tableElementDate).toBeInTheDocument();
      expect(tableElementHid).toBeInTheDocument();
      expect(tableElementDid).toBeInTheDocument();
      expect(tableElementTime).toBeInTheDocument();
      expect(tableElementMsg).toBeInTheDocument();
      });
  
     
    });
  

    describe("Rejected Appointment Table Contents", () => {
      it("Checking that Rejected Appointments are present Appointment Page", () => {
        render(
          <BrowserRouter>
          <View_Appointment/>
          </BrowserRouter>
        );
        const divElement = screen.getByTestId("my-div-rejected");
        expect(divElement).toBeInTheDocument();
      });
    
  

      it("Checking that Reject Appointments Table is  present Appointment Page", () => {
        render(
          <BrowserRouter>
          <View_Appointment/>
          </BrowserRouter>
        );
        const tableElement = screen.getByTestId("my-table-rejected");
        expect(tableElement).toBeInTheDocument();
      });


      it("Checking that Rejected Appointments Table  contains its Table Header in Appointment Page", () => {
        render(
          <BrowserRouter>
          <View_Appointment/>
          </BrowserRouter>
        );
        const tableElementSr = screen.getByTestId("my-col-rejected-sr");
        const tableElementHid = screen.getByTestId("my-col-rejected-hname");
        const tableElementDid = screen.getByTestId("my-col-rejected-dname");
        const tableElementDate = screen.getByTestId("my-col-rejected-date");
        const tableElementTime = screen.getByTestId("my-col-rejected-time");
        const tableElementMsg = screen.getByTestId("my-col-rejected-msg");
        const tableElementAppoStatus = screen.getByTestId("my-col-rejected-appoStatus");
        
        expect(tableElementSr).toBeInTheDocument();
        expect(tableElementAppoStatus).toBeInTheDocument();
        expect(tableElementDate).toBeInTheDocument();
        expect(tableElementHid).toBeInTheDocument();
        expect(tableElementDid).toBeInTheDocument();
        expect(tableElementTime).toBeInTheDocument();
        expect(tableElementMsg).toBeInTheDocument();
        });

        it("Checking that Rejected Appointments Table  contains its Table Header in Appointment Page", () => {
          render(
            <BrowserRouter>
            <View_Appointment/>
            </BrowserRouter>
          );
          const tableElementSr = screen.getByTestId("my-col-rejected-sr");
          const tableElementHid = screen.getByTestId("my-col-rejected-hname");
          const tableElementDid = screen.getByTestId("my-col-rejected-dname");
          const tableElementDate = screen.getByTestId("my-col-rejected-date");
          const tableElementTime = screen.getByTestId("my-col-rejected-time");
          const tableElementMsg = screen.getByTestId("my-col-rejected-msg");
          const tableElementAppoStatus = screen.getByTestId("my-col-rejected-appoStatus");
          
          expect(tableElementSr).toBeInTheDocument();
          expect(tableElementAppoStatus).toBeInTheDocument();
          expect(tableElementDate).toBeInTheDocument();
          expect(tableElementHid).toBeInTheDocument();
          expect(tableElementDid).toBeInTheDocument();
          expect(tableElementTime).toBeInTheDocument();
          expect(tableElementMsg).toBeInTheDocument();
          });
        
      
    });