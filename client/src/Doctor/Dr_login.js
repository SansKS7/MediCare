import React, { useState ,useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import Header from '../Home/Header';
import { useStateValue } from '../Context/StateProvider'
import { actionTypes } from "../Context/reducer";

function Dr_login() {

  const navigate = useNavigate();
  const URL="/api/doctorLogin/";
  const [ {DoctorUser} , dispatchUser] = useStateValue();
  const [formData, setForm] = useState(
    {
      _id: null,
      d_id: "",
      password: "",
    }
  )

  async function uploadingData(url, data) {
    try{
      const respones=await fetch(url,{
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body:JSON.stringify(data),

      }).catch((e)=>console.log("Error:",e));
      const json=await respones.json();
      console.log(respones.status);
      if(respones.status==200)
      {
        console.log("Success");
        dispatchUser({
          type:actionTypes.SET_DOCTOR,
          DoctorUser:formData.d_id,

        });
        alert("Login Successful!!");
        navigate("/Dr_home");
      }
      else{
        alert("Invalid Login");
        console.log("Invalid");
      }
    }catch(e){
      console.log("Error:",e);
    }
  }
  const handleEvent = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value })
  }
    function handleSubmit(e){
       e.preventDefault()
       uploadingData(URL,formData);
    //   if(formData.d_id === "D101" && formData.password === "123")
    //   {
    //     dispatchUser({
    //       type: actionTypes.SET_DOCTOR,
    //       PatientUser: formData.d_id,
    //     });
    //     navigate("/Dr_home");
    //   }
    //   else
    //   {
    //     alert("Invalid Id/Password");
    //   }
    //   console.log(formData);
   }
    
  useEffect(()=>{
    if(DoctorUser !== null)
    {
      navigate("/Dr_home")
    }
  })
  return (
    <>
      <Header/>
      <div className="main-container">
        <div id='hospital_login'>
          <div className='container'>
            <form className='login' onSubmit={handleSubmit}>
              <fieldset >
                <b className='my-2'> <center><legend>Doctor Login</legend> </center> </b>
                <div className="mb-3">
                  <label for="disabledTextInput" className="form-label">Enter Doctor_ID</label>
                  <input type="text" id="d_id" name="d_id" className="form-control" onChange={handleEvent} />
                </div>

                <div className="mb-3">
                  <label for="disabledTextInput" className="form-label">Enter Password</label>
                  <input type="password" id="password" name="password"  onChange={handleEvent} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary my-2 " >Login</button>

                {/* <center> <b> OR</b> </center>
                <button type="submit" className="btn btn-primary my-2 ">Register</button> */}

              </fieldset>
            </form>

          </div>
          <div className="hero-section-2 col-lg-6 order-1 order-lg-2 hero-img">
            <img src={require('../assets/img/doctor1.png')} className="img1 img-fluid animated" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dr_login
