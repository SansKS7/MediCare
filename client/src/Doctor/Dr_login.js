import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import Header from '../Home/Header'
function Dr_login() {

  const navigate = useNavigate()
  const [formData, setForm] = useState(
    {
      _id: null,
      d_id: "",
      password: "",
    }
  )

  const handleEvent = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Header />
      {console.log(formData)}
      <div className="main-container">
        <div id='hospital_login'>
          <div className='container'>
            <form className='login'>
              <fieldset >
                <b className='my-2'> <center><legend>Doctor Login</legend> </center> </b>
                <div class="mb-3">
                  <label for="disabledTextInput" class="form-label">Enter Doctor_ID</label>
                  <input type="text" id="d_id" name="d_id" class="form-control" onChange={handleEvent} />
                </div>

                <div class="mb-3">
                  <label for="disabledTextInput" class="form-label">Enter Password</label>
                  <input type="password" id="password" name="password" class="form-control" />
                </div>
                <button type="submit" class="btn btn-primary my-2 ">Login</button>

                {/* <center> <b> OR</b> </center>
   <button type="submit" class="btn btn-primary my-2 "onClick={()=>navigate("/dr_register")}>Register</button> */}

              </fieldset>
            </form>

          </div>
          <div className="hero-section-2 col-lg-6 order-1 order-lg-2 hero-img">
            <img src={require('../assets/img/doctor.png')} className="img1 img-fluid animated" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dr_login
