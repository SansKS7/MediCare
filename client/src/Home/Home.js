import React, { useEffect } from "react";
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Count from './Count';
import Testmonials from './Testmonials';
import Frequent_question from './Frequent_question';
import Contact from './Contact';
import { useStateValue } from "../Context/StateProvider";
import { useNavigate } from "react-router-dom";

function Home () {
  const [ {PatientUser} , dispatchUser] = useStateValue() ?? [{}, () => {}];
  const navigate=useNavigate();

  useEffect(()=>{
    if(PatientUser !== null)
    {
      navigate("/patient_login")
    }
  })
  return (
    <>
    <Header/>
    <Hero/>
    <About/>
    <Count/>
    <Testmonials/>
    <Frequent_question/>
    <Contact/>
    
    </>
  )
}

export default Home;
