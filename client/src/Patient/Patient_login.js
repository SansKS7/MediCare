import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Header from '../Home/Header';
import { useStateValue } from "../Context/StateProvider";
import { actionTypes } from "../Context/reducer";

function Patient_login() {
  const navigate = useNavigate();
  const URL = "/api/patientLogin/";
  const doctorIdUrl = "/api/doctorId"
  //const doctorid;

  const [ {PatientUser} , dispatchUser] = useStateValue() ?? [{}, () => {}];
  const [formData, setForm] = useState(
    {
      _id: null,
      p_id: "",
      password: "",
    }
  )

  async function uploadingData(url, data) {
    try {
     
      const respones = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).catch((e) => console.log("Error : ", e));
      const json = await respones.json();
      console.log(respones.status);
      if (respones.status === 200) {
        
        //Login Success
        console.log("Success");
        dispatchUser({
              type: actionTypes.SET_PATIENT,
              PatientUser: formData.p_id,
            });
            alert("Login Successful!!")
            navigate("/patient_home");

      } else {
        //Login Invalid
        alert("Invalid Login")
        console.log("Invalid");
      }
      
    } catch (e) {
      console.log("Error : ", e);
    }
  }



  const handleEvent = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value })
  }


  function handleSubmit(e) {
    e.preventDefault();
    uploadingData(URL,formData);
  }

  useEffect(()=>{
    if(PatientUser !== null)
    {
      navigate("/patient_home")
    }
  },[])

  return (
    <>
      <Header />
      <div className='main-container'>
        <div id='patient_login'>
          <div className='container'>
            <form className='login' id="login" name="login" onSubmit={handleSubmit}>
              <fieldset>
                <b className='my-2'> <center><legend>Patient Login</legend> </center> </b>
                <div className="mb-3">
                  <label htmlFor="p_id" className="form-label">Enter Patient-ID</label>
                  <input type="text" id="p_id" name="p_id"  placeholder='ID' class="form-control" onChange={handleEvent} />
                </div>

                <div class="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" id="password" name="password" placeholder='Password' class="form-control" onChange={handleEvent} />
                </div>
                <button type="submit" class="btn btn-primary my-2 " name="Submit">Login</button>

                <center> <b> No account Register Here..</b> </center>
                <button type="submit" className="btn btn-primary my-2 " onClick={() => navigate("/Patient_register")}>Register</button>

              </fieldset>
            </form>
            <div className="hero-section-2 col-lg-6 order-1 order-lg-2 hero-img">
              <img src={require('../assets/img/patient1.png')} className="img1 img-fluid animated" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Patient_login
