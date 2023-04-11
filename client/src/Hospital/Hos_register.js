import React, { useState } from 'react'
function Hos_register() {

   const [formData, setForm] = useState({
      _id: null,
      h_id: "",
      name: "",
      speciality: "",
      mail: "",
      phoneNo: "",
      address: "",
      password: "",
      repassword: "",
      rating: "",
      h_img: "",
   }
   )

   const handleEvent = (e) => {
      setForm({ ...formData, [e.target.name]: e.target.value })
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
                     <label for="disabledTextInput" class="form-label">Enter Name</label>
                        <input type="text" class="form-control textbox" id="hospitalName" name='hospitalName' onChange={handleEvent} />
                     </div>

                     <div className="displayFlex">
                     <div class="mb-3">
                     <label for="disabledTextInput" class="form-label">Enter Speciality</label>
                        <input type="text" class="form-control textbox"  id="speciality" name='speciality' onChange={handleEvent} />
                     </div>

                     <div class="mb-3">
                     <label for="disabledTextInput" class="form-label">Enter Mail-ID</label>
                        <input type="text" class="form-control textbox"  id='mail' name='mail' onChange={handleEvent} />
                     </div>
                     </div>

                     <div className="displayFlex">
                     <div class="mb-3">
                     <label for="disabledTextInput" class="form-label">Enter Phone No</label>
                        <input type="text" class="form-control textbox"  id='phoneNo' name='phoneNo' onChange={handleEvent} />
                     </div>


                    


                     <div class="mb-3">
                     <label for="disabledTextInput" class="form-label">Enter Rating</label>
                        <input type="text" class="form-control textbox" id='rating' name='rating' onChange={handleEvent} />
                     </div>

                     </div>

                     <div class="mb-3">
                     <label for="disabledTextInput" class="form-label">Enter Address</label>
                        <input type="text" id='address' name="address" class="form-control textbox" onChange={handleEvent} />
                     </div>

                     <div className='displayFlex'>
                     <div class="mb-3">
                     <label for="disabledTextInput" class="form-label">Enter Password</label>
                        <input type="password" id="password" name='password' class="form-control textbox" onChange={handleEvent} />
                     </div>

                     <div class="mb-3">
                     <label for="disabledTextInput" class="form-label">Retype Password</label>
                        <input type="password" id="repassword" name='repassword' class="form-control textbox" onChange={handleEvent} />
                     </div>
                     </div>

                     <div class="mb-3">
                     <label for="disabledTextInput" class="form-label">Upload Image</label>
                        <input type="image" class="form-control textbox" id='h_img' name='h_img' onChange={handleEvent} />
                     </div>

                     {/* <div class="mb-3">
   <input type="image" id="hospital_img" name="hospital_image" src="submit.gif" alt="Hospital Image"  width="70" height="20"/>

   </div> */}




                     <button type="submit" class="displayFlex-2  textalign-center btn btn-primary my-2  ">Register</button>


                     <center> <b> OR</b> </center>

                     <button type="submit" class="displayFlex-2  textalign-center btn btn-primary my-2  ">Login</button>

                  </fieldset>
               </form>

            </div>
         </div>
      </>

   )
}

export default Hos_register
