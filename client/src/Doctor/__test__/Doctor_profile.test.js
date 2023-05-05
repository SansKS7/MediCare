import React from "react";
import { getAllByTestId, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Dr_Profile from "../Dr_Profile";
import { MemoryRouter } from 'react-router-dom';


describe('Doctor Profile Testing',()=>{

    test('test check to whether hosiptal-id label is used',()=>{
        render(
            <BrowserRouter>
            <Dr_Profile/>
            </BrowserRouter>          
        )
        const hospitalid = screen.getByTestId("h_id");
        expect(hospitalid).toBeInTheDocument();
    })

    test('test check to whether hosiptal name label is used',()=>{
        render(
            <BrowserRouter>
            <Dr_Profile/>
            </BrowserRouter>          
        )
        const hospitalName = screen.getByTestId("hospitalName");
        expect(hospitalName).toBeInTheDocument();
    })

    test('test check to whether doctor-id label is used',()=>{
        render(
            <BrowserRouter>
            <Dr_Profile/>
            </BrowserRouter>          
        )
        const d_id = screen.getByTestId("d_id");
        expect(d_id).toBeInTheDocument();
    })

    test('test check to whether doctor name label is used',()=>{
        render(
            <BrowserRouter>
            <Dr_Profile/>
            </BrowserRouter>          
        )
        const dname = screen.getByTestId("dname");
        expect(dname).toBeInTheDocument();
    })

    test('test check to whether speciality label is used',()=>{
        render(
            <BrowserRouter>
            <Dr_Profile/>
            </BrowserRouter>          
        )
        const speciality = screen.getByTestId("speciality");
        expect(speciality).toBeInTheDocument();
    })

    test('test check to whether mail-id label is used',()=>{
        render(
            <BrowserRouter>
            <Dr_Profile/>
            </BrowserRouter>          
        )
        const mail = screen.getByTestId("mail");
        expect(mail).toBeInTheDocument();
    })

    test('test check to whether phone number label is used',()=>{
        render(
            <BrowserRouter>
            <Dr_Profile/>
            </BrowserRouter>          
        )
        const phoneNo = screen.getByTestId("phoneNo");
        expect(phoneNo).toBeInTheDocument();
    })

    test('test check to whether address label is used',()=>{
        render(
            <BrowserRouter>
            <Dr_Profile/>
            </BrowserRouter>          
        )
        const address = screen.getByTestId("address");
        expect(address).toBeInTheDocument();
    })

    test('test check to whether experience label is used',()=>{
        render(
            <BrowserRouter>
            <Dr_Profile/>
            </BrowserRouter>          
        )
        const experience = screen.getByTestId("experience");
        expect(experience).toBeInTheDocument();
    })

    test('test check to whether charges label is used',()=>{
        render(
            <BrowserRouter>
            <Dr_Profile/>
            </BrowserRouter>          
        )
        const charges = screen.getByTestId("charges");
        expect(charges).toBeInTheDocument();
    })

    test('test check to whether qualification label is used',()=>{
        render(
            <BrowserRouter>
            <Dr_Profile/>
            </BrowserRouter>          
        )
        const qualification = screen.getByTestId("qualification");
        expect(qualification).toBeInTheDocument();
    })

    test('to check whether edit button is present of the screen',()=>{
        render(
            <BrowserRouter>
            <Dr_Profile/>
            </BrowserRouter>          
        )
        const eprofile = screen.getByRole('link', { name: 'Edit Profile' });
        expect(eprofile).toBeInTheDocument();
    })
})

describe('Page Navigating', () => {
    it('navigates to the edit profile when the link is clicked', () => {
      render(
       <MemoryRouter>
          <Dr_Profile />
        </MemoryRouter>
      );
      const link = screen.getByText('Edit Profile');
     expect(link.href).toEqual("http://localhost/Dr_edit");
    });
  });