import React from "react";
import Patient_register from "./Patient_register";

import { Link } from "react-router-dom";


function Patient_home() {
  return (
    <>
      <h1>Patient Home</h1>
      <Link to="/Patient_login" className="btn btn-danger"> Logout</Link>
    


    </>
  );
}

export default Patient_home;
