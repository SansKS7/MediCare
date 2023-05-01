import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
export default function () {
    const navigate=useNavigate()
    return (
     
        <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <div className="row">            
                        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                            {/* <h2 data-aos="fade-up" data-aos-delay="400">Welcome Nandini Achugatla To ..</h2>
                             */}
                            <h1 data-aos="fade-up">MediCare</h1>
                            <h2 data-aos="fade-up" data-aos-delay="400">Care A Million</h2>
                            
                            <p><h9 data-aos="fade-up">We understand healthcare goes beyond signs, symptoms, diagnosis, and 
                                        treatment. It’s about the deep connection between doctors and patients that leads to 
                                        continuous care and sustained, better outcomes.</h9></p>
                            <div data-aos="fade-up" data-aos-delay="800">
                                <Link to="/Patient_login" className="btn btn-primary">Book Appointment</Link>
                                
                            </div>
                        </div>


                        <div className=" hero-section-2 col-lg-6 order-1 order-lg-2 hero-img" data-aos="fade-left" data-aos-delay="200">
                            <img src={require('../assets/img/home.png')} className="img-fluid animated" alt="" />
                        </div>
                </div>
            </div>
        </section>

    )
}