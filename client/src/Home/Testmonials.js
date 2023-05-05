import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Testimonials extends Component {
  render() {
    return (
       
      <section id="testimonial" className="testimonials">
      <div id="Testimonials" className="testimonials">
      <div className="section-title" data-aos="fade-up">
                    <h2>Testimonials</h2>
                </div>

      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
      
        
        <div>
        <img src={require('../assets/img/user.png')} className="img-fluid animated" alt="" />
         
          <div className="myCarousel">
            <h3>Prajwal Tribhuvan</h3>
            <h4>Patient</h4>
            <p>
            The doctors at this medical website are some of the best I've ever encountered. They truly care about 
            their patients and take the time to listen and understand their needs.
             I feel lucky to have found such a fantastic medical practice.
            </p>
          </div>
        </div>

        <div>
        <img src={require('../assets/img/user.png')} className="img-fluid animated" alt="" />
         
          <div className="myCarousel">
            <h3>Tanmay Suryawanshi</h3>
            <h4>Patient</h4>
            <p>
            I have never had a bad experience with this medical website. The doctors are knowledgeable and compassionate,
             the staff is friendly and efficient, and the facilities are clean and modern. 
            I recommend this practice to anyone in need of medical care.
            </p>
          </div>
        </div>

        <div>
        <img src={require('../assets/img/user.png')} className="img-fluid animated" alt="" />
       
          <div className="myCarousel">
            <h3>Pranjali Shah</h3>
            <h4>Patient</h4>
            <p>
            I've been using this website for consultations with doctors, and it has been a game-changer.
             The process is simple, and I've received quality care from the comfort of my own home. 
            </p>
          </div>
        </div>
       
      </Carousel>

      </div>
      </section>
    );
  }
}
