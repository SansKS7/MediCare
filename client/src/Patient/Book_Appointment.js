import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderP from "../Home/HeaderP";
import { Link, useLocation } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";

function Book_Appointment(props) {
   const navigate = useNavigate();
  const [{ PatientUser }, dispatchUser] = useStateValue();
  const state = useLocation();

  const [doctorData, setDoctorData] = useState(state.state);
  const getnameURL = "/api/patient?search=" + PatientUser;
  const getappointment="/api/getappointment";

  async function uploadingData(getappointment, data) {
    try {
      const respones = await fetch(getappointment, {
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


  const getPatient = async () => {
    const response = await fetch(getnameURL);
    const patient = await response.json();
    setForm({
      ...formData,
      firstName: patient.firstName,
      lastName: patient.lastName,
      gender: patient.gender,
      phoneNo: patient.phoneNo
    })
  };

  const [formData, setForm] = useState({
    a_id: "",
    p_id: PatientUser,
    firstName: "",
    lastName:"",
    gender: "",
    phoneNo: "",
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
    console.log("Check point");
    console.log(formData);
  }
  const handleEvent = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

  function isMessage(val) {
    console.log(val);
    var reg = /^[a-zA-Z0-9\s+/b+(/,@)]+$/;
    // var reg=/^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/

    if (reg.test(val)) return true;
    return false;
  }

  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );


  function onFormSubmit(e) {
    e.preventDefault();
      console.log(formData);
      uploadingData(getappointment, formData);
      alert('Bhavin')
  }


  useEffect(() => {
    getPatient();
  },[]);
  
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
                    value={formData.firstName + " " + formData.lastName}
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
                 
                   <DatePicker
                   selected={startDate}
                   onChange={(date) => setStartDate(date)}
                   showTimeSelect
                   excludeTimes={[
                     setHours(setMinutes(new Date(), 0), 17),
                     setHours(setMinutes(new Date(), 30), 18),
                     setHours(setMinutes(new Date(), 30), 19),
                     setHours(setMinutes(new Date(), 30), 17),
                   ]}
                   dateFormat="MMMM d, yyyy h:mm aa"
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
