import React, { useState, useEffect } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function Doctors() {
 
  const URL = "/api/doctor?search=";

  const [doctor, setDoctor] = useState([]);

  const getDoctors = async () => {
    const response = await fetch(URL);
    setDoctor(await response.json());
    const data = await response.json();
    // const doctorDipslay = doctor.slice(0,2);

    //console.log(data);
  };
  useEffect(() => {
    getDoctors();
  }, []);

  

  return (
    <>
      <Header />
      <div className="row">
        {doctor.slice(0,3).map((curElem) => {
          return (
            <>
              <Card
                img={curElem.profileUrl}
                dnm="Doctor Name:"
                dname={curElem.name}
                hosnm="Hospital Name"
                hosname={curElem.hospitalName}
                spe="Speciality:"
                speciality={curElem.speciality}
              />
            </>
          );
        })}
      </div>
    </>
  );
}

function Card(props) {
  return (
    <div className="col">
      <div className="card doctorcard1">
        <img src={props.img} className="card-img-top" alt="..."  className="home_doctors" />
        <div className="card-body">
          <p className="card-text">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">{props.dnm}</th>
                  <td>{props.dname}</td>
                </tr>
                <tr>
                  <th scope="col">{props.hosnm}</th>
                  <td>{props.hosname}</td>
                </tr>

                <tr>
                  <th scope="col">{props.spe}</th>
                  <td>{props.speciality}</td>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </p>
          <Link to="/Patient_login" className="btn btn-primary hospitalbtn-card">
            View more
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Doctors;
