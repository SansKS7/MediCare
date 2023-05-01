import React, { useEffect, useState } from 'react'
import HeaderP from '../Home/HeaderP'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useStateValue } from '../Context/StateProvider'

function View_Appointment() {
    const navigate = useNavigate()
    const [{ PatientUser }, dispatchUser] = useStateValue();
    const URLPending = "/api/patientAppointment?search=" + PatientUser + "+Pending";
    const URLAccepted = "/api/patientAppointment?search=" + PatientUser + "+Accepted";
    const URLRejected = "/api/patientAppointment?search=" + PatientUser+"+Rejected";
    
    const [patient, setPatient] = useState([]);
    const [patientA,setPatientA]=useState([]);
    const [PatientR,setPatientR]=useState([]);


    const getPatient = async () => {
        const response = await fetch(URLPending);
        const data = await response.json();
        console.log(data);
        setPatient(data);
    };
    

    const getPatientAcc = async () => {
        const response = await fetch(URLAccepted);
        const data = await response.json();
        console.log(data);
        setPatientA(data);
    };

    
    const getPatientR = async () => {
        const response = await fetch(URLRejected);
        const data = await response.json();
        console.log(data);
        setPatientR(data);
    };

//getPatient();
    useEffect(() => {
        // getPatient();
        // getPatientAcc();
        // getPatientR();
        
    });


    return (
        <>
            <HeaderP />
            <div className="table-container">
                <table className="table">
                    <thead className="thead-dark1">
                        <tr>
                            <th scope="col">Sr.No</th>
                            <th scope="col">Hospital Name</th>
                            <th scope="col">Doctor Name</th>

                            <th scope="col">Time</th>
                            <th scope="col">Message</th>
                            <th scope="col">Appointment Status</th>
                        </tr>
                    </thead>
                    <tbody>

                    {patient.map((currElem) => {
                        return(
                        <tr>
                            <th scope="row">{currElem.a_id}</th>
                            <td>{currElem.hospitalName}</td>
                            <td>{currElem.name}</td>
                            <td>{currElem.appoDateTime}</td>
                            <td>{currElem.appoMessage}</td>

                            <td><button className="btn btn-primary">Pending</button></td>
                        </tr>
                       );
                    })}  


                    {patientA.map((currElem) => {
                        return(
                        <tr>
                            <th scope="row">{currElem.a_id}</th>
                            <td>{currElem.hospitalName}</td>
                            <td>{currElem.name}</td>
                            <td>{currElem.appoDateTime}</td>
                            <td>{currElem.appoMessage}</td>

                            <td><button className="btn btn-success">Accepted</button></td>
                        </tr>
                       );
                    })}   


                    {PatientR.map((currElem) => {
                        return(
                        <tr>
                            <th scope="row">{currElem.a_id}</th>
                            <td>{currElem.hospitalName}</td>
                            <td>{currElem.name}</td>
                            <td>{currElem.appoDateTime}</td>
                            <td>{currElem.appoMessage}</td>

                            <td><button className="btn btn-danger">Rejected</button></td>
                        </tr>
                       );
                    })}   

                        
                    </tbody>
                </table>


            </div>
        </>
    )
}

export default View_Appointment
