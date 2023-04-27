import React,{ useEffect } from 'react';
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
  const [ {DoctorUser} , dispatchUser] = useStateValue();

  const navigate=useNavigate();
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
  })


  return (
    <>
    <Dr_header/>
    <div className='patient__dash'>
    <Hero/>
    <About/>
    <Count/>
    <Frequent_question/>
    <Contact/>
    
    </div>
    </>
  )
}

export default Dr_home;
