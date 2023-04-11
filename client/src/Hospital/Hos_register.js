import React ,{useState} from 'react'
function Hos_register()     {

   const [ formData , setForm ] = useState({
         _id:null,
         h_id:"",
         name:"",
         speciality:"",
         mail:"",
         phoneNo:"",
         address:"",
         password:"",
         repassword:"",
         rating:"",
         h_img:"",
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
    
    <div id='hospital_register'>
    <div className='container'>
     <form className='register'>
  <fieldset >
      <b className='my-3'> <center><legend> Register Your Hospital Here .</legend> </center> </b>

      <div class="mb-3">
      <input type="text" class="form-control" placeholder="Enter Your Hospital Name"  id="hospitalName" name='hospitalName' onChange={handleEvent} />
      </div>

      
        <div class="mb-3">
            <input type="text"  class="form-control" placeholder="Enter Speciality Of Your Hospital" id="speciality" name='speciality'  onChange={handleEvent}/>
        </div>

        <div class="mb-3">
        <input type="text"  class="form-control" placeholder="Enter Email Of Your Hospital" id='mail' name='mail'  onChange={handleEvent}/>
        </div>

        
        <div class="mb-3">
            <input type="text"  class="form-control" placeholder="Enter Hospital Phone Number" id='phoneNo' name='phoneNo'  onChange={handleEvent}/>
        </div>
   

      <div class="mb-3">
      <input type="text"  id='address' name="address" class="form-control" placeholder="Enter Your Hospital Address"  onChange={handleEvent}/>
      </div>
   
      
   <div class="mb-3">
      <input type="text"  class="form-control" placeholder="Enter Rating Of Your Hospital" id='rating' name='rating'  onChange={handleEvent}/>
   </div>
   
   
   <div class="mb-3">
      <input type="password" id="password" name='password'  class="form-control" placeholder=" Enter Password"  onChange={handleEvent}/>
   </div>
   
   <div class="mb-3">
      <input type="password" id="repassword" name='repassword'  class="form-control" placeholder=" Retype Password"  onChange={handleEvent}/>
   </div>

   <div class="mb-3">
      <input type="image"  class="form-control" placeholder="Upload Hospital Image" id='h_img' name='h_img'  onChange={handleEvent}/>
   </div>
   
   {/* <div class="mb-3">
   <input type="image" id="hospital_img" name="hospital_image" src="submit.gif" alt="Hospital Image"  width="70" height="20"/>

   </div> */}

  


    <button type="submit" class="btn btn-primary my-2 ">Register</button> 
   
   
   <center> <b> OR</b> </center>
   
   <button type="submit" class="btn btn-primary my-2 ">Login</button>
    
  </fieldset>
</form>  
      
    </div>
    </div>
    </>

  )
}

export default Hos_register
