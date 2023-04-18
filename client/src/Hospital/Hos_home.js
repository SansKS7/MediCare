import React from 'react';
import Hos_login from "./Hos_login";
import Dr_register from "../Doctor/Dr_register";
import Hos_header from "./Hos_header";
import { useNavigate } from "react-router-dom";

function Hos_home () {
  const navigate=useNavigate()
  return (
    <>
   
   {/* <h1>Welcome Doctor</h1>

<button type="submit" class="btn btn-primary my-2 " onClick={()=>navigate("/Home")}>Logout</button> */}

<Hos_header/>
   {/* <Hos_login/>  
    <Hos_header/>
    <Dr_register/> */}

    </>
  )
}

export default Hos_home;
