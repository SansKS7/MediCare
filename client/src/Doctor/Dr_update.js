import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import Hos_header from "../Hospital/Hos_header";
function Dr_register() {

  const navigate = useNavigate()
  const [formData, setForm] = useState({
    _id: null,
    d_id: "",
    h_id: "",
    hospitalName: "",
    name: "",
    speciality: "",
    mail: "",
    phoneNo: "",
    address: "",
    password: "",
    repassword: "",
    experience: "",
    charges: "",
    qualification: "",
  }
  )

  const handleEvent = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value })
  }


  function isfirstName(val) {
    //console.log(val);
    var reg = /^[a-zA-Z\s]+$/;
    if (reg.test(val))
      return true;
    return false;
  }

  function isRating(val) {
    var rate = /^\d{1,4}$/;
    if (rate.test(val))
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

  function isPhno(val) {
    var phoneNo = /^\d{10,10}$/;
    if (phoneNo.test(val))
      return true;
    return false;
  }

  function isMail(val) {
    console.log(val);
    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.test(val))
      return true;
    return false;
  }


  function isPassword(val) {
    console.log(val)

    var regex = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (!regex.test(val)) {
      return false;
    }
    return true;
  }

  function isRePassword(pass, repass) {
    if (pass === repass) return true;
    return false;
  }
  
  function isSpeciality(val) {
    console.log(val)
    var regex=/^[a-zA-Z,-\s]*$/;
     if (!regex.test(val)) {
      return false;
    }
    return true;
  }

  function onFormSubmit(e) {
    e.preventDefault();
    //console.log(formData)

    var hname = isfirstName(formData.hospitalName)
    var fname = isfirstName(formData.name);
    var speciality = isAddress(formData.speciality);
    var mail = isMail(formData.mail);
    var phone = isPhno(formData.phoneNo);
    var address = isAddress(formData.address);
    var password = isPassword(formData.password);
    var repassword = isRePassword(formData.password, formData.repassword);
    var exp = isRating(formData.experience);
    var charges = isRating(formData.charges);
    var qualification = isAddress(formData.qualification);
    if (fname && speciality && mail && phone && address && exp && password && repassword && charges && qualification && hname) {
      alert("Login Successful")
    }
    else {
      alert("Login Unsuccessful")

    }


  }
  return (
    <>
      {console.log(formData)}
      <Hos_header/>
      <div className="main-container">
       
        <div id="doctor_register">
          <div className="container">
            <form className="register">
              <fieldset>
                <b className="my-3">
                  {" "}
                  <center>
                    <legend> Update Doctor Here.</legend>{" "}
                  </center>{" "}
                </b>

                <div className="displayFlex">
                  <div className="mb-3">
                    <label for="disabledTextInput" className="form-label">Enter Doctor-ID</label>
                    <input
                      type="text"
                      className="form-control textbox"
                      value={"D101"}
                      disabled
                      id="d_id"
                      name="d_id"
                      onChange={handleEvent}
                    />
                  </div>

                  <div className="mb-3">
                    <label for="disabledTextInput" className="form-label">Enter Hospital-ID</label>
                    <input
                      type="text"
                      className="form-control textbox"
                      value={"H101"}
                      disabled
                     
                      id="h_id"
                      onChange={handleEvent}
                      name="h_id"
                    />
                  </div>
                </div>

                <div className="displayFlex">
                  <div className="mb-3">
                    <label for="disabledTextInput" className="form-label">Enter Hospital Name</label>
                    <input
                      type="text"
                      className="form-control textbox"

                      id="hospitalName"
                      onChange={handleEvent}
                      name="hospitalName"
                    />
                  </div>

                  <div className="mb-3">
                    <label for="disabledTextInput" className="form-label">Enter Doctor Name</label>
                    <input
                      type="text"
                      className="form-control textbox"

                      id="name"
                      onChange={handleEvent}
                      name="name"
                    />
                  </div>
                </div>

                <div className="displayFlex">
                  <div className="mb-3">
                    <label for="disabledTextInput" className="form-label">Enter Speciality</label>
                    <input
                      type="text"
                      className="form-control textbox"

                      id="speciality"
                      name="speciality"
                      onChange={handleEvent}
                    />
                  </div>

                  <div className="mb-3">
                    <label for="disabledTextInput" className="form-label">Enter Mail-ID</label>
                    <input
                      type="text"
                      className="form-control textbox"

                      id="mail"
                      onChange={handleEvent}
                      name="mail"
                    />
                  </div>
                </div>

                <div className="displayFlex">
                  <div className="mb-3">
                    <label for="disabledTextInput" className="form-label">Enter Phone No</label>
                    <input
                      type="text"
                      className="form-control textbox"
                      onChange={handleEvent}
                      id="phoneNo"
                      name="phoneNo"
                    />
                  </div>

                  <div className="mb-3">
                    <label for="disabledTextInput" className="form-label">Enter Address</label>
                    <input
                      type="text"
                      className="form-control textbox"

                      onChange={handleEvent}
                      id="address"
                      name="address"
                    />
                  </div>

                </div>
                <div className="displayFlex">

                  <div className="mb-3">
                    <label for="disabledTextInput" className="form-label">Enter Experience</label>
                    <input
                      type="text"
                      className="form-control textbox"

                      onChange={handleEvent}
                      id="experience"
                      name="experience"
                    />
                  </div>


                  <div className="mb-3">
                    <label for="disabledTextInput" className="form-label">Enter Charges</label>
                    <input
                      type="text"
                      className="form-control textbox"
                      onChange={handleEvent}

                      id="charges"
                      name="charges"
                    />
                  </div>
                </div>

                <div className="displayFlex">
                  <div className="mb-3">
                    <label for="disabledTextInput" className="form-label">Enter Password</label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control textbox"
                      onChange={handleEvent}

                    />
                  </div>

                  <div className="mb-3">
                    <label for="disabledTextInput" className="form-label">Retype Password</label>
                    <input
                      type="password"
                      id="repassword"
                      name="repassword"
                      className="form-control textbox"
                      onChange={handleEvent}

                    />
                  </div>

                </div>


                <div className="mb-3">
                  <label for="disabledTextInput" className="form-label">Enter Qualification</label>
                  <input
                    type="text"
                    onChange={handleEvent}
                    className="form-control textbox"

                    id="qualification"
                    name="qualification"
                  />
                </div>
                <button type="submit" className="displayFlex-2  textalign-center btn btn-primary my-2 " onClick={onFormSubmit}>
                  Update
                </button>

                {/* <center>
                {" "}
                <b> OR</b>{" "}
              </center>

              <button type="submit" className="displayFlex-2  textalign-center btn btn-primary my-2  "
              onClick={()=>navigate("/dr_login")}>
                Login
              </button> */}
              </fieldset>
            </form>
          </div>
        </div>
        <div className="hero-section-2 col-lg-6 order-1 order-lg-2 hero-img">
          <img src={require('../assets/img/doctor.png')} className="img1 img-fluid animated" alt="" />
        </div>
        </div>
      </>
      );
}

      export default Dr_register;
