import React ,{useEffect} from 'react';
import Hos_login from "./Hos_login";
import Dr_register from "../Doctor/Dr_register";
import { useStateValue } from '../Context/StateProvider';
import Hos_header from "./Hos_header";
import { useNavigate } from "react-router-dom";
import About from '../Home/About'
import Hero from '../Home/Hero'
import Count from '../Home/Count'
import Testimonials from '../Home/Testmonials'
import Frequent_question from '../Home/Frequent_question'
import Contact from '../Home/Contact'

function Hos_home () {
  const [{HospitalUser},dispatchUser]=useStateValue();
  const navigate=useNavigate()
  
  function logoutUser()
  {
      window.localStorage.clear();
      window.location.reload();
  }


  useEffect(()=>{
    if(HospitalUser === null || HospitalUser === "null")
    {
      navigate("/Hos_login")
    }
  })
  
  return (
    <>
   
   {/* <h1>Welcome Doctor</h1>

<button type="submit" class="btn btn-primary my-2 " onClick={()=>navigate("/Home")}>Logout</button> */}

    <Hos_header/>
    <Hero/>
    <About/>
    <Count/>
    <Frequent_question/>
    <Contact/>
    

    {/* <Dr_register/> */}


   {/* <Hos_login/>  
    <Hos_header/>
    <Dr_register/> */}

    </>
  )
}

export default Hos_home;
