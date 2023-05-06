import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Home/Header";
import {isfirstName,isRating,isAddress,isPhno,isMail,isPassword,isRePassword,isSpeciality} from "./ValidationFunctions";

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

        navigate("/Hos_login");
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

  

  function onFormSubmit(e) {
    e.preventDefault();
    //console.log(formData)
    var fname = isfirstName(formData.name);
    //console.log(fname)
    var speciality = isAddress(formData.speciality);
    //console.log(speciality)
    var rating = isRating(formData.rating);
    //console.log(rating)
    var phone = isPhno(formData.phoneNo);
    //console.log(phone)
    var address = isAddress(formData.address);
    // console.log(address)
    var mail = isMail(formData.mail);
    // console.log(mail)
    var password = isPassword(formData.password);
    //console.log(password)
    var repassword = isRePassword(formData.password, formData.repassword);
    //console.log(repassword)
    if (fname && speciality && rating && phone && address && mail && password) {
      console.log(formData);
      uploadingData(URL, formData);

      alert("Register Successful");
    } else {
      alert("Register Unsuccessful");
    }
  }
  useEffect(() => {
    receiveID(getIdUrl);
  //  console.log(hospital);
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
    <Header />
    <div className="main-container">
      <div id="patient_register">
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
                <label id="h_id_label" className="form-label" htmlFor="h_id">
                  Hospital-ID
                </label>
                <input
                  type="text"
                  className="form-control textbox"
                  id="h_id"
                  name="h_id"
                  value={formData.h_id}
                  onChange={handleEvent}
                  aria-labelledby="h_id_label"
                />
              </div>
              <div className="mb-3">
                <label id="name_label" className="form-label" htmlFor="name">
                  Enter Name
                </label>
                <input
                  type="text"
                  className="form-control textbox"
                  id="name"
                  name="name"
                  onChange={handleEvent}
                  aria-labelledby="name_label"
                />
              </div>

              <div className="displayFlex">
                <div className="mb-3">
                  <label
                    id="speciality_label"
                    className="form-label"
                    htmlFor="speciality"
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
                  <label id="mail_label" className="form-label" htmlFor="mail">
                    Enter Mail-ID
                  </label>
                  <input
                    type="text"
                    className="form-control textbox"
                    id="mail"
                    name="mail"
                    onChange={handleEvent}
                    aria-labelledby="mail_label"
                  />
                </div>
              </div>

              <div className="displayFlex">
                <div className="mb-3">
                  <label
                    id="phoneNo_label"
                    className="form-label"
                    htmlFor="phoneNo"
                  >
                    Enter Phone No
                  </label>
                  <input
                    type="text"
                    className="form-control textbox"
                    id="phoneNo"
                    name="phoneNo"
                    onChange={handleEvent}
                    aria-labelledby="phoneNo_label"
                  />
                </div>

                <div className="mb-3">
                  <label
                    id="rating_label"
                    className="form-label"
                    htmlFor="rating"
                  >
                    Enter Rating
                  </label>
                  <input
                    type="text"
                    className="form-control textbox"
                    id="rating"
                    name="rating"
                    onChange={handleEvent}
                    aria-labelledby="rating_label"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label
                  id="address_label"
                  className="form-label"
                  htmlFor="address"
                >
                  Enter Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="form-control textbox"
                  onChange={handleEvent}
                  aria-labelledby="address_label"
                />
              </div>

              <div className="displayFlex">
                <div className="mb-3">
                  <label id="password_label" className="form-label">
                    Enter Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    aria-labelledby="password_label" 
                    className="form-control textbox"
                    onChange={handleEvent}
                  />
                </div>

                <div className="mb-3">
                  <label id="repassword_label" className="form-label">
                    Retype Password
                  </label>
                  <input
                    type="password"
                    id="repassword"
                    name="repassword"
                    className="form-control textbox"
                    aria-labelledby="repassword_label" 
                    onChange={handleEvent}
                  />
                </div>
              </div>

              <button
                className="displayFlex-2  textalign-center btn btn-primary my-2  "
                onClick={onFormSubmit}
              >
                Register
              </button>

              

              <button
           
                className="displayFlex-2  textalign-center btn btn-primary my-2  "
                onClick={() => navigate("/Hos_login")}
              >
                Login
              </button>
            </fieldset>
          </form>
        </div>
       
      </div>
      <div className="hero-section-2 col-lg-6 order-1 order-lg-2 hero-img">
          <img
            src={require("../assets/img/register.png")}
            className="img1 img-fluid animated"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Hos_register;
