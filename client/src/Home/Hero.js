import React from 'react'
export default function () {

    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <div className="row">            
                        <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">

                            <h1 data-aos="fade-up">MediCare</h1>
                            <h2 data-aos="fade-up" data-aos-delay="400">Care A Billion</h2>
                            <div data-aos="fade-up" data-aos-delay="800">
                                <a href="#about" className="btn-get-started scrollto">Book Appointment</a>
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