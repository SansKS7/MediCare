import React, { useEffect, useState } from "react";
import HeaderP from "./HeaderP";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";

function View_Appointment() {
  const navigate = useNavigate();
  const [{ PatientUser }, dispatchUser] = useStateValue()?? [{}, () => {}];
  const URLPending =
    "/api/patientAppointment?search=" + PatientUser + "+Pending";
  const URLAccepted =
    "/api/patientAppointment?search=" + PatientUser + "+Accepted";
  const URLRejected =
    "/api/patientAppointment?search=" + PatientUser + "+Rejected";

  const [patient, setPatient] = useState([]);
  const [patientA, setPatientA] = useState([]);
  const [PatientR, setPatientR] = useState([]);

  const getPatient = async () => {
    const response = await fetch(URLPending);
    const data = await response.json();
    console.log(data);
    setPatient(data);
  };

  const getPatientAcc = async () => {
    const response = await fetch(URLAccepted);
    const data = await response.json();
    console.log(data);
    setPatientA(data);
  };

  const getPatientR = async () => {
    const response = await fetch(URLRejected);
    const data = await response.json();
    console.log(data);
    setPatientR(data);
  };

  function getDateData(d) {
    const date = new Date(d);
    const dateTemp = date.getDate(date);
    const monthTemp = date.getMonth(date);
    const yearTemp = date.getFullYear(date);

    return dateTemp + "/" + monthTemp + "/" + yearTemp;
  }

  function getTimeData(d) {
    const date = new Date(d);
    const h = date.getHours(date);
    const m = date.getMinutes(date);
    // const yearTemp = date.getFullYear(date);

    return h + ":" + m;
  }
  //getPatient();
  useEffect(() => {
    getPatient();
    getPatientAcc();
    getPatientR();
  });

  return (
    <>
      <HeaderP />

      <div className="table-container1"   data-testid="my-div-pending">
        <h2
          data-aos="fade-up"
          text
          data-aos-delay="400"
          className="text-primary"
        >
          Pending Appointments{" "}
        </h2>

        <table className="table"  data-testid="my-table-pending">
          <thead className="thead-dark1">
            <tr data-testid="my-row-pending">
              <th data-testid="my-col-pending-sr" scope="col">Sr.No</th>
              <th data-testid="my-col-pending-hname" scope="col">Hospital Name</th>
              <th data-testid="my-col-pending-dname" scope="col">Doctor Name</th>
              <th data-testid="my-col-pending-date" scope="col">Date</th>
              <th data-testid="my-col-pending-time" scope="col">Time</th>
              <th data-testid="my-col-pending-msg"  scope="col">Message</th>
              <th data-testid="my-col-pending-appostatus" scope="col">Appointment Status</th>
            </tr>
          </thead>
          <tbody>
            {patient.map((currElem) => {
              return (
                <tr>
                  <th scope="row">{currElem.a_id}</th>
                  <td >{currElem.hospitalName}</td>
                  <td > Dr.{currElem.name}</td>
                  <td  >{getDateData(currElem.appoDateTime)}</td>
                  <td >{getTimeData(currElem.appoDateTime)}</td>
                  <td >{currElem.appoMessage}</td>

                  <td>
                    <button className="btn btn-primary">Pending</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="table-container1" data-testid="my-div-accepted">
        <h2
          data-aos="fade-up"
          text
          data-aos-delay="400"
          className="text-success"
        >
          Accepted Appointments{" "}
        </h2>

        <table className="table" data-testid="my-table-accepted">
          <thead className="thead-dark1">
            <tr data-testid="my-row-accepted">
              <th data-testid="my-col-accepted-sr" scope="col">Sr.No</th>
              <th data-testid="my-col-accepted-hname" scope="col">Hospital Name</th>
              <th data-testid="my-col-accepted-dname" scope="col">Doctor Name</th>

              <th data-testid="my-col-accepted-date" scope="col">Date</th>
              <th data-testid="my-col-accepted-time" scope="col">Time</th>
              <th data-testid="my-col-accepted-msg" scope="col">Message</th>
              <th data-testid="my-col-accepted-appoStatus" scope="col">Appointment Status</th>
            </tr>
          </thead>
          <tbody>
            {patientA.map((currElem) => {
              return (
                <tr>
                  <th scope="row">{currElem.a_id}</th>
                  <td>{currElem.hospitalName}</td>
                  <td>Dr. {currElem.name}</td>
                  <td>{getDateData(currElem.appoDateTime)}</td>
                  <td>{getTimeData(currElem.appoDateTime)}</td>
                  <td>{currElem.appoMessage}</td>

                  <td>
                    <button className="btn btn-success">Accepted</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="table-container1"  data-testid="my-div-rejected" >
        <h2
          data-aos="fade-up"
          text
          data-aos-delay="400"
          className="text-danger"
        >
          Rejected Appointments{" "}
        </h2>

        <table className="table"  data-testid="my-table-rejected">
          <thead className="thead-dark1">
            <tr>
              <th data-testid="my-col-rejected-sr" scope="col">Sr.No</th>
              <th data-testid="my-col-rejected-hname" scope="col">Hospital Name</th>
              <th data-testid="my-col-rejected-dname" scope="col">Doctor Name</th>

              <th data-testid="my-col-rejected-date" scope="col">Date</th>
              <th data-testid="my-col-rejected-time" scope="col">Time</th>
              <th data-testid="my-col-rejected-msg" scope="col">Message</th>
              <th data-testid="my-col-rejected-appoStatus" scope="col">Appointment Status</th>
            </tr>
          </thead>
          <tbody>
            {PatientR.map((currElem) => {
              return (
                <tr>
                  <th scope="row">{currElem.a_id}</th>
                  <td>{currElem.hospitalName}</td>
                  <td>Dr.{currElem.name}</td>
                  <td>{getDateData(currElem.appoDateTime)}</td>
                  <td>{getTimeData(currElem.appoDateTime)}</td>{" "}
                  <td>  <span className="text-danger">{currElem.appoMessage} </span> </td>
                  <td>
                    <button className="btn btn-danger">Rejected</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default View_Appointment;
