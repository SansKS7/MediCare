import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function () {
    const navigate = useNavigate()
    return (
        <header id="header" class="fixed-top d-flex align-items-center">
            <div class="container d-flex align-items-center justify-content-between">
                <div class="logo">
                    <h1><a href="index.html">MediCare</a></h1>
                    <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a>
                </div>
                <nav id="navbar" class="navbar">
                    <ul>
                        <li><Link to={"/Dr_register"} className='underline'>Add New Doctor</Link></li>
                        <li><Link to={"/Dr_update"} className='underline'>Update Doctor Info</Link></li>
                        <li><a class="nav-link scrollto" href="#services">Delete Existing Doctor </a></li>
                        <li><Link to={"/Home"} className='underline'>Logout</Link></li>
                    
                        {/* <button type="submit" class="btn btn-primary my-1 " onClick={()=>navigate("/Home")}>Logout</button> */}
                        


                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </header>
    )
}

