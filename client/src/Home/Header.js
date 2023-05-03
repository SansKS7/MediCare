import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"



export default function () {
    const navigate=useNavigate()

    return (
        <header id="header" className="fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">

                <div className="logo">
                    <h1><Link to="index.html">MediCare</Link></h1>

                    <Link to="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"/></Link>
                </div>
              
  
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><Link className="nav-link scrollto active" to="/Home">Home</Link></li>
                        <li><a className="nav-link scrollto" href="#about">About</a></li>
                        
                        <li><Link className="nav-link scrollto " to="/Doctors">Doctors</Link></li>
                        <li><Link className="nav-link scrollto" to="/Hospitals">Hospitals</Link> </li> 
            
          
                        <li><Link className="nav-link scrollto active" to="/Home">Contact</Link></li>
                        <ul>
              <li className="dropdown underline"><a href="#"><span>Login/Register</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><Link className="nav-link scrollto" to="/Patient_login" >Patient</Link></li>
                  <li><Link className="nav-link scrollto " to="/Dr_login">Doctor</Link></li>
                  <li><Link className="nav-link scrollto" to="/Hos_Login">Hospital</Link> </li>
                </ul>
              </li>
              
            </ul>
                     
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"> </i>
                    
                </nav>

            </div>
        </header>
    )
}

