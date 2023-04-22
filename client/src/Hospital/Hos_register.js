import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Hos_register() {
  const navigate = useNavigate();

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
  });

  const handleEvent = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

  function isfirstName(val) {
    //console.log(val);
     var reg=/^[a-zA-Z\s]+$/;
     if(reg.test(val))
     return true;
     return false;
  }

  function isRating(val)
  {
    var rate = /^\d{1,2}$/;
    if(rate.test(val))
    return true;
    return false;

  }
  function isAddress(val) {
    console.log(val);
    var reg = /^[a-zA-Z0-9-\s+/b+(/,@)]+$/;
    // var reg=/^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/

    if (reg.test(val))
      return true;
    return false;
  }



  function isPhno(val)
  {
   var phoneNo = /^\d{10,10}$/;
   if(phoneNo.test(val))
   return true;
   return false;
  }

  function isMail(val){
   console.log(val);
   var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(mail.test(val))
   return true;
   return false;
  }

  
function isPassword(val) {
   console.log(val)
   
   var regex = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
   if(!regex.test(val)){
     return false;
   }
   return true;
 }

 function isRePassword(pass,repass) 
   {
      if(pass===repass)return true;
      return false;
   }

  
   function isSpeciality(val) {
    console.log(val)
    var regex=/^[a-zA-Z.-\s]*$/;
     if (!regex.test(val)) {
      return false;
    }
    return true;
  }
 
function onFormSubmit(e)
{
   e.preventDefault();
   //console.log(formData)
   var fname=isfirstName(formData.name);
   //console.log(fname)
    var speciality=isAddress(formData.speciality);
    //console.log(speciality)
   var rating=isRating(formData.rating);
  //console.log(rating)
   var phone=isPhno(formData.phoneNo);
   //console.log(phone)
    var address=isAddress(formData.address);
   // console.log(address)
   var mail=isMail(formData.mail);
  // console.log(mail)
  var password=isPassword(formData.password);
  //console.log(password)
    var repassword=isRePassword(formData.password,formData.repassword);
    //console.log(repassword)
   if(fname&&speciality&&rating&&phone&&address&&mail&&password&&repassword)
   {
      alert("Login Successful")
   }
   else{
      alert("Login Unsuccessful")
      
   }
   
  
}
  return (
    <>
  
      <div id="hospital_register">
        <div className="container">
          <form className="register">
            <fieldset>
              <b className="my-3">
                {" "}
                <center>
                  <legend> Register Your Hospital Here .</legend>{" "}
                </center>{" "}
              </b>

              <div className="mb-3">
                <label for="disabledTextInput" className="form-label">
                  Enter Name
                </label>
                <input
                  type="text"
                  className="form-control textbox"
                  id="name"
                  name="name"
                  onChange={handleEvent}
                />
              </div>

              <div className="displayFlex">
                <div className="mb-3">
                  <label for="disabledTextInput" className="form-label">
                    Enter Speciality
                  </label>
                  <input
                    type="text"
                    className="form-control textbox"
                    id="speciality"
                    name="speciality"
                    onChange={handleEvent}
                  />
                </div>

                <div className="mb-3">
                  <label for="disabledTextInput" className="form-label">
                    Enter Mail-ID
                  </label>
                  <input
                    type="text"
                    className="form-control textbox"
                    id="mail"
                    name="mail"
                    onChange={handleEvent}
                  />
                </div>
              </div>

              <div className="displayFlex">
                <div className="mb-3">
                  <label for="disabledTextInput" className="form-label">
                    Enter Phone No
                  </label>
                  <input
                    type="text"
                    className="form-control textbox"
                    id="phoneNo"
                    name="phoneNo"
                    onChange={handleEvent}
                  />
                </div>

                <div className="mb-3">
                  <label for="disabledTextInput" className="form-label">
                    Enter Rating
                  </label>
                  <input
                    type="text"
                    className="form-control textbox"
                    id="rating"
                    name="rating"
                    onChange={handleEvent}
                  />
                </div>
              </div>

              <div className="mb-3">
                <label for="disabledTextInput" className="form-label">
                  Enter Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="form-control textbox"
                  onChange={handleEvent}
                />
              </div>

              <div className="displayFlex">
                <div className="mb-3">
                  <label for="disabledTextInput" className="form-label">
                    Enter Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control textbox"
                    onChange={handleEvent}
                  />
                </div>

                <div className="mb-3">
                  <label for="disabledTextInput" className="form-label">
                    Retype Password
                  </label>
                  <input
                    type="password"
                    id="repassword"
                    name="repassword"
                    className="form-control textbox"
                    onChange={handleEvent}
                  />
                </div>
              </div>
              {/* 
                     <div className="mb-3">
                     <label for="disabledTextInput" className="form-label">Upload Image</label>
                        <input type="image" className="form-control textbox" id='h_img' name='h_img' onChange={handleEvent} />
                     </div> */}

              {/* <div className="mb-3">
   <input type="image" id="hospital_img" name="hospital_image" src="submit.gif" alt="Hospital Image"  width="70" height="20"/>

   </div> */}

              <button
                className="displayFlex-2  textalign-center btn btn-primary my-2  "
                onClick={onFormSubmit}
              >
                Register
              </button>

              <center>
                {" "}
                <b> OR</b>{" "}
              </center>

              <button
                type="submit"
                className="displayFlex-2  textalign-center btn btn-primary my-2  "
                onClick={() => navigate("/Hos_login")}
              >
                Login
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}

export default Hos_register;
