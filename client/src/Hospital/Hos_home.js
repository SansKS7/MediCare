import React from 'react';
import Hos_login from "./Hos_login";
import Dr_register from "../Doctor/Dr_register";
import Hos_header from "./Hos_header";

function Hos_home () {
  return (
    <>
    <Hos_header/>
    <Dr_register/>
    <h1>Welcome</h1>
   {/* <Hos_login/>   */}
    </>
  )
}

export default Hos_home;
