import React, { useEffect } from "react";
import Patient_register from "./Patient_register";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";
import { Link } from "react-router-dom";

import HeaderP from '../Home/HeaderP'
import Home from '../Home/Home'
import About from '../Home/About'
import Hero from '../Home/Hero'
import Count from '../Home/Count'
import Testimonials from '../Home/Testmonials'
import Frequent_question from '../Home/Frequent_question'
import Contact from '../Home/Contact'

function Patient_home() {
  const [ {PatientUser} , dispatchUser] = useStateValue();
  const navigate=useNavigate();

  function logoutUser()
  {
      window.localStorage.clear();
      window.location.reload();
  }


  useEffect(()=>{
    if(PatientUser === null || PatientUser === "null")
    {
      navigate("/patient_login")
    }
  })
  return (
    <>
      
      

      
      <button type="submit" class="btn btn-primary my-2 " onClick={logoutUser}>Logout</button>

      <HeaderP/>
    <div className='patient__dash'>
    <Hero/>
    <About/>
    <Count/>
    <Frequent_question/>
    <Contact/>
    
    </div>
    


    </>
  );
}

export default Patient_home;

