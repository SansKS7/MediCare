import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Patient_register from "../Patient_register";
import {isfirstName,isAddress,isAge,isPassword,isPhno,isRePassword} from "../Validating_function";
import fetch from "isomorphic-fetch";



test('Patient Registration Page', () => {
  render(
    <BrowserRouter>
      <Patient_register />
    </BrowserRouter>
  );
  const title = screen.getByText(/Patient Register/i);
  expect(title).toBeInTheDocument();
});

test('Checking register button present', () =>{
  render(
    <BrowserRouter>
    <Patient_register/>
    </BrowserRouter>
  );
  const button = screen.getByRole('button', { name: 'Register' });
  expect(button).toBeInTheDocument();


});


describe('First Name Validation Testing', () => {
  test('firstname to check whether the is string contains space', () => {
   render(
      <BrowserRouter>
        <Patient_register/>
      </BrowserRouter>
    );
    
    expect(isfirstName(" ")).not.toBe(true);
  });

  test('firstname to check whether the is string is empty', () => {
   render(
      <BrowserRouter>
        <Patient_register/>
      </BrowserRouter>
    );
   
    expect(isfirstName("")).not.toBe(true);
  });

  test('firstname to check whether the is string contains numeric values', () => {
    render(
      <BrowserRouter>
        <Patient_register/>
      </BrowserRouter>
    );
   
    expect(isfirstName("sanket123")).not.toBe(true);
  });

  test('firstname to check whether the is string does not contains numeric values', () => {
    render(
      <BrowserRouter>
        <Patient_register/>
      </BrowserRouter>
    );
    expect(isfirstName("sanket")).not.toBe(false);
  });

  
});


describe('Last Name Validation Testing', () => {
  test('lastname to check whether the is string contains space', () => {
   render(
      <BrowserRouter>
        <Patient_register/>
      </BrowserRouter>
    );
   
    expect(isfirstName(" ")).not.toBe(true);
  });

  test('lastname to check whether the is string is empty', () => {
    render(
      <BrowserRouter>
        <Patient_register/>
      </BrowserRouter>
    );
    expect(isfirstName("")).not.toBe(true);
  });

  test('lastname to check whether the is string contains numeric values', () => {
  render(
      <BrowserRouter>
        <Patient_register/>
      </BrowserRouter>
    );
    expect(isfirstName("123")).not.toBe(true);
  });

  test('lastname to check whether the is string does not contains numeric values', () => {
    render(
      <BrowserRouter>
        <Patient_register/>
      </BrowserRouter>
    );
    expect(isfirstName("shah")).not.toBe(false);
  });

});


describe('Age Validation Testing', () => {
  test('Age to check whether the is string contains space', () => {
   render(
      <BrowserRouter>
        <Patient_register/>
      </BrowserRouter>
    );
   
    expect(isAge(" ")).not.toBe(true);
  });

  test('Age to check whether the is string is empty', () => {
    render(
      <BrowserRouter>
        <Patient_register/>
      </BrowserRouter>
    );
    expect(isAge("")).not.toBe(true);
  });

  test('Age to check whether the is string contains character values', () => {
  render(
      <BrowserRouter>
        <Patient_register/>
      </BrowserRouter>
    );
    expect(isAge("abc")).not.toBe(true);
  });

  test('lastname to check whether the is string does not contains character values', () => {
    render(
      <BrowserRouter>
        <Patient_register/>
      </BrowserRouter>
    );
    expect(isAge("12")).not.toBe(false);
  });

});


describe('Phone No Validation Testing', () => {
  test('Age to check whether the is string contains space', () => {
   render(
      <BrowserRouter>
        <Patient_register/>
      </BrowserRouter>
    );
   
    expect(isPhno(" ")).not.toBe(true);
  });

  test('test case to check whether phone not is empty', () => {
    render(
      <BrowserRouter>
        <Patient_register/>
      </BrowserRouter>
    );
    expect(isPhno("")).not.toBe(true);
  });

  test('test case to check whether phone not contains character values', () => {
  render(
      <BrowserRouter>
        <Patient_register/>
      </BrowserRouter>
    );
    expect(isPhno("abc")).not.toBe(true);
  });

  test('test case to check whether the phone number contains 10 values', () => {
    render(
        <BrowserRouter>
          <Patient_register/>
        </BrowserRouter>
      );
      expect(isPhno("987654321")).not.toBe(true);
    });

  test('test case to check whether the phone number contains 10 values or not', () => {
    render(
      <BrowserRouter>
        <Patient_register/>
      </BrowserRouter>
    );
    expect(isPhno("1203456789")).not.toBe(false);
  });

});

describe('Address Validation Testing', () => {
  test('test case to check whether the string should not be empty', () => {
   render(
      <BrowserRouter>
        <Patient_register/>
      </BrowserRouter>
    );
   
    expect(isAddress("")).not.toBe(true);
  });



  test('test case to check whether the address takes valid input', () => {
    render(
        <BrowserRouter>
          <Patient_register/>
        </BrowserRouter>
      );
      expect(isAddress("B1304,Shantiban Society,Pune")).not.toBe(false);
    });

});

describe('Password Validation Testing', () => {
  test('test case to check whether the string should not be empty', () => {
   render(
      <BrowserRouter>
        <Patient_register/>
      </BrowserRouter>
    );
   
    expect(isPassword("")).not.toBe(true);
  });



  test('test case to check whether the password length is less than 8', () => {
    render(
        <BrowserRouter>
          <Patient_register/>
        </BrowserRouter>
      );
      expect(isPassword("123456")).not.toBe(true);
    });

    test('test case to check whether the password length is greater than 16', () => {
      render(
          <BrowserRouter>
            <Patient_register/>
          </BrowserRouter>
        );
        expect(isPassword("1234567899876543210")).not.toBe(true);
      });

      test.skip('test case to check whether the password must be not contain only invalid character', () => {
        render(
            <BrowserRouter>
              <Patient_register/>
            </BrowserRouter>
          );
          expect(isPassword("$$***")).not.toBe(false);
        });

      test('test case to check whether the password is valid', () => {
        render(
            <BrowserRouter>
              <Patient_register/>
            </BrowserRouter>
          );
          expect(isPassword("bhavin@123")).not.toBe(false);
        });

});



describe('RePassword Validation Testing', () => {
  test('test case to check whether the string should not be empty', () => {
   render(
      <BrowserRouter>
        <Patient_register/>
      </BrowserRouter>
    );
   
    expect(isRePassword("")).not.toBe(true);
  });



  test('test case to check whether the password and repassword inputs are same', () => {
    render(
        <BrowserRouter>
          <Patient_register/>
        </BrowserRouter>
      );
      expect(isRePassword("12345678","123456789")).not.toBe(true);
    });

    test('test case to check whether the password and repassword matches', () => {
      render(
          <BrowserRouter>
            <Patient_register/>
          </BrowserRouter>
        );
        expect(isRePassword("12345678","12345678")).not.toBe(false);
      });

});

describe('Patient Registration API Testing', () => {
  test('Registers a new Patient', async () => {
    const data = 
    {
      p_id: "P101",
      firstname: "Sanket",
      lastname: "Supekar",
      age:20,
      phoneNo: 9130420855,
      address: "18/40 Daji Peth Shirdi",
      password:"sanket123",
      bloodGroup: "O",
      gender:"Male",
      height:55,
      weight:51,
      profileUrl: "https://res.cloudinary.com/didso0xgl/image/upload/v1683139751/hjvt0fyd…"

    };
    const response = await fetch('http://localhost:3001/api/patientReg', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const json = await response.json();
   // expect(response.status).toBe(200);
    //wexpect(json.message).toBe('Registration successful');
  });

  test('Returns 500 error if server error occurs', async () => {
      const data = 
      {
      p_id: "P101",
      firstname: "Sanket",
      lastname: "Supekar",
     
      age:20,
      phoneNo: 9130420855,
      address: "18/40 Daji Peth Shirdi",
     // password:"sanket123", 
      bloodGroup: "O",
      gender:"Male",
      height:55,
      weight:51,
      profileUrl: "https://res.cloudinary.com/didso0xgl/image/upload/v1683139751/hjvt0fyd…"
       

      };
    
    const response = await fetch('http://localhost:3001/api/patientReg', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    expect(response.status).toBe(500);
    expect(json.message).toBe('Internet Server Error');
  });

  test('Should return the next patient ID', async () => {
    const response = await fetch('http://localhost:3001/api/patientId');
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toHaveProperty('patient_id');
    expect(typeof data.patient_id).toBe('string');
  });

});

