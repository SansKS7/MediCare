import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import Header from '../Home/Header'
function Patient_login() {

  const navigate = useNavigate()

  const [formData, setForm] = useState(
    {
      _id: null,
      p_id: "",
      password: "",
    }
  )

  const handleEvent = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value })
  }


  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData);
  }
  return (
    <>
      <Header />
      {
        console.log(formData)
      }
      <div className='main-container'>
        <div id='patient_login'>
          <div className='container'>
            <form className='login' onSubmit={handleSubmit}>
              <fieldset>
                <b className='my-2'> <center><legend>Patient Login</legend> </center> </b>
                <div class="mb-3">
                  <label for="disabledTextInput" class="form-label">Enter Patient-ID</label>
                  <input type="text" id="p_id" name="p_id" class="form-control" onChange={handleEvent} />
                </div>

                <div class="mb-3">
                  <label for="disabledTextInput" class="form-label">Password</label>
                  <input type="password" id="password" name="password" class="form-control" onChange={handleEvent} />
                </div>
                <button type="submit" class="btn btn-primary my-2 " onClick={() => navigate("/Patient_home")}>Login</button>

                <center> <b> OR</b> </center>
                <button type="submit" class="btn btn-primary my-2 " onClick={() => navigate("/Patient_register")}>Register</button>

              </fieldset>
            </form>
            <div className="hero-section-2 col-lg-6 order-1 order-lg-2 hero-img">
              <img src={require('../assets/img/doctor.png')} className="img1 img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Patient_login
