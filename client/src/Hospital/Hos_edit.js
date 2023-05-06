import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";
import { Link } from "react-router-dom";
import Hos_header from "./Hos_header";
import axios from "axios";

export default function () {
  const navigate = useNavigate();

  const [{ HospitalUser }, dispatchUser] = useStateValue() ?? [{}, () => {}];
  const URL = "/api/hospital?search=" + HospitalUser;
  const updateUrl = "/api/hospitalUpdate";
  const profileURL = "/api/hospitalProfileUpdate/";
  const [hospital, setHospital] = useState([]);
  const [formData, setForm] = useState({});

  const getHospitals = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setForm({ ...data[0] });
  };
  const [image, setImage] = useState("");
  function handleImage(e) {
    console.log(e.target.files);
    setImage(e.target.files[0]);
  }

  const uploadImg = async () => {
    const imgData = new FormData();
    imgData.append("image", image);
    imgData.append("h_id", HospitalUser);

    axios.post(profileURL, imgData).then((res) => {
      console.log(res);
      //setForm(res)
    }).catch((e)=>{
      console.log("Error"+e);
    });
  };

  useEffect(() => {
    getHospitals();
  }, []);
  useEffect(() => {
    uploadImg();
  }, []);

  let name, value;
  const handleEvent = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

  async function uploadingData(updateUrl, data) {
    try {
      const respones = await fetch(updateUrl, {
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
        //alert("Updated Successfully");
        navigate("/Hos_profile");
      } else {
        //Login Invalid
        alert("Something went wrong!!");
        console.log("Invalid");
      }
    } catch (e) {
      console.log("Error : ", e);
    }
  }

  function isfirstName(val) {
    //console.log(val);
    var reg = /^[a-zA-Z\s]+$/;
    if (reg.test(val)) return true;
    return false;
  }

  function isRating(val) {
    var rate = /^\d{1,2}$/;
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

  function onFormSubmit(e) {
    e.preventDefault();
    //console.log(formData)
    var fname = isfirstName(formData.name);
    var speciality = isAddress(formData.speciality);
    var rating = isRating(formData.rating);
    var phone = isPhno(formData.phoneNo);
    var address = isAddress(formData.address);
    var mail = isMail(formData.mail);
    var password = isPassword(formData.password);

    if (fname && speciality && phone && address && mail && password) {
      uploadingData(updateUrl, formData);
      alert("Updated Successfully");
    } else {
      alert("Something went wrong!!");
    }
  }
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
    });
  }, [hospital]);
  return (
    <>
      <Hos_header />
      <div id="profile">
        <div className="container">
          <div className="main-body">
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3">
                <div className="card card1">
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                      <img
                        src={formData.profileUrl}
                        alt="Admin"
                        className="rounded-circle profile_photo"
                        width="150"
                      />

                      <div className="mt-3">
                        <h4>{formData.name}</h4>
                      </div>
                    </div>
                    <input
                      className="btn btn-primary designbtn "
                      type="file"
                      value=""
                      onChange={handleImage}
                    />
                    <br />
                    <button
                      className="btn btn-primary designbtn1 "
                      onClick={uploadImg}
                    >
                      {" "}
                      Upload
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card card1 mb-3">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <label
                          id="h_id_label"
                          htmlFor="h_id"
                          className="form-label"
                        >
                          <h6 className="mb-0">Hospital-ID</h6>
                        </label>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          id="h_id"
                          name="h_id"
                          value={formData.h_id}
                          className="form-control textbox"
                          disabled
                          aria-labelledby="h_id_label"
                        />
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <label
                          id="name_label"
                          htmlFor="name"
                          className="form-label"
                        >
                          <h6 className="mb-0">Hospital Name</h6>
                        </label>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          className="form-control textbox"
                          onChange={handleEvent}
                          readOnly
                          aria-labelledby="name_label"
                        />
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <label
                          id="speciality_label"
                          htmlFor="speciality"
                          className="form-label"
                        >
                          <h6 className="mb-0">Speciality</h6>
                        </label>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          id="speciality"
                          name="speciality"
                          value={formData.speciality}
                          className="form-control textbox"
                          onChange={handleEvent}
                          aria-labelledby="speciality_label"
                        />
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <label
                          id="mail_label"
                          htmlFor="mail"
                          className="form-label"
                        >
                          <h6 className="mb-0">Mail-ID</h6>
                        </label>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          id="mail"
                          name="mail"
                          value={formData.mail}
                          className="form-control textbox"
                          onChange={handleEvent}
                          aria-labelledby="mail_label"
                        />
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <label
                          id="phoneNo_label"
                          htmlFor="phoneNo"
                          className="form-label"
                        >
                          <h6 className="mb-0">Phone No</h6>
                        </label>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          id="phoneNo"
                          name="phoneNo"
                          value={formData.phoneNo}
                          className="form-control textbox"
                          onChange={handleEvent}
                          aria-labelledby="phoneNo_label"
                        />
                      </div>
                    </div>
                    <hr></hr>
                    <div className="row">
                      <div className="col-sm-3">
                        <label id="address_label" className="form-label">
                          {" "}
                          <h6 className="mb-0">Address</h6>{" "}
                        </label>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          aria-labelledby="address_label"
                          className="form-control textbox"
                          onChange={handleEvent}
                        />
                      </div>
                    </div>
                    <hr></hr>

                    <div className="row">
                      <div className="col-sm-3">
                        <label id="password_label" className="form-label">
                          {" "}
                          <h6 className="mb-0">Password</h6>{" "}
                        </label>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        <input
                          type="text"
                          id="password"
                          name="password"
                          value={formData.password}
                          className="form-control textbox"
                          onChange={handleEvent}
                          aria-labelledby="password_label"
                        />
                      </div>
                    </div>
                    <hr></hr>

                    <div className="row">
                      <div className="col-sm-12">
                        <button
                          className="btn btn-primary"
                          onClick={onFormSubmit}
                        >
                          {" "}
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
