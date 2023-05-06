import React, { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import HeaderP from './HeaderP';
import { useStateValue } from '../Context/StateProvider'
import { actionTypes } from "../Context/reducer";



export default function () {

    const navigate = useNavigate()
    const [ {PatientUser} , dispatchUser] = useStateValue();


    const URL = "/api/patient?search="+PatientUser;

    const [patient, setPatient] = useState([]);
  
    const getDoctors = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(data);
      setPatient(data);
    };
    useEffect(() => {
        
      getDoctors();
    
  
    });

    
    return (

        <>
            <HeaderP />
            <div id='profile'>
                <div className="container">
                    <div className="main-body">
                  

                        <div className="row gutters-sm">
                            <div className="col-md-4 mb-3">
                                <div className="card card1">
                                    <div className="card-body">
                                        <div className="d-flex flex-column align-items-center text-center">
                                            <img src={patient.profileUrl}  alt="Admin" className="rounded-circle profile_photo" width="150" />
                                            <div className="mt-3">
                                                <h4>{patient.firstName} {patient.lastName}</h4>
                                                
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
                                                <h6 className="mb-0">Patient ID</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {patient.p_id} 
                                           
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Patient Name</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {patient.firstName} 
                                                </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">LastName</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {patient.lastName}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Age</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {patient.age}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">phone No</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {patient.phoneNo}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Gender</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {patient.gender}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Blood Group</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {patient.bloodGroup}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Height</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {patient.height}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Weight</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {patient.weight}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Address</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {patient.address}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        
                                        <div className="row">
                                            <div className="col-sm-12">
                                            <Link to="/Edit_profile" className="btn btn-primary " >Edit Profile</Link>
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

