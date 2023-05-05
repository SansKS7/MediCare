import React, { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Header from '../Home/Header'
import { useStateValue } from '../Context/StateProvider';
import { actionTypes } from '../Context/reducer';


function Hos_login() {

  const navigate = useNavigate()

  const URL="api/hospitalLogin";
  const [ {HospitalUser} , dispatchUser] = useStateValue()?? [{}, () => {}];
  const [formData, setForm] = useState(
    {
      _id: null,
      h_id: "",
      password: "",
    }
  )
  async function uploadingData(url,data){
    try{
      const respones=await fetch(url,{
        method:"POST",
        headers:{
          "Content-Type": "application/json",

        },
        body: JSON.stringify(data),

      }).catch((e)=>console.log("Error ",e));
      const json = await respones.json();
      console.log(respones.status);
      if(respones.status==200){
        console.log("Success")
        dispatchUser({
          type:actionTypes.SET_HOSPITAL,
          HospitalUser:formData.h_id,
        
        });
        alert("Login successful")
        navigate("/Hos_home");
        
      }
      else{
        console.log("Invalid Login");
        alert("Invalid Login");
      }
    }catch(e){
      console.log("Error",e);
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
    if(HospitalUser!==null)
    {
      navigate("/Hos_home")
    }
  },[])

  


  return (

    <>
      <Header />
    <div className='main-container'>
      <div id='hospital_login'>
        <div className='container'>
          <form className='login' onSubmit={handleSubmit}>
            <fieldset >
              <b className='my-2'> <center><legend>Hospital Login</legend> </center> </b>
              <div className="mb-3">
                <label  id="hospital-id-label" className="form-label">Enter Hospital-ID</label>
                <input type="text" aria-labelledby="hospital-id-label"  id="h_id" name="h_id" className="form-control textbox" onChange={handleEvent} />
              </div>

              <div className="mb-3">
                <label  id="hospital-password-label" htmlFor="password" className="form-label">Enter Password</label>
                <input type="password" id="password" name="password" aria-labelledby="hospital-password-label" className="form-control textbox" onChange={handleEvent} />
              </div>
              <button type="submit"  className="btn btn-primary my-2">Login</button>
               <center>   Register Your Hospital Here </center>  
              <button type="submit"  className="btn btn-primary my-2" onClick={()=>{navigate("/Hos_register")}}>Register</button>

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

export default Hos_login
