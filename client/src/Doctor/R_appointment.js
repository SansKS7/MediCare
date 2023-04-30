import React, { useEffect , useState  } from 'react'
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";
import { Link } from "react-router-dom";
import Dr_header from './Dr_header';


export default function () {
 const navigate = useNavigate()
    const [{ DoctorUser }, dispatchUser] = useStateValue();
    const URL = "/api/doctorAppointment?search=" + DoctorUser + "+Reject";
    const [doctor, setdoctor] = useState([]);


    const getDoctor = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        setdoctor(data);
    };


    useEffect(() => {
        getDoctor();
    });

    return (

        <>
          <Dr_header />
            <div className="table-container">
                <table className="table">
                    <thead className="thead-dark1">
                        <tr>
                            <th scope="col">Patient ID</th>
                            <th scope="col">Patient Name</th>
                            <th scope="col">Select Time</th>
                            <th scope="col">Message</th>
                            <th scope="col">Appointment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctor.map((currElem) => {
                              return(      
                        <tr>
                           <th scope="row">{currElem.p_id}</th>
                            <td>{currElem.firstName} {currElem.lastName}</td>
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

