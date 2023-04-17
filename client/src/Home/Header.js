import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"



export default function () {
    const navigate=useNavigate()

    return (
        <header id="header" class="fixed-top d-flex align-items-center">
            <div class="container d-flex align-items-center justify-content-between">

                <div class="logo">
                    <h1><Link to="index.html">MediCare</Link></h1>

                    <Link to="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"/></Link>
                </div>

                <nav id="navbar" class="navbar">
                    <ul>
                        <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a class="nav-link scrollto" href="#about">About</a></li>
                        <li><Link class="nav-link scrollto" to="/Patient_login" >Patient</Link></li>
                        <li><Link class="nav-link scrollto " to="/Dr_login">Doctor</Link></li>
                        <li><Link class="nav-link scrollto" to="/Hos_login">Hospital</Link> </li>
                        <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
                        <li><Link class="getstarted scrollto" to="#about">Book Appointment</Link></li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"> </i>
                </nav>

            </div>
        </header>
    )
}

