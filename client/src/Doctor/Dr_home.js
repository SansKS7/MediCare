import React,{ useEffect } from 'react';
import Dr_login from "./Dr_login";
import Dr_register from './Dr_register';
import Dr_header from './Dr_header';
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";


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
    <h1>Welcome Doctor</h1>

    
    {/* <Dr_login/>
    Dr_header/>
    <Dr_register/> */}
    </>
  )
}

export default Dr_home;
