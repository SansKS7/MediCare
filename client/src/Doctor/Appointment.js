import React, { useEffect,useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../Context/StateProvider";
import Dr_header from './Dr_header';



export default function () {
    const navigate = useNavigate()
    const [{ DoctorUser }, dispatchUser] = useStateValue()?? [{}, () => {}];
    const URL = "/api/doctorAppointment?search=" + DoctorUser + "+Pending";
    const [doctor, setdoctor] = useState([]);

    const updateURL="/api/updateAppointmentStatus";
       const getDoctor = async () => {
        const response = await fetch(URL);
        const data = await response.json();
       // console.log(data);
        setdoctor(data);
    };
    
    function getDateData(d) {
        const date = new Date(d);
        const dateTemp = date.getDate(date);
        const monthTemp = date.getMonth(date);
        const yearTemp = date.getFullYear(date);
    
        return dateTemp + "/" + monthTemp + "/" + yearTemp;
      }
    
      function getTimeData(d) {
        const date = new Date(d);
        const h = date.getHours(date);
        const m = date.getMinutes(date);
        // const yearTemp = date.getFullYear(date);
    
        return h + ":" + m;
      }


    function rejectAppoClick(id)
    {
        const reasonMgs = prompt("Enter Reasone for reject appointment");
        if(reasonMgs != null)
        {
            rejectAppo(id,reasonMgs);
        }
      

        console.log(reasonMgs);
    }
   async  function acceptAppo(a_id)  {
        try{

           const respones=await fetch(updateURL,{
            method:'POST',
            body:JSON.stringify({
                a_id:a_id,
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
    
   async  function rejectAppo(a_id,reasone)  {
    try{

       const respones=await fetch(updateURL,{
        method:'POST',
        body:JSON.stringify({
            a_id:a_id,
            appoStatus:"Rejected",
            appoMessage:reasone


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
function getPatientDetails(p_id)
{
   // e.preventDefault();
   console.log("p_id")
    console.log(p_id);
    navigate("/patient_profile_dr")

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
            <div className="table-container1" data-testid="my-div-appo">
                <table className="table" data-testid="my-table-appo">
                    <thead className="thead-dark1">
                        <tr data-testid="my-table-appo-tr">
                        
                        <th data-testid="my-table-appo-tr-aid" scope="col">Appointment ID </th>
                        
                        <th data-testid="my-table-appo-tr-pid" scope="col">Patient ID</th>
                            <th data-testid="my-table-appo-tr-pname" scope="col">Patient Name</th>
                            <th data-testid="my-table-appo-tr-pgender" scope="col">Gender</th>
                            <th data-testid="my-table-appo-tr-date" scope="col">Date</th>
                            <th data-testid="my-table-appo-tr-time" scope="col">Time</th>
                            <th data-testid="my-table-appo-tr-msg" scope="col">Message</th>
                            <th data-testid="my-table-appo-tr-appoStatus" scope="col">Appointment Status</th>
                
                        </tr>
                    </thead>
                    <tbody>
                    {doctor.map((currElem) => {
                        return(
                        <tr>
                        <th data-testid="my-appoID"scope="row">{currElem.a_id}</th>
                        <td>{currElem.p_id}</td>

                            <td>{currElem.firstName} {currElem.lastName}</td>
                            <td>{currElem.gender}</td>
                            <td>{getDateData(currElem.appoDateTime)}</td>
                           <td>{getTimeData(currElem.appoDateTime)}</td>
                             <td>{currElem.appoMessage}</td>
                           
                            <td><button className="btn btn-success "  onClick={()=>acceptAppo(currElem.a_id)}>  Accept</button>  
                            
                            <button className="btn btn-danger" onClick={()=>rejectAppoClick(currElem.a_id)} >  Reject</button>
                            {/* <button className="btn btn-primary" onClick={()=>getPatientDetails(currElem.p_id)} >  Details</button>
                             */}
                             {/* <Link to="/Patient_profile_dr"state={currElem}  className="btn btn-primary">
                                 Details
                                 </Link> */}




                            </td>


                        </tr>
                        );
                    })}  
                    </tbody>
                </table>


            </div>
        </>
    )
}

