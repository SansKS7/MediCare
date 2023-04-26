import React,{useState,useEffect} from "react";
import HeaderP from "../Home/HeaderP";
import { useStateValue } from "../Context/StateProvider";
import { useNavigate } from "react-router-dom";

function HospitalP() {

  
const navigate = useNavigate()

  return (
    <>
      <div>HospitalP</div>
      <HeaderP />
      <div className="search__back__PH">
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

      <div className="container hospital__display hospital__hospital__card">
        <div>
          <Card1
            img="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=2000"
            hname="Hospital Name"
            name="Jehangir Hospital"
            spe="Speciality"
            speciality="Eye Care"
            mail="Mail"
            mailid="adityakumar@gmail.com"
            add="Address"
            address="Pune Station Road, Opposite Saurabh Hall and Alankar Talkies, Central Excise Colony, Sangamwadi, Pune"
            ph="PhoneNo"
            phoneNo="1234567890"
          />
        </div>

        <div className="hospital__doctor__card">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4 patient__hospital__dr__">
                <img
                  src="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=2000"
                  class="img-fluid rounded-start doctor__card__imgblock1"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Dr. Aditi Kumar</h5>
                  <p class="card-text">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Speaciality</th>
                          <td>Eye Care</td>
                        </tr>
                        <tr>
                          <th scope="col">Qualification</th>
                          <td>MBBS MS</td>
                        </tr>
                        <tr>
                          <th scope="col">Mobile</th>
                          <td>1234567890</td>
                        </tr>
                        <tr>
                          <th scope="col">Experience</th>
                          <td>4 Years</td>
                        </tr>
                        <tr>
                          <th scope="col">Charges</th>
                          <td>500.00</td>
                        </tr>
                        <tr>
                          <th scope="col">Mail</th>
                          <td>aditikumar@gmail.com</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Address</th>
                          <td className="card__address">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. ! Illum, voluptate reprehenderit.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                      <button  className="btn btn-primary doctor__btn text-center"onClick={() => navigate("/Book_Appointment")}>Book Appointment </button>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4 patient__hospital__dr__">
                <img
                  src="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=2000"
                  className="img-fluid rounded-start card-img-top doctor__card__imgblock1"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Dr. Aditi Kumar</h5>
                  <p class="card-text">
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Speaciality</th>
                          <td>Eye Care</td>
                        </tr>
                        <tr>
                          <th scope="col">Qualification</th>
                          <td>MBBS MS</td>
                        </tr>
                        <tr>
                          <th scope="col">Mobile</th>
                          <td>1234567890</td>
                        </tr>
                        <tr>
                          <th scope="col">Experience</th>
                          <td>4 Years</td>
                        </tr>
                        <tr>
                          <th scope="col">Charges</th>
                          <td>500.00</td>
                        </tr>
                        <tr>
                          <th scope="col">Mail</th>
                          <td>aditikumar@gmail.com</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>Address</th>
                          <td className="card__address">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. ! Illum, voluptate reprehenderit.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </p>
                  <p class="card-text">
                    <small class="text-body-secondary">
                    <button className="btn btn-primary doctor__btn text-center" onClick={() => navigate("/Book_Appointment")}>Book Appointment </button>
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Card1(props) {
  return (
    <>
      <div>
        <div class="card doctorcard">
          <img
            src={props.img}
            class="card-img-top doctor__card__imgblock"
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
                    <th scope="col">{props.ph}</th>
                    <td>{props.phoneNo}</td>
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
           
            {/* <p className="text-center">
               <button
                class="btn btn-primary doctor__btn text-center"
                type="submit" onClick={ () => navigate("/Book_Appointment")}
              >
                Book Appointment
              </button>
            </p> */}
          </div> 
        </div>

        <div class="card doctorcard">
        </div>


      </div>
    </>
  );
}


export default HospitalP;
