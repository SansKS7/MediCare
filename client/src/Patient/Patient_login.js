import React ,{useState} from 'react'
import { useNavigate } from "react-router-dom"
function Patient_login()     {

  const navigate=useNavigate()

  const[ formData ,setForm]=useState(
    {
      _id:null,
      p_id:"",
      password:"",
    }
)

  const handleEvent = (e) => {
    setForm({...formData, [e.target.name]: e.target.value })
  }


  return (
<>
    {
      console.log(formData)
    }
    <div id='hospital_login'>
    <div className='container'>
     <form className='login'>
  <fieldset >
      <b className='my-2'> <center><legend>Patient Login</legend> </center> </b>
    <div class="mb-3">
    <label for="disabledTextInput" class="form-label">Enter Patient-ID</label>
      <input type="text" id="p_id"  name="p_id"  class="form-control"  onChange={handleEvent}/>
   </div>
  
   <div class="mb-3">
   <label for="disabledTextInput" class="form-label">Password</label>
      <input type="password" id="password" name="password" class="form-control" onChange={handleEvent}/>
   </div>
    <button type="submit" class="btn btn-primary my-2 ">Login</button>
   
   <center> <b> OR</b> </center>
   <button type="submit" class="btn btn-primary my-2 " onClick={()=>navigate("/Patient_register")}>Register</button>
    
  </fieldset>
</form>  
      
    </div>
    </div>
 
</>
  
  )
}

export default Patient_login
