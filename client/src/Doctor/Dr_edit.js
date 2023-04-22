import React,  { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";
import { Link } from "react-router-dom";
import Dr_header from './Dr_header';


export default function () {

    
  const navigate = useNavigate()
  const [formData, setForm] = useState({
    _id: null,
    d_id: "",
    h_id: "",
    name: "",
    speciality: "",
    mail: "",
    phoneNo: "",
    address: "",
    password: "",
    experience: "",
    charges: "",
    qualification: "",
  }
  )

  let name,value;
  const handleEvent = (e) => {


    setForm({ ...formData, [e.target.name]: e.target.value });
    

  };

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

  function isSpeciality(val) {
    console.log(val)
    var regex=/^[a-zA-Z.-\s]*$/;
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
    var exp = isRating(formData.experience);
    var charges = isRating(formData.charges);
    var qualification = isAddress(formData.qualification);
    if (fname && speciality && mail && phone && address && exp && charges && qualification && hname) {
      alert("Login Successful")
    }
    else {
      alert("Login Unsuccessful")

    }
  }
    return (

        <>
            <Dr_header />
            <div id='profile'>
                <div className="container">
                    <div className="main-body">


                        <div className="row gutters-sm">
                            <div className="col-md-4 mb-3">
                                <div className="card card1">
                                    <div className="card-body">
                                        <div className="d-flex flex-column align-items-center text-center">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                            <div className="mt-3">
                                                <h4>John Doe</h4>
                                                <p className="text-secondary mb-1">Full Stack Developer</p>
                                                <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-8">
                                <div className="card card1 mb-3">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <label for="disabledTextInput" class="form-label"> <h6 className="mb-0">Doctor-ID</h6> </label>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input
                                                    type="text"
                                                    id="h_id"
                                                    name="h_id"
                                                    className="form-control textbox"
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        <hr></hr>

                                        <div className="row">
                                            <div className="col-sm-3">
                                                <label for="disabledTextInput" class="form-label"> <h6 className="mb-0">Doctor Name</h6> </label>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className="form-control textbox"
                                                    onChange={handleEvent}
                                                />
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                            <label for="disabledTextInput" class="form-label"> <h6 className="mb-0">Mail-ID</h6> </label>    
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            <input
                                                    type="text"
                                                    id="mail"
                                                    name="mail"
                                                    className="form-control textbox"
                                                    onChange={handleEvent}
                                                />
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                            <label for="disabledTextInput" class="form-label"> <h6 className="mb-0">Phone No</h6> </label>    
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            <input
                                                    type="text"
                                                    id="phoneNo"
                                                    name="phoneNo"
                                                    className="form-control textbox"
                                                    onChange={handleEvent}
                                                />
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                            <label for="disabledTextInput" class="form-label"> <h6 className="mb-0">Address</h6> </label>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            <input
                                                    type="text"
                                                    id="address"
                                                    name="address"
                                                    className="form-control textbox"
                                                    onChange={handleEvent}
                                                />
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                            <label for="disabledTextInput" class="form-label"> <h6 className="mb-0">Speciality</h6> </label>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            <input
                                                    type="text"
                                                    id="speciality"
                                                    name="speciality"
                                                    className="form-control textbox"
                                                    onChange={handleEvent}
                                                />
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                            <label for="disabledTextInput" class="form-label"> <h6 className="mb-0">Experience</h6> </label>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            <input
                                                    type="text"
                                                    id="experience"
                                                    name="experience"
                                                    className="form-control textbox"
                                                    onChange={handleEvent}
                                                />
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                            <label for="disabledTextInput" class="form-label"> <h6 className="mb-0">Charges</h6> </label>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            <input
                                                    type="text"
                                                    id="charges"
                                                    name="charges"
                                                    className="form-control textbox"
                                                    onChange={handleEvent}
                                                />
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                            <label for="disabledTextInput" class="form-label"> <h6 className="mb-0">Qualification</h6> </label>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            <input
                                                    type="text"
                                                    id="qualification"
                                                    name="qualification"
                                                    className="form-control textbox"
                                                    onChange={handleEvent}
                                                />
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-12">
                                            <button className="btn btn-primary" onClick={onFormSubmit}> Update</button>
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
    )
}

