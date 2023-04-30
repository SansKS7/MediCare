import React, { useEffect, useState } from 'react'
import HeaderP from '../Home/HeaderP'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useStateValue } from '../Context/StateProvider'

function View_Appointment() {
    const navigate = useNavigate()
    const [{ PatientUser }, dispatchUser] = useStateValue();
    const URL = "/api/patientAppointment?search=" + PatientUser + "+Pending";
    const [patient, setPatient] = useState([]);


    const getPatient = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        setPatient(data);
    };


    useEffect(() => {
        getPatient();
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
                    </tbody>
                </table>


            </div>
        </>
    )
}

export default View_Appointment
