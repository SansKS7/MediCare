import React, { useState } from 'react'
function Hos_login()     {

  const[ formData ,setForm]=useState(
    {
      _id:null,
      h_id:"",
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
      <b className='my-2'> <center><legend> Login</legend> </center> </b>
    <div className="mb-3">
    <label for="disabledTextInput" class="form-label">Enter Hospital-ID</label>
      <input type="text" id="h_id"  name="h_id"  class="form-control textbox"  onChange={handleEvent}/>
   </div>
   
   <div class="mb-3">
   <label for="disabledTextInput" class="form-label">Enter Password</label>
      <input type="password" id="password" name="password" class="form-control textbox" onChange={handleEvent}/>
   </div>
    <button type="submit" class="btn btn-primary my-2 ">Login</button>
   
   <center> <b> OR</b> </center>
   <button type="submit" class="btn btn-primary my-2 ">Register</button>
    
  </fieldset>
</form>  
      
    </div>
    </div>


</>
  )
}

export default Hos_login
