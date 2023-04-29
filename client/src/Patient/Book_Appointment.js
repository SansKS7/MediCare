import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderP from "../Home/HeaderP";
import { Link, useLocation } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";

function DoctorP(props) {
  //const location =useLocation();
  const [{ PatientUser }, dispatchUser] = useStateValue();
  const data = {};
  const state = useLocation();
  const [doctorData, setDoctorData] = useState(state.state);
  // console.log(typeof data);
  // console.log("data =", data);

  const URL = "/api/doctor?search=" + data.doctor;
  const getnameURL = "/api/patient?search=" + PatientUser;
  // console.log(URL);

  const [patient, setPatient] = useState([]);

  async function getDoctors() {
    const response = await fetch(getnameURL);
    const data = await response.json();

    setPatient(data);
  }

  useEffect(() => {
    getDoctors();
    console.log(patient);
  });

  const [formData, setForm] = useState({
    _id: null,
    a_id: "",
    p_id: "",
    firstName: "",
    lastName: "",
    gender: "",
    phoneNo: "",
    d_id: "",
    name: "",
    h_id: "",
    hospitalName: "",
    appoDateTime: "",
    createDate: "",
    appoStatus: "",
    appoMessage: "",
    __v: "",
  });

  function isfirstName(val) {
    // console.log(val);
    //var reg=/^[a-zA-Z0-9]\s/;
    var reg = /^[a-zA-Z0-9\s+/b+(/,@)]+$/;

    if (reg.test(val)) return true;
    return false;
  }

  function isDate(val) {
    // console.log(val);

    const reg = /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;

    if (reg.test(val)) return true;
    return false;
  }

  function onFormSubmit(e) {
    e.preventDefault();
    // console.log(formData);

    var name = isfirstName(formData.firstName);
    var drname = isfirstName(formData.name);
    var hosname = isfirstName(formData.hospitalName);
    var Message = isfirstName(formData.appoMessage);
    var date = isDate(formData.appoDateTime);
    if (Message && date && name && drname && hosname) {
      // console.log(formData);
      alert("Success!");
    } else {
      // console.log("Failure!");
    }
  }
  const handleEvent = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <HeaderP />
      <div className="main-container">
        <div id="patient_register">
          <div className="container">
            <form className="register">
              <fieldset>
                <b className="my-2">
                  <center>
                    <legend>Book Appointment</legend>{" "}
                  </center>{" "}
                </b>

                <div className="mb-3">
                  <label for="disabledTextInput" class="form-label">
                    Patient Name
                  </label>
                  <input
                    type="text"
                    id="firstName+lastName"
                    value={patient.firstName + " " + patient.lastName}
                    name="firstName"
                    className="form-control textbox"
                    onChange={handleEvent}
                    readOnly
                  />
                </div>

                <div className="mb-3">
                  <label for="disabledTextInput" class="form-label">
                    Doctor Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={doctorData.name}
                    className="form-control textbox"
                    onChange={handleEvent}
                    readOnly
                  />
                </div>

                <div className="mb-3">
                  <label for="disabledTextInput" class="form-label">
                    Hospital Name
                  </label>
                  <input
                    type="text"
                    id="hospitalName"
                    name="hospitalName"
                    value={doctorData.hospitalName}
                    className="form-control textbox"
                    onChange={handleEvent}
                    readOnly
                  />
                </div>

                <div className="mb-3">
                  <label for="disabledTextInput" class="form-label">
                    {" "}
                    Select Time{" "}
                  </label>
                  <input
                    type="date"
                    className="form-control textbox"
                    id="appoDateTime"
                    name="appoDateTime"
                    onChange={handleEvent}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label for="disabledTextInput" class="form-label">
                    {" "}
                    {} Message
                  </label>
                  <textarea
                    rows="5"
                    class="form-control"
                    placeholder="Enter Your Problems and symptoms..."
                    id="appoMessage"
                    name="appoMessage"
                    onChange={handleEvent}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  class=" displayFlex-2  textalign-center btn btn-primary my-2 "
                  onClick={onFormSubmit}
                >
                  Book Appointment
                </button>
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

export default DoctorP;
