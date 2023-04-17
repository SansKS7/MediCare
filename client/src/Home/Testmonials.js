import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Testimonials extends Component {
  render() {
    return (
       
      <section id="testimonial" className="testimonials">
      <div id="Testimonials" className="testimonials">
      <div class="section-title" data-aos="fade-up">
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
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
        <img src={require('../assets/img/user.png')} className="img-fluid animated" alt="" />
         
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
        <img src={require('../assets/img/user.png')} className="img-fluid animated" alt="" />
       
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
       
      </Carousel>

      </div>
      </section>
    );
  }
}
