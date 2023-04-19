import React ,  { useEffect }from 'react'
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";
import { Link } from "react-router-dom";


export default function () {
    const [ {DoctorUser} , dispatchUser] = useStateValue();
    const navigate=useNavigate()
  
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
        <header id="header" class="fixed-top d-flex align-items-center">
            <div class="container d-flex align-items-center justify-content-between">

                <div class="logo">
                    <h1><a href="index.html">MediCare</a></h1>

                    <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a>
                </div>

                <nav id="navbar" class="navbar">
                    <ul>
                    <li><Link class="nav-link scrollto active" to="/Home">Home</Link></li>
                        <li><Link class="nav-link scrollto" to="/HospitalP">Hospital</Link></li>
                        <li><Link class="nav-link scrollto " to="/DoctorsP">Doctor</Link></li>
                        <li><Link class="nav-link scrollto" to="/Patient_profile">Profile</Link> </li>
                        <li><Link class="nav-link scrollto active" to="/Contact">View Appointment</Link></li>
                        <li><button type="submit" className="getstarted scrollto" onClick={logoutUser}>Logout</button></li>

                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
            
        </header>
    )
}

