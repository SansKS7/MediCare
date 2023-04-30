import React, { useEffect,useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";
import { Link } from "react-router-dom";
import Dr_header from './Dr_header';


export default function () {
    const navigate = useNavigate()
    const [{ DoctorUser }, dispatchUser] = useStateValue();
    const URL = "/api/doctorAppointment?search=" + DoctorUser + "+Pending";
    const [doctor, setdoctor] = useState([]);

    const updateURL="/api/updateAppointmentStatus";
       const getDoctor = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        setdoctor(data);
    };

   async  function acceptAppo()  {
        try{

           const respones=await fetch(updateURL,{
            method:'POST',
            body:JSON.stringify({
                a_id:"A105",
                appoStatus:"Accepted",


            }),
            headers: {
                'Content-type': 'application/json',
             },

        }).catch((e)=>console.log("Error",e));
        if(respones.status==200)
        {
            console.log("success")
        }
        else{
            console.log("not")
            
        }
    }catch(e){
        console.log("error",e);
    }
   }
    
   async  function rejectAppo()  {
    try{

       const respones=await fetch(updateURL,{
        method:'POST',
        body:JSON.stringify({
            a_id:"A107",
            appoStatus:"Rejected",
            appoMessage:"I'm not available"


        }),
        headers: {
            'Content-type': 'application/json',
         },

    }).catch((e)=>console.log("Error",e));
    if(respones.status==200)
    {
        console.log("success")
    }
    else{
        console.log("not")
        
    }
}catch(e){
    console.log("error",e);
}
}

   

    useEffect(() => {
        getDoctor();
    });

    // function updateStatus(id){
    //     e.preventDefault()
    // } 


    return (

        <>
            <Dr_header />
            <div className="table-container1">
                <table className="table">
                    <thead className="thead-dark1">
                        <tr>
                        
                        <th scope="col">Appointment ID </th>
                        
                        <th scope="col">Patient ID</th>
                            <th scope="col">Patient Name</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Age</th>
                            <th scope="col">Blood Group</th>
                            <th scope="col">Time</th>
                            <th scope="col">Message</th>
                            <th scope="col">Appointment Status</th>
                
                        </tr>
                    </thead>
                    <tbody>
                    {doctor.map((currElem) => {
                        return(
                        <tr>
                        <th scope="row">{currElem.a_id}</th>
                        <td>{currElem.p_id}</td>

                            <td>{currElem.firstName} {currElem.lastName}</td>
                            <td>{currElem.gender}</td>
                            <td>{currElem.age}</td>
                            <td>{currElem.bloodGroup}</td>
                            <td>{currElem.appoDateTime}</td>
                            <td>{currElem.appoMessage}</td>
                           
                            <td><button className="btn btn-success "  onClick={acceptAppo}>Accept</button>  
                            
                            <button className="btn btn-danger" onClick={rejectAppo} >Reject</button></td>
                        </tr>
                        );
                    })}  
                    </tbody>
                </table>


            </div>
        </>
    )
}

