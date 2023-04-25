import React, { useEffect , useState } from "react";
import { useNavigate } from "react-router-dom";
function Hos_register() {
  const URL = "/api/hospitalReg";
  const getIdUrl = "/api/hospitalId";
  const [hospital, sethosId] = useState();

  async function receiveID(getIdUrl) {
    try {
      const respones = await fetch(getIdUrl).catch((e) =>
        console.log("Error : ", e)
      );
      const json = await respones.json();
      console.log(respones.status);
      if (respones.status === 200) {
        //Login Success
        sethosId(json.hospital_id);
        console.log("Success");
      } else {
        //Login Invalid
        console.log("Invalid");
      }
    } catch (e) {
      console.log("Error : ", e);
    }
  }

  const [formData, setForm] = useState({});

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

        navigate("/patient_home");
      } else {
        //Login Invalid
        console.log("Invalid");
      }
    } catch (e) {
      console.log("Error : ", e);
    }
  }

  const handleEvent = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

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
   if(fname&&speciality&&rating&&phone&&address&&mail&&password)
   {
    console.log(formData);
    uploadingData(URL, formData);
    
      alert("Login Successful")
   }
   else{
      alert("Login Unsuccessful")
   }

} 
useEffect(() => {
  receiveID(getIdUrl);
  console.log(hospital);
});

  useEffect(() => {
    setForm({
      _id: null,
      h_id: hospital,
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
  }, [hospital]);


  

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
                  Hospital-ID
                </label>
                <input
                  type="text"
                  className="form-control textbox"
                  id="h_id"
                  name="h_id"
                  value={formData.h_id}
                  onChange={handleEvent}
                />
              </div>
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
