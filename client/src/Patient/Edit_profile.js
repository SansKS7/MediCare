import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderP from "../Home/HeaderP";
import { useStateValue } from "../Context/StateProvider";
import { actionTypes } from "../Context/reducer";

function Edit_profile() {
  const navigate = useNavigate();

  const [{ PatientUser }, dispatchUser] = useStateValue();
  const URL = "/api/patient?search=" + PatientUser;

  const [patient, setPatient] = useState([]);
  const [formData, setForm] = useState({
    _id: null,
    p_id: patient,
    firstName: "",
    lastName: "",
    age: "",
    phoneNo: "",
    address: "",
    password: "",
    repassword: "",
  });
  const getDoctors = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data,"Temp");
    setForm({...data});
  };
  useEffect(() => {
    getDoctors();
  },[]);

  
  let name, value;
  const handleEvent = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

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
    var fname = isfirstName(formData.firstName);
    var lname = isfirstName(formData.lastName);
    var phone = isPhno(formData.phoneNo);
    var address = isAddress(formData.address);
    var age = isAge(formData.age);
    var password = isPassword(formData.password);
    if (fname && lname && age && phone && address && password) {
      alert("Login Successful");
      console.log(formData);

      navigate("/Patient_profile");
    } else {
      alert("Login Unsuccessful");
    }
  }

  return (
    <>
      <HeaderP />
      <div>
        <div id="profile">
          <div className="container">
            <div className="main-body">
              <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                  <div className="card card1">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center text-center">
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          alt="Admin"
                          className="rounded-circle"
                          width="150"
                        />
                        <div className="mt-3">
                          <h4>
                            {patient.firstName} {patient.lastName}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card card1 mb-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <label for="disabledTextInput" class="form-label">
                            {" "}
                            <h6 className="mb-0">Patient-ID</h6>{" "}
                          </label>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            id="p_id"
                            name="p_id"
                            value={formData.p_id}
                            className="form-control textbox"
                            disabled
                          />
                        </div>
                      </div>
                      <hr></hr>
                      <div className="row">
                        <div className="col-sm-3">
                          <label for="disabledTextInput" class="form-label">
                            <h6 className="mb-0">Patient Name</h6>
                          </label>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            // value={patient.firstName}
                            className="form-control textbox"
                            onChange={handleEvent}
                          />
                        </div>
                      </div>
                      <hr></hr>
                      <div className="row">
                        <div className="col-sm-3">
                          <label for="disabledTextInput" class="form-label">
                            {" "}
                            <h6 className="mb-0">LastName</h6>
                          </label>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            className="form-control textbox"
                            onChange={handleEvent}
                          />
                        </div>
                      </div>
                      <hr></hr>
                      <div className="row">
                        <div className="col-sm-3">
                          <label for="disabledTextInput" class="form-label">
                            <h6 className="mb-0">Age</h6>
                          </label>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            id="age"
                            name="age"
                            value={formData.age}
                            className="form-control textbox"
                            onChange={handleEvent}
                          />
                        </div>
                      </div>
                      <hr></hr>
                      <div className="row">
                        <div className="col-sm-3">
                          <label for="disabledTextInput" class="form-label">
                            {" "}
                            <h6 className="mb-0">phone No</h6>
                          </label>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            className="form-control textbox"
                            id="phoneNo"
                            name="phoneNo"
                            value={formData.phoneNo}
                            onChange={handleEvent}
                          />
                        </div>
                      </div>
                      <hr></hr>
                      <div className="row">
                        <div className="col-sm-3">
                          <label for="disabledTextInput" class="form-label">
                            {" "}
                            <h6 className="mb-0">Address</h6>
                          </label>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            className="form-control textbox"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleEvent}
                          />
                        </div>
                      </div>
                      <hr></hr>
                      <div className="row">
                        <div className="col-sm-3">
                          <label for="disabledTextInput" class="form-label">
                            <h6 className="mb-0">Password</h6>
                          </label>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            class="form-control textbox"
                            onChange={handleEvent}
                          />
                        </div>
                      </div>
                      <hr></hr>
                      <div className="row">
                        <div className="col-sm-12">
                          <button
                            className="btn btn-primary"
                            onClick={onFormSubmit}
                          >
                            {" "}
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Edit_profile;
