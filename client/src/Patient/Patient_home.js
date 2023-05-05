import React, {useState, useEffect } from "react";
import Patient_register from "./Patient_register";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";
import { Link } from "react-router-dom";

import HeaderP from './HeaderP'
import Home from '../Home/Home'
import About from '../Home/About'
import Hero from '../Home/Hero'
import Count from '../Home/Count'
import Testimonials from '../Home/Testmonials'
import Frequent_question from '../Home/Frequent_question'
import Contact from '../Home/Contact'

function Patient_home() {
  const [ {PatientUser} , dispatchUser] = useStateValue() ?? [{}, () => {}];
  const navigate=useNavigate();



  const getnameURL = "/api/patient?search=" + PatientUser;
  
  const [patient, setPatient] = useState([]);

  async function getPatient() {
    const response = await fetch(getnameURL);
    const data = await response.json();


    setPatient(data);
  }

  useEffect(() => {
    getPatient();
    console.log(patient);
  });


  function logoutUser()
  {
      window.localStorage.clear();
      window.location.reload();
  }

    useEffect(()=>{
      
    })
  useEffect(()=>{
    if(PatientUser === null || PatientUser === "null")
    {
      navigate("/patient_login")
    }
  })
  return (
    <>
      
      

      
      <button type="submit" className="btn btn-primary my-2 " onClick={logoutUser}>Logout</button>

      <HeaderP/>
    <div className='patient__dash'>
    <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <div className="row">            
                        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                      
                            <h2 data-aos="fade-up" text data-aos-delay="400" >Welcome    
                            <span className="text-primary">  {patient.firstName} {patient.lastName}  </span>    To ..</h2>
                            
                            <h1 id="medicareTitle" data-aos="fade-up">Medi-Care </h1>
                            <h2 data-aos="fade-up" data-aos-delay="400">Care A Million</h2>
                            
                            <p><h9 data-aos="fade-up">We understand healthcare goes beyond signs, symptoms, diagnosis, and 
                                        treatment. It’s about the deep connection between doctors and patients that leads to 
                                        continuous care and sustained, better outcomes.</h9></p>
                            <div data-aos="fade-up" data-aos-delay="800">
                           
                                <Link to="/HospitalP" className="btn btn-primary">Book Appointment</Link>
                                
                            </div>
                        </div>


                        <div className=" hero-section-2 col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
                            <img src={require('../assets/img/home.png')} className="img-fluid animated" alt="" />
                        </div>
                </div>
            </div>
        </section>

    <About/>
    <Count/>
    <Frequent_question/>
    <Contact/>
    
    </div>
    


    </>
  );
}

export default Patient_home;

