import React,  { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";
import { Link } from "react-router-dom";
import Dr_header from './Dr_header';
import axios from "axios";


export default function () {

    
  const navigate = useNavigate();
  const [{ DoctorUser }, dispatchUser] = useStateValue() ?? [{}, () => {}];
  const URL = "/api/doctor?search=" + DoctorUser;
  const updateUrl ="/api/doctorUpdate";
  const profileURL= "/api/doctorProfileUpdate/";
  

  const [doctor, setDoctor] = useState([]);
  const [formData, setForm] = useState({});

  const getDoctors = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data,"Temp");
    setForm({...data[0]});

  };
  const [image, setImage] = useState('')
  function handleImage(e){
    console.log(e.target.files);
    setImage(e.target.files[0]);
  }

  const  uploadImg=async()=>{
    const imgData=new FormData()
    imgData.append('image', image)
    imgData.append('d_id', DoctorUser)

    axios.post(profileURL,imgData).then((res)=>{
        console.log(res);
        //setForm(res)
    }).catch((e)=>{
      console.log("Error : ",e);
    })
      
  }
  useEffect(() => {
    getDoctors();
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
        navigate("/Dr_profile");
      } else {
        //Login Invalid
        alert("Something went wrong!!")
        console.log("Invalid");
      }
    } catch (e) {
      console.log("Error : ", e);
    }
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

  function isSpeciality(val) {
    console.log(val)
    var regex=/^[a-zA-Z.-\s]*$/;
     if (!regex.test(val)) {
      return false;
    }
    return true;
  }

  function isPassword(val) {
    console.log(val)

    var regex = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (!regex.test(val)) {
      return false;
    }
    return true;
  }

  function onFormSubmit(e) {
    e.preventDefault();
    //console.log(formData)

    //var hname = isfirstName(formData.hospitalName)
    var fname = isfirstName(formData.name);
   
    var speciality = isAddress(formData.speciality);
    
    var mail = isMail(formData.mail);
   
    var phone = isPhno(formData.phoneNo);
   
    var address = isAddress(formData.address);
     
    var exp = isRating(formData.experience);
   
    var password=isPassword(formData.password);
    
    var charges = isRating(formData.charges);
  
    var qualification = isAddress(formData.qualification);
   
    if (fname && speciality && mail && phone && address && exp && password && charges && qualification) {
     
      uploadingData(updateUrl, formData);
      alert("Updated Successfull!!")

    }
    else {
      alert("Something went wrong")

    }
  }
  useEffect(() => {
    setForm({
      _id: null,
      d_id: doctor,
      h_id:"",
      hospitalName:"",
      name:"",
      speciality: "",
      mail:"",
      phoneNo: "",
      address: "",
      password: "",
      experience: "",
      charges:"",
      qualification:"",
    });
  }, [doctor]);
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
                                            <img src={formData.profileUrl} alt="Admin" className="rounded-circle profile_photo"  width="150" />
                                            <div className="mt-3">
                                                <h4>{formData.name}</h4>
                                                <p className="text-secondary mb-1">{formData.qualification}</p>
                                                <p className="text-muted font-size-sm">{formData.speciality}</p>

                                            </div>
                                        </div>
                                        <input className="btn btn-primary designbtn" type="file" value=""  onChange={handleImage}  /> 
                      <br />
                      <button className="btn btn-primary designbtn1" onClick={uploadImg}> Upload</button>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-8">
                                <div className="card card1 mb-3">
                                    <div className="card-body">
                                    <div className="row">
                                            <div className="col-sm-3">
                                                <label for="disabledTextInput" id="h_id-label" class="form-label"> <h6 className="mb-0">Hospital-ID</h6> </label>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input
                                                    type="text"
                                                    id="h_id"
                                                    value={formData.h_id}
                                                    name="h_id"
                                                    className="form-control textbox"
                                                    aria-labelledby="h_id-label"
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <label for="disabledTextInput" id="hospitalName-label" class="form-label"> <h6 className="mb-0">Hospital-Name</h6> </label>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input
                                                    type="text"
                                                    id="hospitalName"
                                                    name="hospitalName"
                                                    value={formData.hospitalName}
                                                    className="form-control textbox"
                                                    aria-labelledby="hospitalName-label"
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <label for="disabledTextInput" id="d_id-label" class="form-label"> <h6 className="mb-0">Doctor-ID</h6> </label>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                                <input
                                                    type="text"
                                                    id="d_id"
                                                    name="d_id"
                                                    className="form-control textbox"
                                                    aria-labelledby="d_id-label"
                                                    value={formData.d_id}
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                        <hr></hr>

                                        <div className="row">
                                            <div className="col-sm-3">
                                                <label for="disabledTextInput" id="name-label" class="form-label"> <h6 className="mb-0">Doctor Name</h6> </label>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className="form-control textbox"
                                                    aria-labelledby="name-label"
                                                    value={formData.name}
                                                    onChange={handleEvent}
                                                />
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                            <label for="disabledTextInput" id="mail-label" class="form-label"> <h6 className="mb-0">Mail-ID</h6> </label>    
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            <input
                                                    type="text"
                                                    id="mail"
                                                    name="mail"
                                                    className="form-control textbox"
                                                    aria-labelledby="mail-label"
                                                    value={formData.mail}
                                                    onChange={handleEvent}
                                                />
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                            <label for="disabledTextInput" id="phoneNo-label" class="form-label"> <h6 className="mb-0">Phone No</h6> </label>    
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            <input
                                                    type="text"
                                                    id="phoneNo"
                                                    name="phoneNo"
                                                    className="form-control textbox"
                                                    aria-labelledby="phoneNo-label"
                                                    value={formData.phoneNo}
                                                    onChange={handleEvent}
                                                />
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                            <label for="disabledTextInput" id="address-label" class="form-label"> <h6 className="mb-0">Address</h6> </label>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            <input
                                                    type="text"
                                                    id="address"
                                                    name="address"
                                                    className="form-control textbox"
                                                    aria-labelledby="address-label"
                                                    value={formData.address}
                                                    onChange={handleEvent}
                                                />
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                            <label for="disabledTextInput" id="speciality-label" class="form-label"> <h6 className="mb-0">Speciality</h6> </label>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            <input
                                                    type="text"
                                                    id="speciality"
                                                    name="speciality"
                                                    className="form-control textbox"
                                                    aria-labelledby="speciality-label"
                                                    value={formData.speciality}
                                                    onChange={handleEvent}
                                                />
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                            <label for="disabledTextInput" id="experience-label" class="form-label"> <h6 className="mb-0">Experience</h6> </label>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            <input
                                                    type="text"
                                                    id="experience"
                                                    name="experience"
                                                    className="form-control textbox"
                                                    aria-labelledby="experience-label"
                                                    value={formData.experience}
                                                    onChange={handleEvent}
                                                />
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                            <label for="disabledTextInput" id="charges-label" class="form-label"> <h6 className="mb-0">Charges</h6> </label>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            <input
                                                    type="text"
                                                    id="charges"
                                                    name="charges"
                                                    className="form-control textbox"
                                                    aria-labelledby="charges-label"
                                                    value={formData.charges}
                                                    onChange={handleEvent}
                                                />
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                            <label for="disabledTextInput" id="qualification-label" class="form-label"> <h6 className="mb-0">Qualification</h6> </label>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            <input
                                                    type="text"
                                                    id="qualification"
                                                    name="qualification"
                                                    className="form-control textbox"
                                                    aria-labelledby="qualification-label"
                                                    value={formData.qualification}
                                                    onChange={handleEvent}
                                                />
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                            <label for="disabledTextInput" id="password-label" class="form-label"> <h6 className="mb-0">Password</h6> </label>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            <input
                                                    type="text"
                                                    id="password"
                                                    name="password"
                                                    className="form-control textbox"
                                                    aria-labelledby="password-label"
                                                    value={formData.password}
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

