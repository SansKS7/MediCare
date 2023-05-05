import React, {useState,useEffect}from "react";
import HeaderP from "./HeaderP";

import { Link, useLocation, useNavigate } from "react-router-dom";

function HospitalDr(props)   {
  const navigate=useNavigate();
    const state =useLocation();
    const [doctor1, setDoctor1 ] = useState(state.state);

    const URL = "/api/doctor?search="+doctor1.h_id;
    console.log(URL);

    const [doctor, setDoctor] = useState([])
    const getDoctors = async () => {
    const response = await fetch(URL);
    setDoctor(await response.json());
    const data = await response.json();
    // const doctorDipslay = doctor.slice(0,2);

    //console.log(data);
  };

  // console.log(doctor1.hospitalName);
  // console.log(doctor1.hospitalName);
  

  useEffect(() => {
    console.log("Dr dta1")
    console.log(doctor1.name)
   getDoctors();
  });

  return (
    <>
      <HeaderP />


      <div className="search__back">
     <center> <h3 data-aos="fade-up" text data-aos-delay="400" >  Here Are Doctors of    
                            <span className="text-primary">  {doctor1.name} </span>    </h3> </center>
                           
      </div>
      <div className="row">


      {doctor.map((curElem) => {
          return (
            <>


            <div className="col">
        <div class="card doctorcardHD">
          <img
            src={curElem.profileUrl}
            class="card-img-top hospital__dr__card__imgblock"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title"> {curElem.name}</h5>
            <p class="card-text">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Hospital Name -</th>
                    <td>{curElem.hospitalName}</td>
                  </tr>

                  <tr>
                    <th scope="col">Speciality</th>
                    <td>{curElem.speciality}</td>
                  </tr>
                  <tr>
                    <th scope="col">Experience</th>
                    <td>{curElem.experience}</td>
                  </tr>
                  <tr>
                    <th scope="col">Phone No</th>
                    <td>{curElem.phoneNo}</td>
                  </tr>
                  <tr>
                    <th scope="col">Qualification</th>
                    <td>{curElem.qualification}</td>
                  </tr>
                  <tr>
                    <th scope="col">Charges</th>
                    <td>{curElem.charges}</td>
                  </tr>
                  <tr>
                    <th scope="col">Mail</th>
                    <td>{curElem.mail}</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Address</th>
                    <td className="card__address">{curElem.address}</td>
                  </tr>
                </tbody>
              </table>
            </p>
            <p className="text-center">
            <Link to="/Book_Appointment"  state={curElem}  class="btn btn-primary hospitalbtn-card">
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


export default HospitalDr;
