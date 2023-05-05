import React from "react";
import {
  render,
  screen,
  fireEvent,
  getByLabelText,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Hos_register from "../Hos_register";
import { BrowserRouter } from "react-router-dom";
import fetch from "isomorphic-fetch";

import {
  isfirstName,
  isRating,
  isAddress,
  isPhno,
  isMail,
  isPassword,
  isRePassword,
  isSpeciality,
} from "../ValidationFunctions";

describe("Hospital Registration Page Test Cases", () => {
  test("Should render Hospital-ID input", () => {
    render(
      <BrowserRouter>
        <Hos_register />
      </BrowserRouter>
    );
    const hospitalIdInput = screen.getByLabelText("Hospital-ID");
    expect(hospitalIdInput).toBeInTheDocument();
  });

  test("Should render Name input", () => {
    render(
      <BrowserRouter>
        <Hos_register />
      </BrowserRouter>
    );
    const nameInput = screen.getByLabelText("Enter Name");
    expect(nameInput).toBeInTheDocument();
  });

  test("Should render Speciality input", () => {
    render(
      <BrowserRouter>
        <Hos_register />
      </BrowserRouter>
    );
    const specialityInput = screen.getByLabelText("Enter Speciality");
    expect(specialityInput).toBeInTheDocument();
  });

  test("Should render Mail-ID input", () => {
    render(
      <BrowserRouter>
        <Hos_register />
      </BrowserRouter>
    );
    const mailInput = screen.getByLabelText("Enter Mail-ID");
    expect(mailInput).toBeInTheDocument();
  });

  test("Should render Phone No input", () => {
    render(
      <BrowserRouter>
        <Hos_register />
      </BrowserRouter>
    );
    const phoneNoInput = screen.getByLabelText("Enter Phone No");
    expect(phoneNoInput).toBeInTheDocument();
  });

  test("Should render Rating input", () => {
    render(
      <BrowserRouter>
        <Hos_register />
      </BrowserRouter>
    );
    const ratingInput = screen.getByLabelText("Enter Rating");
    expect(ratingInput).toBeInTheDocument();
  });

  test("Should render Address input", () => {
    render(
      <BrowserRouter>
        <Hos_register />
      </BrowserRouter>
    );
    const addressInput = screen.getByLabelText("Enter Address");
    expect(addressInput).toBeInTheDocument();
  });

  test("Should render Password input", () => {
    render(
      <BrowserRouter>
        <Hos_register />
      </BrowserRouter>
    );
    const passwordInput = screen.getByLabelText("Enter Password");
    expect(passwordInput).toBeInTheDocument();
  });

  test("Should render Retype Password input", () => {
    render(
      <BrowserRouter>
        <Hos_register />
      </BrowserRouter>
    );
    const repasswordInput = screen.getByLabelText("Retype Password");
    expect(repasswordInput).toBeInTheDocument();
  });

  test("Should render Register button", () => {
    render(
      <BrowserRouter>
        <Hos_register />
      </BrowserRouter>
    );
    const registerButton = screen.getByText("Register");
    expect(registerButton).toBeInTheDocument();
  });

  test("Should render Login button and its navigate to the login page", () => {
    render(
      <BrowserRouter>
        <Hos_register />
      </BrowserRouter>
    );
    const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();

    fireEvent.click(loginButton);
    expect(window.location.pathname).toEqual("/Hos_login");
  });
});

describe("Name Validation function test", () => {
  test("Empty string should return false", () => {
    expect(isfirstName("")).toBe(false);
  });

  test("String with only whitespaces should return false", () => {
    expect(isfirstName(" ")).toBe(false);
  });

  test("String with numbers should return false", () => {
    expect(isfirstName("123")).toBe(false);
  });

  test("String with special characters should return false", () => {
    expect(isfirstName("#$%")).toBe(false);
  });

  test("Valid input should return true", () => {
    expect(isfirstName("John Doe")).toBe(true);
  });
});

describe("Rating Validation function test", () => {
  test("Should return false for an empty string", () => {
    expect(isRating("")).toBe(false);
  });

  test("Should return false for alphabets", () => {
    expect(isRating("abc")).toBe(false);
  });

  test("Should return false for special characters", () => {
    expect(isRating("!@#")).toBe(false);
  });

  test("Should return false for more than two digits", () => {
    expect(isRating("123")).toBe(false);
  });

  test("Should return true for a valid input", () => {
    expect(isRating("85")).toBe(true);
  });
});

describe("Address Validation function test", () => {
  test("returns false for an empty string", () => {
    expect(isAddress("")).toBe(false);
  });

  test("returns false for special characters other than allowed ones", () => {
    expect(isAddress("#$%")).toBe(false);
  });

  test("returns true for a valid address", () => {
    expect(isAddress("1234 Main St, Suite 200/b, Los Angeles, CA 90001")).toBe(
      true
    );
  });
});

describe("Phone Number  Validation function test", () => {
  test("Return false with an empty string", () => {
    expect(isPhno("")).toBe(false);
  });

  test("Return false with alphabets", () => {
    expect(isPhno("abc")).toBe(false);
  });

  test("Return false with special characters", () => {
    expect(isPhno("!@#")).toBe(false);
  });

  test("Return false with less than 10 digits", () => {
    expect(isPhno("123456789")).toBe(false);
  });

  test("Return true with valid input", () => {
    expect(isPhno("1234567890")).toBe(true);
  });
});

describe("Mail Validation function test", () => {
  it("Should return false for an empty string", () => {
    expect(isMail("")).toBe(false);
  });

  it("Should return false for an invalid email format", () => {
    expect(isMail("john.doe@com")).toBe(false);
  });

  it("Should return true for a valid email address", () => {
    expect(isMail("john.doe@example.com")).toBe(true);
  });
});

describe('Speciality Validation function test', () => {
    test('returns false for empty string', () => {
      expect(isSpeciality('')).toBe(false);
    });
  
    test('returns false for input with numbers', () => {
      expect(isSpeciality('123')).toBe(false);
    });
  
    test('returns false for input with special characters other than allowed ones', () => {
      expect(isSpeciality('#$%')).toBe(false);
    });
  
    test('returns true for valid input', () => {
      expect(isSpeciality('Cardiology')).toBe(true);
    });
  });

describe("Password Validation function test", () => {
  test("returns false for empty string", () => {
    expect(isPassword("")).toBe(false);
  });

  test("returns false for less than 8 characters", () => {
    expect(isPassword("abc123")).toBe(false);
  });

  test("returns false for more than 16 characters", () => {
    expect(isPassword("abcdefgh12345678")).toBe(false);
  });

  test.skip("returns false for input with invalid characters", () => {
    expect(isPassword("abc@1234")).toBe(false);
  });

  test("returns true for valid input", () => {
    expect(isPassword("Abc123456")).toBe(true);
  });
});


describe('RePassword Validation function test', () => {
    test('matching passwords should return true', () => {
      expect(isRePassword('Abc123456', 'Abc123456')).toBe(true);
    });
  
    test('non-matching passwords should return false', () => {
      expect(isRePassword('Abc123456', 'Abc123457')).toBe(false);
    });
  });

  

  describe('Hospital Registration API Testing', () => {
    test('Registers a new hospital', async () => {
      const data = 
      {
        h_id: "H105",
        name: "Apex Wellness Hospital ",
        speciality: "Cancer",
        mail: "Apex_wellness@gmail.com",
        phoneNo: 9365412545,
        address: "Survey No 799, Plot No 187, Behind Prakash Petrol Pump,  Govid Nahgar , Nashik",
        password: "apex@123",
        profileUrl: "https://res.cloudinary.com/didso0xgl/image/upload/v1683125692/hagxww0fpen4e7btvd5v.jpg"

      };
      const response = await fetch('http://localhost:3001/api/hospitalReg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      expect(response.status).toBe(200);
      expect(json.message).toBe('Registration successful');
    });
  
    test('Returns 500 error if server error occurs', async () => {
        const data = 
        {
          h_id: "H105",
          name: "Apex Wellness Hospital ",
          speciality: "Cancer",
          mail: "Apex_wellness@gmail.com",
          phoneNo: 9365412545,
          address: "Survey No 799, Plot No 187, Behind Prakash Petrol Pump,  Govid Nahgar , Nashik",
          //Password is missing
          profileUrl: "https://res.cloudinary.com/didso0xgl/image/upload/v1683125692/hagxww0fpen4e7btvd5v.jpg"
  
        };
      
      const response = await fetch('http://localhost:3001/api/hospitalReg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      expect(response.status).toBe(500);
      expect(json.message).toBe('Internet Server Error');
    });


    test('Should return the next hospital ID', async () => {
      const response = await fetch('http://localhost:3001/api/hospitalId');
      const data = await response.json();
  
      expect(response.status).toBe(200);
      expect(data).toHaveProperty('hospital_id');
      expect(typeof data.hospital_id).toBe('string');
    });

  });
