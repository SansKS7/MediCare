import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Dr_header from './Dr_header';
import { useStateValue } from '../Context/StateProvider'
import { actionTypes } from "../Context/reducer";


export default function () {
    const navigate = useNavigate()
    const [ {DoctorUser} , dispatchUser] = useStateValue() ?? [{}, () => {}];


    const URL = "/api/doctor?search="+DoctorUser;

    const [doctor, setDoctor] = useState([]);
  
    const getDoctors = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      setDoctor(data[0])
    };
    useEffect(() => {
        
      getDoctors();
    console.log(DoctorUser);
    }, []);

  
    
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
                                            <img src={doctor.profileUrl} alt="Admin" className="rounded-circle profile_photo" width="150" />
                                            <div className="mt-3">
                                                <h4>  Dr.{doctor.name}</h4>
                                                <p className="text-secondary mb-1">{doctor.qualification}</p>
                                                <p className="text-muted font-size-sm">{doctor.speciality}</p>
                                                
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
                                                <h6 className="mb-0" data-testid="h_id">Hospital-ID</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {doctor.h_id}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0"  data-testid="hospitalName">Hospital Name</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {doctor.hospitalName}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0"  data-testid="d_id">Doctor-ID</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {doctor.d_id}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0"  data-testid="dname">Doctor Name</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {doctor.name}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0"  data-testid="speciality">Speciality</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {doctor.speciality}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0"  data-testid="mail">Mail-ID</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {doctor.mail}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0"  data-testid="phoneNo">Phone No</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {doctor.phoneNo}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0"  data-testid="address">Address</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {doctor.address}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0"  data-testid="experience">Experience</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {doctor.experience}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0"  data-testid="charges">Charges</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {doctor.charges}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0"  data-testid="qualification">Qualification</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {doctor.qualification}
                                            </div>
                                        </div>
                                        <hr></hr>
                                       
                                        <div className="row">
                                    
                                            <div className="col-sm-12">
                                            <Link to="/Dr_edit" className="btn btn-primary"  name="eprofile">Edit Profile</Link>
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

