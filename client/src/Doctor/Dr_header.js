import React ,  { useEffect }from 'react'
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";
import { Link } from "react-router-dom";


export default function () {
    const [ {DoctorUser} , dispatchUser] = useStateValue()?? [{}, () => {}];
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
        <header id="header" className="fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">

                <div className="logo">
                    <h1><a href="index.html">MediCare</a></h1>
                    <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>
                </div>

                <nav id="navbar" className="navbar">
                    <ul>
                    <li><Link className="nav-link scrollto active" to="/Dr_home">Home</Link></li>
                    <li><Link classname='underline' to="/Dr_Profile">View Profile</Link></li>
                        <li><Link classname='underline' to="/Appointment">Appointment</Link></li>
                        {/* <li><Link classname='underline' to="/P_Appointment">Pending Appointment</Link></li> */}
                        <li><Link classname='underline' to="/R_Appointment">Rejected Appointment</Link> </li>
                        <li><Link classname='underline' to="/C_Appointment">Completed Appointment</Link></li>
                        <li><button type="submit" className="getstarted scrollto" onClick={logoutUser}>Logout</button></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
            
        </header>
    )
}

