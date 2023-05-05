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
        <div className="card doctorcardHD">
          <img
            src={curElem.profileUrl}
            className="card-img-top hospital__dr__card__imgblock"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title"> {curElem.name}</h5>
            <p className="card-text">
              <table className="table">
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
            <Link to="/Book_Appointment"  state={curElem}  className="btn btn-primary hospitalbtn-card">
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

function Card1(props) {
  return (
    <>
      <div className="col">
        <div className="card doctorcard">
          <img
            src={props.img}
            className="card-img-top hospital__dr__card__imgblock"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title"> {props.drname}</h5>
            <p className="card-text">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">{props.hname}</th>
                    <td>{props.name}</td>
                  </tr>

                  <tr>
                    <th scope="col">{props.spe}</th>
                    <td>{props.speciality}</td>
                  </tr>
                  <tr>
                    <th scope="col">{props.exp}</th>
                    <td>{props.experience}</td>
                  </tr>
                  <tr>
                    <th scope="col">{props.ph}</th>
                    <td>{props.phoneNo}</td>
                  </tr>
                  <tr>
                    <th scope="col">{props.qua}</th>
                    <td>{props.qualification}</td>
                  </tr>
                  <tr>
                    <th scope="col">{props.charge}</th>
                    <td>{props.charges}</td>
                  </tr>
                  <tr>
                    <th scope="col">{props.mail}</th>
                    <td>{props.mailid}</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>{props.add}</th>
                    <td className="card__address">{props.address}</td>
                  </tr>
                </tbody>
              </table>
            </p>
            <p className="text-center">
              <button
                className="btn btn-primary doctor__btn text-center"
                type="submit"
              >
                Book Appointment
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HospitalDr;
