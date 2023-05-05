import React from 'react'
export default function () {

    return (
        <section id="counts" className="counts">
<div className="container">

  <div className="row">
    <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start" data-aos="fade-right" data-aos-delay="150">
      <img src={require('../assets/img/count.png')} alt="" className="img-fluid"/>
    </div>

    <div className="col-xl-7 d-flex align-items-stretch pt-4 pt-xl-0" data-aos="fade-left" data-aos-delay="300">
      <div className="content d-flex flex-column justify-content-center">
        <div className="row">
          <div className="col-md-6 d-md-flex align-items-md-stretch">
            <div className="count-box">
              <i className="bi bi-building"></i>
              <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>MediCare</strong> Care a Billion</p>
            </div>
          </div>

          <div className="col-md-6 d-md-flex align-items-md-stretch">
          <div className="count-box">
              <i className="bi bi-building"></i>
              <span data-purecounter-start="0" data-purecounter-end="65" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Happy Clients</strong>Number of patients cured through website</p>
            </div>
            
          </div>

          <div className="col-md-6 d-md-flex align-items-md-stretch">
          <div className="count-box">
              <i className="bi bi-journal-richtext"></i>
              <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Doctors</strong> Number Of Doctors enrolled on website.</p>
            </div>
           
          </div>

          <div className="col-md-6 d-md-flex align-items-md-stretch">
          <div className="count-box">
              <i className="bi bi-journal-richtext"></i>
              <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" className="purecounter"></span>
              <p><strong>Hospitals</strong> Number of Hospitals registered on website.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</section>
    )
}

