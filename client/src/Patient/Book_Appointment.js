import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderP from "../Home/HeaderP";
import { Link, useLocation } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";

function Book_Appointment(props) {
  const [{ PatientUser }, dispatchUser] = useStateValue();
  const state = useLocation();

  const [doctorData, setDoctorData] = useState(state.state);
  const getnameURL = "/api/patient?search="+PatientUser;
  const [patient, setPatient] = useState([]);
  const [appo, setappo] = useState([]);
  


  const getPatient = async () => {
    const response = await fetch(getnameURL);
    const data = await response.json();
    console.log("Patient data: ")
    console.log(data);
   // setPatient(data);
    
    // const doctorDipslay = doctor.slice(0,2);

    //console.log(data);
  };

  
  useEffect(() => {
    getPatient()})


  const [formData, setForm] = useState({
    a_id: "",
    p_id: PatientUser,
    firstName: patient.firstName,
    lastName: patient.lastName,
    gender: patient.gender,
    phoneNo: patient.phoneNo,
    d_id: doctorData.d_id,
    name: doctorData.name,
    h_id: doctorData.h_id,
    hospitalName: doctorData.hospitalName,
    appoDateTime: "",
    createDate: new Date(),
    appoStatus: "Pending",
    appoMessage: "",
  });

  
  function onFormSubmit(e) {
    e.preventDefault();
    //getPatient();

    console.log("Check point")
    console.log(formData);
    //setappo(formData);
    //console.log(appo);

  
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
                    id="firstName"
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
                    value={formData.appoDateTime}
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
                    value={formData.appoMessage}
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

export default Book_Appointment;
