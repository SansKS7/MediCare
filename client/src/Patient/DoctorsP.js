import React, {useState,useEffect}from "react";
import HeaderP from "../Home/HeaderP";
import { Link } from "react-router-dom";
function DoctorP() {
  const URL = "/api/doctor?search=";

  const [doctor, setDoctor] = useState([]);

  const getDoctors = async () => {
    const response = await fetch(URL);
    setDoctor(await response.json());
    const data = await response.json();
    console.log(data);
    // const doctorDipslay = doctor.slice(0,2);

    //console.log(data);
  };
  useEffect(() => {
    getDoctors();
  }, []);

  return (
    <>
      <HeaderP />
      <div className="search__back">
        <form
          class="search__bar__dr d-flex navbar navbar-expand  fixed-top d-flex align-items-center"
          role="search"
        >
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search Doctors Here....."
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="row">
      {doctor.map((currElem) => {
          return (
            <>
      <div className="col">
        <div class="card doctorcard">
          <img
            src=""
            class="card-img-top doctor__card__imgblock"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title"> {currElem.name}</h5>
            <p class="card-text">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Hospital Name:</th>
                    <td>{currElem.hospitalName}</td>
                  </tr>

                  <tr>
                    <th scope="col">Speciality:</th>
                    <td>{currElem.speciality}</td>
                  </tr>
                  <tr>
                    <th scope="col">Experience</th>
                    <td>{currElem.experience}</td>
                  </tr>
                  <tr>
                    <th scope="col">Phone No </th>
                    <td>{currElem.phoneNo}</td>
                  </tr>
                  <tr>
                    <th scope="col">Qualification</th>
                    <td>{currElem.qualification}</td>
                  </tr>
                  <tr>
                    <th scope="col">Charges</th>
                    <td>{currElem.charges}</td>
                  </tr>
                  <tr>
                    <th scope="col">Mail</th>
                    <td>{currElem.mail}</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Address</th>
                    <td className="card__address">{currElem.address}</td>
                  </tr>
                </tbody>
              </table>
            </p>
            <p className="text-center">
            <Link to="/Book_Appointment" state={currElem}  class="btn btn-primary hospitalbtn-card">
            Book Appointment
          </Link>
            
            </p>
          </div>
        </div>
        
      </div>
        </>
          );
        })}

      </div>
    </>
  );
}



export default DoctorP;
