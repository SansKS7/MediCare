import React, { useEffect } from "react";
import Patient_register from "./Patient_register";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";
import { Link } from "react-router-dom";


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
      
      

      <h1>Patient Home</h1>
      
      <button type="submit" class="btn btn-primary my-2 " onClick={logoutUser}>Logout</button>

      <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
    <img src={require('../assets/img/user.png')} className="img-fluid animated" alt="" />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
    


    </>
  );
}

export default Patient_home;

