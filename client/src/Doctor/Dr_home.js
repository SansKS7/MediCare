import React from 'react';
import Dr_login from "./Dr_login";
import Dr_register from './Dr_register';
import Dr_header from './Dr_header';
import { useNavigate } from "react-router-dom";

function Dr_home () {
  const navigate=useNavigate()
  return (
    <>
    <h1>Welcome Doctor</h1>

    <button type="submit" class="btn btn-primary my-2 " onClick={()=>navigate("/Home")}>Logout</button>

    {/* <Dr_login/>
    Dr_header/>
    <Dr_register/> */}
    </>
  )
}

export default Dr_home;
