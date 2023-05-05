import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Home/Header";

function Patient_register() {
  const URL = "/api/patientReg";
  const getIdUrl = "/api/patientId";
  const [patient, setpatientId] = useState();

  async function receiveID(getIdUrl) {
    try {
      const respones = await fetch(getIdUrl).catch((e) =>
        console.log("Error : ", e)
      );
      const json = await respones.json();
      console.log(respones.status);
      if (respones.status === 200) {
        //Login Success
        setpatientId(json.patient_id);
        console.log("Success");
      } else {
        //Login Invalid
        console.log("Invalid");
      }
    } catch (e) {
      console.log("Error : ", e);
    }
  }

  const [formData, setForm] = useState({});

  async function uploadingData(url, data) {
    try {
      const respones = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).catch((e) => console.log("Error : ", e));
      const json = await respones.json();
      console.log(respones.status);
      if (respones.status === 200) {
        //Login Success
        console.log("Success");

        navigate("/patient_home");
      } else {
        //Login Invalid
        console.log("Invalid");
      }
    } catch (e) {
      console.log("Error : ", e);
    }
  }

  const handleEvent = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  function isfirstName(val) {
    //console.log(val);
    var reg = /^[a-zA-Z]+$/;
    if (reg.test(val)) return true;
    return false;
  }

  function isAddress(val) {
    console.log(val);
    var reg = /^[a-zA-Z0-9\s+/b+(/,@)]+$/;
    // var reg=/^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/

    if (reg.test(val)) return true;
    return false;
  }

  function isPhno(val) {
    var phoneNo = /^\d{10,10}$/;
    if (phoneNo.test(val)) return true;
    return false;
  }
  function isAge(val) {
    var phoneNo = /^\d{2}$/;
    if (phoneNo.test(val)) return true;
    return false;
  }

  function isPassword(val) {
    console.log(val);

    var regex = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (!regex.test(val)) {
      return false;
    }
    return true;
  }

  function isRePassword(pass, repass) {
    if (pass === repass) return true;
    return false;
  }
  function onFormSubmit(e) {
    e.preventDefault();
    //console.log(formData)
    var fname = isfirstName(formData.firstName);
    var lname = isfirstName(formData.lastName);
    var phone = isPhno(formData.phoneNo);
    var address = isAddress(formData.address);
    var age = isAge(formData.age);
    var password = isPassword(formData.password);
    var repassword = isRePassword(formData.password, formData.repassword);
    if (fname && lname && age && phone && address && password) {
      console.log(formData);
      uploadingData(URL, formData);
      alert("Login Successful")
    } else {
      alert("Login Unsuccessful");
    }
  }

  useEffect(() => {
    receiveID(getIdUrl);
    console.log(patient);
  });

  useEffect(() => {
    setForm({
      _id: null,
      p_id: patient,
      firstName:"",
      lastName: "",
      age: "",
      phoneNo: "",
      address: "",
      password: "",
      repassword: "",
    });
  }, [patient]);

  return (
    <>
      {console.log(formData)}
      <Header />
      <div className="main-container">
        <div id="patient_register">
          <div className="container">
            <form className="register">
              <fieldset>
                <b className="my-2">
                  {" "}
                  <center>
                    <legend>Patient Register</legend>{" "}
                  </center>{" "}
                </b>
                <div className="displayFlex-2">
                  <div className="mb-3">
                    <label for="disabledTextInput" class="form-label">
                      Patient-ID
                    </label>
                    <input
                      type="text"
                      id="p_id"
                      value={formData.p_id}
                      name="p_id"
                      className="form-control textbox"
                      readOnly
                    />
                  </div>
                </div>

                <div className="displayFlex">
                  <div className="mb-3">
                    <label for="disabledTextInput" class="form-label">
                      Enter First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="form-control textbox"
                      onChange={handleEvent}
                    />
                  </div>

                  <div className="mb-3">
                    <label for="disabledTextInput" class="form-label">
                      Enter Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"

                      
                      className="form-control textbox"
                      onChange={handleEvent}
                    />
                  </div>
                </div>
                <div className="displayFlex">
                  <div className="mb-3">
                    <label for="disabledTextInput" class="form-label">
                      Enter Age
                    </label>
                    <input
                      type="text"
                      id="age"
                      name="age"
                      className="form-control textbox"
                      onChange={handleEvent}
                    />
                  </div>

                  <div className="mb-3">
                    <label for="disabledTextInput" class="form-label">
                      Enter Phone No
                    </label>
                    <input
                      type="text"
                      className="form-control textbox"
                      id="phoneNo"
                      name="phoneNo"
                      onChange={handleEvent}
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label for="disabledTextInput" class="form-label">
                    Enter Address
                  </label>
                  <input
                    type="text"
                    className="form-control textbox"
                    id="address"
                    name="address"
                    onChange={handleEvent}
                  />
                </div>

                <div class="mb-3">
                  <label for="disabledTextInput" class="form-label">
                    Enter Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    class="form-control textbox"
                    onChange={handleEvent}
                  />
                </div>

                <div class="mb-3">
                  <label for="disabledTextInput" class="form-label">
                    Retype Password
                  </label>
                  <input
                    type="password"
                    id="repassword"
                    name="repassword"
                    class="form-control textbox"
                    onChange={handleEvent}
                  />
                </div>

                <button
                  type="submit"
                  class=" displayFlex-2  textalign-center btn btn-primary my-2 "
                  onClick={onFormSubmit}
                >
                  Register
                </button>

                {/* <center>
                <b> OR</b>{" "}
              </center>
              <button type="submit" class="displayFlex-2  textalign-center btn btn-primary my-2 " onClick={()=>navigate("/Patient_login")}>
                Login
              </button> */}
              </fieldset>
            </form>
          </div>
        </div>
        <div className="hero-section-2 col-lg-6 order-1 order-lg-2 hero-img">
          <img
            src={require("../assets/img/doctor.png")}
            className="img1 img-fluid animated"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Patient_register;
