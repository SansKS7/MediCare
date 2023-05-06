import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HeaderP from "./HeaderP";
import { useStateValue } from "../Context/StateProvider";
import { actionTypes } from "../Context/reducer";
import axios from "axios";

function Edit_profile() {
  const navigate = useNavigate();

  const [{ PatientUser }, dispatchUser] = useStateValue()?? [{}, () => {}];
  const URL = "/api/patient?search=" + PatientUser;


  const updateUrl ="/api/patientUpdate";

  const profileURL= "/api/patientProfileUpdate/";

  

  const [patient, setPatient] = useState([]);
  const [formData, setForm] = useState({});

  const getDoctors = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data,"Temp");
    setForm({...data});
};


const [image, setImage] = useState('')
  function handleImage(e){
    console.log(e.target.files);
    setImage(e.target.files[0]);
  }

  const  uploadImg=async()=>{
    const imgData=new FormData()
    imgData.append('image', image)
    imgData.append('p_id', PatientUser)

    axios.post(profileURL,imgData).then((res)=>{
        console.log(res);
        //setForm(res)
    }).catch((e)=>{
      console.log("Error :", e);
    })
      
  }

  useEffect(() => {
    getDoctors();
    console.log("object")
    console.log(patient)
  },[]);

  useEffect(()=>{
    uploadImg();
  },[])
  
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
        navigate("/patient_profile");
      } else {
        //Login Invalid
        alert("Something went wrong!")
        console.log("Invalid");
      }
    } catch (e) {
      console.log("Error : ", e);
    }
  }


  function isfirstName(val) {
    //console.log(val);
    var reg = /^[a-zA-Z]+$/;
    if (reg.test(val)) return true;
    return false;
  }


  function isAddress(val) {
    console.log(val);
    var reg = /^[a-zA-Z0-9\s+/b+(/,@)]+$/;
    // var reg=/^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/

    if (reg.test(val)) return true;
    return false;
  }
  function isGender(val) {
    console.log(val);
    var reg = /^[a-zA-Z0-9\s+/b+(/,@)]+$/;
    // var reg=/^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/

    if (reg.test(val)) return true;
    return false;
  }
  function isBlood(val) {
    console.log(val);
    var reg = /^[a-zA-Z0-9\s+/b+(/,@)]+$/;
    // var reg=/^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/

    if (reg.test(val)) return true;
    return false;
  }
  function isheight(val) {
    console.log(val);
    var reg = /^[a-zA-Z0-9\s+/b+(/,@)]+$/;
    // var reg=/^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/

    if (reg.test(val)) return true;
    return false;
  }
  function isWeight(val) {
    console.log(val);
    var reg = /^[a-zA-Z0-9\s+/b+(/,@)]+$/;
    // var reg=/^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/

    if (reg.test(val)) return true;
    return false;
  }

  function isPhno(val) {
    var phoneNo = /^\d{10,10}$/;
    if (phoneNo.test(val)) return true;
    return false;
  }
  function isAge(val) {
    var phoneNo = /^\d{2}$/;
    if (phoneNo.test(val)) return true;
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

  function isRePassword(pass, repass) {
    if (pass === repass) return true;
    return false;
  }
  function onFormSubmit(e) {
    e.preventDefault();
    var fname = isfirstName(formData.firstName);
    var lname = isfirstName(formData.lastName);
    var phone = isPhno(formData.phoneNo);
    var address = isAddress(formData.address);
    var age = isAge(formData.age);
    var password = isPassword(formData.password);
    var gender = isGender(formData.gender);
    var bloodGroup=isBlood(formData.bloodGroup);
    var height=isheight(formData.height);
    var weight=isWeight(formData.weight);
    if (fname && lname && age && phone && address && password && gender && height && bloodGroup && weight) {
      console.log(formData);
      uploadingData(updateUrl, formData);
      alert("Updated Successfull!!")

      navigate("/Patient_profile");
    } else {
      alert("Something went wrong");
    }
  }

  useEffect(() => {
    setForm({
      _id: null,
      p_id: patient,
      firstName:"",
      lastName: "",
      age: "",
      phoneNo: "",
      address: "",
      password: "",
      gender:"",
      bloodGroup:"",
      height:"",
      weight:"",
      repassword: "",
      profileUrl:"",
    });
  }, [patient]);


  return (
    <>
      <HeaderP />
      <div>
        <div id="profile">
          <div className="container">
            <div className="main-body">
              <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                  <div className="card card1">
                    <div className="card-body">
                      <div className="d-flex flex-column align-items-center text-center" data-testid="patientImg">
                        <img
                        // {require('../assets/img/home.png')}
                          src={formData.profileUrl}
                          alt="Profile Image"
                          className="rounded-circle profile_photo"
                          width="150"
                        />
                        
                        <div className="mt-3" data-testid="patientFullName" >
                          <h4>
                            {formData.firstName} {formData.lastName}
                          </h4>
                        </div>
                      </div>
                      
                      <input className="btn btn-primary designbtn" type="file" value=""  onChange={handleImage}  /> 
                      
                      <button  className="btn btn-primary designbtn1" onClick={uploadImg}> Upload</button>

                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card card1 mb-3">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3"  data-testid="patientID" >
                          <label htmlfor="p_id"  id="p_id_label" className="form-label">
                            {" "}
                            <h6 className="mb-0">Patient-ID</h6>{" "}
                          </label>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            id="p_id"
                            name="p_id"
                            value={formData.p_id}
                            className="form-control textbox"
                            disabled
                          />
                        </div>
                      </div>
                      <hr></hr>
                      <div className="row" data-testid="patientName">
                        <div className="col-sm-3">
                          <label for="disabledTextInput" className="form-label">
                            <h6 className="mb-0">Patient Name</h6>
                          </label>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            // value={patient.firstName}
                            className="form-control textbox"
                            onChange={handleEvent}
                          />
                        </div>
                      </div>
                      <hr></hr>
                      <div className="row" data-testid="patientLastName">
                        <div className="col-sm-3">
                          <label for="disabledTextInput" className="form-label">
                            {" "}
                            <h6 className="mb-0">LastName</h6>
                          </label>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            className="form-control textbox"
                            onChange={handleEvent}
                          />
                        </div>
                      </div>
                      <hr></hr>
                      <div className="row" data-testid="patientAge">
                        <div className="col-sm-3">
                          <label for="disabledTextInput" className="form-label">
                            <h6 className="mb-0">Age</h6>
                          </label>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            id="age"
                            name="age"
                            value={formData.age}
                            className="form-control textbox"
                            onChange={handleEvent}
                          />
                        </div>
                      </div>
                      <hr></hr>
                      <div className="row" data-testid="patientphono">
                        <div className="col-sm-3">
                          <label for="disabledTextInput" className="form-label">
                            {" "}
                            <h6 className="mb-0">Phone No</h6>
                          </label>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            className="form-control textbox"
                            id="phoneNo"
                            name="phoneNo"
                            value={formData.phoneNo}
                            onChange={handleEvent}
                          />
                        </div>
                      </div>
                      <hr></hr>
                      <div className="row" data-testid="patientGender">
                        <div className="col-sm-3">
                          <label for="disabledTextInput" className="form-label">
                            {" "}
                            <h6 className="mb-0">Gender</h6>
                          </label>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            className="form-control textbox"
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleEvent}
                          />
                        </div>
                      </div>
                      <hr></hr>
                      <div className="row" data-testid="patientBloodGroup">
                        <div className="col-sm-3">
                          <label for="disabledTextInput" className="form-label">
                            {" "}
                            <h6 className="mb-0">Blood Group</h6>
                          </label>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            className="form-control textbox"
                            id="bloodGroup"
                            name="bloodGroup"
                            value={formData.bloodGroup}
                            onChange={handleEvent}
                          />
                        </div>
                      </div>
                      <hr></hr>
                      <div className="row"  data-testid="patientHeight">
                        <div className="col-sm-3">
                          <label for="disabledTextInput" className="form-label">
                            {" "}
                            <h6 className="mb-0">Height</h6>
                          </label>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            className="form-control textbox"
                            id="height"
                            name="height"
                            value={formData.height}
                            onChange={handleEvent}
                          />
                        </div>
                      </div>
                      <hr></hr>
                      <div className="row" data-testid="patientWeight">
                        <div className="col-sm-3">
                          <label for="disabledTextInput" className="form-label">
                            {" "}
                            <h6 className="mb-0">Weight</h6>
                          </label>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            className="form-control textbox"
                            id="weight"
                            name="weight"
                            value={formData.weight}
                            onChange={handleEvent}
                          />
                        </div>
                      </div>
                      <hr></hr>
                      <div className="row" data-testid="patientAddress">
                        <div className="col-sm-3">
                          <label for="disabledTextInput" className="form-label">
                            {" "}
                            <h6 className="mb-0">Address</h6>
                          </label>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="text"
                            className="form-control textbox"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleEvent}
                          />
                        </div>
                      </div>
                      <hr></hr>
                      <div className="row" data-testid="patientPassword"> 
                        <div className="col-sm-3">
                          <label for="disabledTextInput" className="form-label">
                            <h6 className="mb-0">Password</h6>
                          </label>
                        </div>
                        <div className="col-sm-9 text-secondary">
                          <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            className="form-control textbox"
                            onChange={handleEvent}
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
      </div>
    </>
  );
}

export default Edit_profile;
