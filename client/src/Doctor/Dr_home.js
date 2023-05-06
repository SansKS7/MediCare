import React,{ useState,useEffect } from 'react';
import Dr_login from "./Dr_login";
import Dr_register from './Dr_register';
import Dr_header from './Dr_header';
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";
import About from '../Home/About'
import Hero from '../Home/Hero'
import Count from '../Home/Count'
import Testimonials from '../Home/Testmonials'
import Frequent_question from '../Home/Frequent_question'
import Contact from '../Home/Contact'
import Appointment from './Appointment';


function Dr_home () {
  const [ {DoctorUser} , dispatchUser] = useStateValue()?? [{}, () => {}];

  const navigate=useNavigate();
  
  const getnameURL = "/api/doctor?search=" + DoctorUser;
  
  const [doctor, setDoctor] = useState([]);

  const   getDoctor=async()=> {
    const response = await fetch(getnameURL);
    const data = await response.json();
    setDoctor(data[0]);
  }

  useEffect(() => {
    getDoctor();
    console.log(doctor.name);
  },[]);


  function logoutUser()
  {
      window.localStorage.clear();
      window.location.reload();
  }
  useEffect(()=>{
    if(DoctorUser === null || DoctorUser === "null")
    {
      navigate("/Dr_login")
    }
  },[])


  return (
    <>
    <Dr_header/>
    <div className='patient__dash'>

    <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <div className="row">            
                        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                            <h2 data-aos="fade-up" data-aos-delay="400">Welcome   <span className="text-primary">  Dr. {doctor.name}  </span>  To..</h2>
                            
                            <h1 data-aos="fade-up">{doctor.hospitalName}</h1>
                            <h2 data-aos="fade-up" data-aos-delay="400">Care A Million</h2>
                            
                            <p><h9 data-aos="fade-up">We understand healthcare goes beyond signs, symptoms, diagnosis, and 
                                        treatment. It’s about the deep connection between doctors and patients that leads to 
                                        continuous care and sustained, better outcomes.</h9></p>
                            <div data-aos="fade-up" data-aos-delay="800">
                           
                                
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
  )
}

export default Dr_home;
