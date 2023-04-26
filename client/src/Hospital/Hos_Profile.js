import React, {useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";
import { Link } from "react-router-dom";
import Hos_header from './Hos_header';


export default function () {

const navigate = useNavigate()

const [ {HospitalUser} , dispatchUser] = useStateValue();
    const URL = "/api/hospital?search="+HospitalUser;

    const [hospital, setHospital] = useState([]);
  
    const getHospitals = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        setHospital(data);
    };
    useEffect(() => {
      getHospitals();
    },[]);





    return (

        <>
            <Hos_header/>
            <div id='profile'>
                <div className="container">
                    <div className="main-body">

                    {hospital.slice(0,3).map((curElem) => {
                        return (
                        <div className="row gutters-sm">
                            <div className="col-md-4 mb-3">
                                <div className="card card1">
                                    <div className="card-body">
                                        <div className="d-flex flex-column align-items-center text-center">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                            <div className="mt-3">
                                                <h4>{curElem.name}</h4>
                                                <p className="text-secondary mb-1">{curElem.speciality}</p>
                                               
                                                
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
                                                <h6 className="mb-0">Hospital-ID</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {curElem.h_id}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Hospital Name</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {curElem.name}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Speciality</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {curElem.speciality}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Mail</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {curElem.mail}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Phone No</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {curElem.phoneNo}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <h6 className="mb-0">Address</h6>
                                            </div>
                                            <div className="col-sm-9 text-secondary">
                                            {curElem.address}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        
                                     
                                        <div className="row">
                                    
                                            <div className="col-sm-12">
                                            <Link to="/Hos_edit" className="btn btn-primary">Edit Profile</Link>
                                            </div>
                                       
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                        );
                    })}
                    </div>
                </div>
            </div>


        </>
    )
}

