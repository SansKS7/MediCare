import React, { useState, useEffect } from "react";
import Hos_login from "./Hos_login";
import Dr_register from "../Doctor/Dr_register";
import { useStateValue } from "../Context/StateProvider";
import Hos_header from "./Hos_header";
import { useNavigate } from "react-router-dom";
import About from "../Home/About";
import Hero from "../Home/Hero";
import Count from "../Home/Count";
import Testimonials from "../Home/Testmonials";
import Frequent_question from "../Home/Frequent_question";
import Contact from "../Home/Contact";

function Hos_home() {
  const [{ HospitalUser }, dispatchUser] = useStateValue()??[{}, () => {}];
  const navigate = useNavigate();

  const getnameURL = "/api/hospital?search=" + HospitalUser;

  const [hospital, setHospital] = useState([]);

  const getHospital = async () => {
    const response = await fetch(getnameURL);
    const data = await response.json();
    setHospital(data[0]);
  };

  useEffect(() => {
    getHospital();
  });

  function logoutUser() {
    window.localStorage.clear();
    window.location.reload();
  }

  useEffect(() => {
    if (HospitalUser === null || HospitalUser === "null") {
      navigate("/Hos_login");
    }
  });

  return (
    <>
      <Hos_header />
      <>
        <section id="hero" className="d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <br />
                <br />
                <br />
                <br />

                <h2 data-aos="fade-up" text data-aos-delay="400">
                  Welcome
                  <span className="text-primary"> {hospital.name} </span> To ..
                </h2>

                <h1 data-aos="fade-up">MediCare</h1>
                <h2 data-aos="fade-up" data-aos-delay="400">
                  Care A Million
                </h2>

                <p>
                  <h9 data-aos="fade-up">
                    We understand healthcare goes beyond signs, symptoms,
                    diagnosis, and treatment. It’s about the deep connection
                    between doctors and patients that leads to continuous care
                    and sustained, better outcomes.
                  </h9>
                </p>
                <div data-aos="fade-up" data-aos-delay="800"></div>
              </div>

              <div
                className=" hero-section-2 col-lg-6 order-1 order-lg-2 hero-img"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <img
                  src={require("../assets/img/home.png")}
                  className="img-fluid animated"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </>
      <About />
      <Count />
      <Frequent_question />
      <Contact />
    </>
  );
}

export default Hos_home;
