import React from "react";
import {
  render,
  screen,
  fireEvent,
  getByLabelText,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dr_register from "../../Doctor/Dr_register";
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

describe("Checking Doctor Registration Page Rendering ", () => {
  test("Rendering Doctor Registeration Page URL", () => {
    render(
      <BrowserRouter>
        <Dr_register />
      </BrowserRouter>
    );
    const doctorRegisterTitle = screen.getByText(/register doctor here\./i);
    expect(doctorRegisterTitle).toBeInTheDocument();
  });
});

describe("Doctor Registration Form Input Field Test", () => {
  test("Render Doctor-ID input field", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Dr_register />
      </BrowserRouter>
    );
    const doctorIdInput = getByLabelText("Enter Doctor-ID");
    expect(doctorIdInput).toBeInTheDocument();
  });

  test("Render Hospital-ID input field", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Dr_register />
      </BrowserRouter>
    );
    const hospitalIdInput = getByLabelText("Enter Hospital-ID");
    expect(hospitalIdInput).toBeInTheDocument();
  });

  test("Render Qualification input field", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Dr_register />
      </BrowserRouter>
    );
    const qualificationInput = getByLabelText("Enter Qualification");
    expect(qualificationInput).toBeInTheDocument();
  });

  test("Render Doctor Name input field", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Dr_register />
      </BrowserRouter>
    );
    const doctorNameInput = getByLabelText("Enter Doctor Name");
    expect(doctorNameInput).toBeInTheDocument();
  });

  test("Render Speciality input field", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Dr_register />
      </BrowserRouter>
    );
    const specialityInput = getByLabelText("Enter Speciality");
    expect(specialityInput).toBeInTheDocument();
  });

  test("Render Mail-ID input field", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Dr_register />
      </BrowserRouter>
    );
    const mailIdInput = getByLabelText("Enter Mail-ID");
    expect(mailIdInput).toBeInTheDocument();
  });

  test("Render Phone No input field", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Dr_register />
      </BrowserRouter>
    );
    const phoneNoInput = getByLabelText("Enter Phone No");
    expect(phoneNoInput).toBeInTheDocument();
  });

  test("Render Address input field", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Dr_register />
      </BrowserRouter>
    );
    const addressInput = getByLabelText("Enter Address");
    expect(addressInput).toBeInTheDocument();
  });

  test("Render Experience input field", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Dr_register />
      </BrowserRouter>
    );
    const experienceInput = getByLabelText("Enter Experience");
    expect(experienceInput).toBeInTheDocument();
  });

  test("Render Charges input field", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Dr_register />
      </BrowserRouter>
    );
    const chargesInput = getByLabelText("Enter Charges");
    expect(chargesInput).toBeInTheDocument();
  });

  test("Render Password input field", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Dr_register />
      </BrowserRouter>
    );
    const passwordInput = getByLabelText("Enter Password");
    expect(passwordInput).toBeInTheDocument();
  });

  test("Render Retype Password input field", () => {
    const { getByLabelText } = render(
      <BrowserRouter>
        <Dr_register />
      </BrowserRouter>
    );
    const retypePasswordInput = getByLabelText("Retype Password");
    expect(retypePasswordInput).toBeInTheDocument();
  });

  test("Render Doctor Register Button", () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Dr_register />
      </BrowserRouter>
    );
    const registerBtn = getByRole("button", {
      name: /register/i,
    });
    expect(registerBtn).toBeInTheDocument();
  });
});

describe(" Doctor Name Validation function test", () => {
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

describe("Doctor Rating Validation function test", () => {
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

describe("Doctor Address Validation function test", () => {
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

describe("Doctor Phone Number  Validation function test", () => {
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

describe("Doctor Mail Validation function test", () => {
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

describe("Doctor Speciality Validation function test", () => {
  test("returns false for empty string", () => {
    expect(isSpeciality("")).toBe(false);
  });

  test("returns false for input with numbers", () => {
    expect(isSpeciality("123")).toBe(false);
  });

  test("returns false for input with special characters other than allowed ones", () => {
    expect(isSpeciality("#$%")).toBe(false);
  });

  test("returns true for valid input", () => {
    expect(isSpeciality("Cardiology")).toBe(true);
  });
});

describe("Doctor Password Validation function test", () => {
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

describe("Doctor RePassword Validation function test", () => {
  test("matching passwords should return true", () => {
    expect(isRePassword("Abc123456", "Abc123456")).toBe(true);
  });

  test("non-matching passwords should return false", () => {
    expect(isRePassword("Abc123456", "Abc123457")).toBe(false);
  });
});

describe("Doctor Registration API Testing", () => {
  test("Registers a new Doctor", async () => {
    const data = {
      d_id: "D101",
      h_id: "H101",
      hospitalName: "Sairam Hospital",
      name: "Komal Joshi",
      speciality: "Cardiologist",
      mail: "komal@gmail.com",
      phoneNo: 8546214521,
      address: "Pune",
      password: "komal123",
      experience: "5",
      charges: 800,
      qualification: "MBBS",
    };

    const response = await fetch("http://localhost:3001/api/addDoctor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    expect(response.status).toBe(200);
    expect(json.message).toBe("Registration successful");
  });

  test("Returns 500 error if server error occurs", async () => {
    const data = {
      d_id: "D101",
      h_id: "H101",
      hospitalName: "Sairam Hospital",
      name: "Komal Joshi",
      speciality: "Cardiologist",
      mail: "komal@gmail.com",
      phoneNo: 8546214521,
      address: "Pune",
      password: "komal123",
    };

    const response = await fetch("http://localhost:3001/api/addDoctor", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    expect(response.status).toBe(500);
    expect(json.message).toBe("Internet Server Error");
  });

  test("Should return the next Doctor ID", async () => {
    const response = await fetch("http://localhost:3001/api/doctorId");
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toHaveProperty("doctor_id");
    expect(typeof data.doctor_id).toBe("string");
  });
});
