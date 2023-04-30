import React, {useState,useEffect}from "react";
import HeaderP from "../Home/HeaderP";
import { Link, useLocation } from "react-router-dom";

function HospitalDr(props)   {
    const location =useLocation();
    const data=location.state;
    console.log(typeof(  data))
    console.log("data =" ,data);
  const URL = "/api/doctor?search="+data.hospital;
  console.log(URL);

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


      {doctor.map((curElem) => {
          return (
            <>


            <div className="col">
        <div class="card doctorcard">
          <img
            src=""
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


            {/* <Card1
          img="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=2000"
          hname="Hospital Name"
          name={curElem.hospitalName}
          drname={curElem.name}
          spe="Speciality"
          speciality={curElem.speciality}
          mail="Mail"
          mailid={curElem.mail}
          add="Address"
          address={curElem.address}
          exp="Experience"
          experience={curElem.experience}
          charge="Charges"
          charges={curElem.charges}
          qua="Qualification"
          qualification={curElem.qualification}
          ph="PhoneNo"
          phoneNo={curElem.phoneNo}
        />  */}
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
        <div class="card doctorcard">
          <img
            src={props.img}
            class="card-img-top hospital__dr__card__imgblock"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title"> {props.drname}</h5>
            <p class="card-text">
              <table class="table">
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
                class="btn btn-primary doctor__btn text-center"
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
