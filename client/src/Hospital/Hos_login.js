import React from 'react'
function Hos_login()     {
  return (
    <div id='hospital_login'>
    <div className='container'>
     <form className='login'>
  <fieldset >
      <b className='my-2'> <center><legend> Login</legend> </center> </b>
    <div class="mb-3">
      <input type="text" id="" name='email'  class="form-control" placeholder="Enter Email"/>
   </div>
   
   <div class="mb-3">
      <input type="password" id="" name='password'  class="form-control" placeholder=" Enter Password"/>
   </div>
   <button type="submit" class="btn btn-primary my-2 ">Login</button>
   
   <center> <b> OR</b> </center>
   <button type="submit" class="btn btn-primary my-2 ">Register</button>
    
  </fieldset>
</form>  
      
    </div>
    </div>
  )
}

export default Hos_login
