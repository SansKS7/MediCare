import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Hos_header from "../Hospital/Hos_header";
import { useStateValue } from "../Context/StateProvider";
import { actionTypes } from "../Context/reducer";

function Dr_register() {
  const navigate = useNavigate();

  const URL = "/api/addDoctor";
  const getIdUrl = "/api/doctorId";

  const [doctor, setdocId] = useState();
  const [{ HospitalUser }, dispatchUser] = useStateValue() ?? [{}, () => {}];

  async function receiveID(getIdUrl) {
    try {
      const respones = await fetch(getIdUrl).catch((e) =>
        console.log("Error : ", e)
      );
      const json = await respones.json();
      console.log(respones.status);
      if (respones.status === 200) {
        //Login Success
        setdocId(json.doctor_id);
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

        navigate("/Hos_Home");
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

  function isfirstName(val) {
    //console.log(val);
    var reg = /^[a-zA-Z\s]+$/;
    if (reg.test(val)) return true;
    return false;
  }

  function isRating(val) {
    var rate = /^\d{1,4}$/;
    if (rate.test(val)) return true;
    return false;
  }

  function isAddress(val) {
    console.log(val);
    var reg = /^[a-zA-Z0-9-\s+/b+(/,@)]+$/;
    // var reg=/^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/

    if (reg.test(val)) return true;
    return false;
  }

  function isPhno(val) {
    var phoneNo = /^\d{10,10}$/;
    if (phoneNo.test(val)) return true;
    return false;
  }

  function isMail(val) {
    console.log(val);
    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (mail.test(val)) return true;
    return false;
  }

  function isPassword(val) {
    console.log(val);

    var regex = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (!regex.test(val)) {
      return false;
    }
    return true;
  }

  function isSpeciality(val) {
    console.log(val);
    var regex = /^[a-zA-Z.-\s]*$/;
    if (!regex.test(val)) {
      return false;
    }
    return true;
  }

  function isRePassword(pass, repass) {
    if (pass === repass) return true;
    return false;
  }
  function onFormSubmit(e) {
    e.preventDefault();
    //console.log(formData)

    var hname = isfirstName(formData.hospitalName);
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
    if (
      fname &&
      speciality &&
      mail &&
      phone &&
      address &&
      exp &&
      password &&
      charges &&
      qualification
    ) {
      uploadingData(URL, formData);
      alert("Register Successful");
    } else {
      alert("Register Unsuccessful");
    }
  }

  useEffect(() => {
    receiveID(getIdUrl);
  });

  useEffect(() => {
    setForm({
      _id: null,
      d_id: doctor,
      h_id: HospitalUser,
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
    });
  }, [doctor]);

  return (
    <>
      {console.log(formData)}
      <Hos_header />
      <div className="main-container">
        <div id="doctor_register">
          <div className="container">
            <form className="register">
              <fieldset>
                <b className="my-3">
                  <center>
                    <legend> Register Doctor Here.</legend>
                  </center>
                </b>

                <div className="displayFlex">
                  <div className="mb-3">
                    <label
                      htmlFor="d_id"
                      className="form-label"
                      id="d_id_label"
                    >
                      Enter Doctor-ID
                    </label>
                    <input
                      type="text"
                      className="form-control textbox"
                      value={formData.d_id}
                      disabled
                      id="d_id"
                      name="d_id"
                      onChange={handleEvent}
                      aria-labelledby="d_id_label"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="h_id"
                      className="form-label"
                      id="h_id_label"
                    >
                      Enter Hospital-ID
                    </label>
                    <input
                      type="text"
                      className="form-control textbox"
                      value={formData.h_id}
                      disabled
                      id="h_id"
                      onChange={handleEvent}
                      name="h_id"
                      aria-labelledby="h_id_label"
                    />
                  </div>
                </div>

                <div className="displayFlex">
                  <div className="mb-3">
                    <label
                      htmlFor="qualification"
                      className="form-label"
                      id="qualification_label"
                    >
                      Enter Qualification
                    </label>
                    <input
                      type="text"
                      className="form-control textbox"
                      id="qualification"
                      onChange={handleEvent}
                      name="qualification"
                      aria-labelledby="qualification_label"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="name"
                      className="form-label"
                      id="name_label"
                    >
                      Enter Doctor Name
                    </label>
                    <input
                      type="text"
                      className="form-control textbox"
                      id="name"
                      onChange={handleEvent}
                      name="name"
                      aria-labelledby="name_label"
                    />
                  </div>
                </div>

                <div className="displayFlex">
                  <div className="mb-3">
                    <label
                      htmlFor="speciality"
                      className="form-label"
                      id="speciality_label"
                    >
                      Enter Speciality
                    </label>
                    <input
                      type="text"
                      className="form-control textbox"
                      id="speciality"
                      name="speciality"
                      onChange={handleEvent}
                      aria-labelledby="speciality_label"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="mail"
                      className="form-label"
                      id="mail_label"
                    >
                      Enter Mail-ID
                    </label>
                    <input
                      type="text"
                      className="form-control textbox"
                      id="mail"
                      onChange={handleEvent}
                      name="mail"
                      aria-labelledby="mail_label"
                    />
                  </div>
                </div>

                <div className="displayFlex">
                  <div className="mb-3">
                    <label
                      id="phoneNoLabel"
                      for="phoneNo"
                      className="form-label"
                    >
                      Enter Phone No
                    </label>
                    <input
                      type="text"
                      className="form-control textbox"
                      onChange={handleEvent}
                      id="phoneNo"
                      name="phoneNo"
                      aria-labelledby="phoneNoLabel"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      id="addressLabel"
                      for="address"
                      className="form-label"
                    >
                      Enter Address
                    </label>
                    <input
                      type="text"
                      className="form-control textbox"
                      onChange={handleEvent}
                      id="address"
                      name="address"
                      aria-labelledby="addressLabel"
                    />
                  </div>
                </div>

                <div className="displayFlex">
                  <div className="mb-3">
                    <label
                      id="experienceLabel"
                      for="experience"
                      className="form-label"
                    >
                      Enter Experience
                    </label>
                    <input
                      type="text"
                      className="form-control textbox"
                      onChange={handleEvent}
                      id="experience"
                      name="experience"
                      aria-labelledby="experienceLabel"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      id="chargesLabel"
                      for="charges"
                      className="form-label"
                    >
                      Enter Charges
                    </label>
                    <input
                      type="text"
                      className="form-control textbox"
                      onChange={handleEvent}
                      id="charges"
                      name="charges"
                      aria-labelledby="chargesLabel"
                    />
                  </div>
                </div>

                <div className="displayFlex">
                  <div className="mb-3">
                    <label
                      id="passwordLabel"
                      for="password"
                      className="form-label"
                    >
                      Enter Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control textbox"
                      onChange={handleEvent}
                      aria-labelledby="passwordLabel"
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      id="repasswordLabel"
                      for="repassword"
                      className="form-label"
                    >
                      Retype Password
                    </label>
                    <input
                      type="password"
                      id="repassword"
                      name="repassword"
                      className="form-control textbox"
                      onChange={handleEvent}
                      aria-labelledby="repasswordLabel"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="displayFlex-2  textalign-center btn btn-primary my-2 "
                  onClick={onFormSubmit}
                >
                  Register
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
          <img
            src={require("../assets/img/doctor.png")}
            className="img1 img-fluid animated"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Dr_register;
