import React, {  useEffect ,useState } from "react";
import { useNavigate } from "react-router-dom"
import Hos_header from "../Hospital/Hos_header";
import { useStateValue } from "../Context/StateProvider";
function Dr_schedule() {
    
    const navigate = useNavigate()
    const [{ HospitalUser }, dispatchUser] = useStateValue()?? [{}, () => {}];
    const URL = "/api/doctor?search=" + HospitalUser;
    const deleteURL="/api/deleteDoctor";
    const [doctor, setdoctor] = useState([]);


    const getDoctor = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        setdoctor(data);
    };

    async  function deleteDoctor(d_id)  {
        try{
    
           const respones=await fetch(deleteURL,{
            method:'DELETE',
            body:JSON.stringify({
                d_id:d_id,
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


return(
    <>
    <Hos_header/>
    <div className="table-container" data-testid="my-div-doctor">
                <table className="table" data-testid="my-table-doctor">
                    <thead className="thead-dark1">
                        <tr data-testid="my-div-doctor-row">
                            <th data-testid="my-table-doctorID" scope="col">Doctor ID</th>
                            <th  data-testid="my-table-doctorName" scope="col"> Name</th>
                            <th  data-testid="my-table-doctorspe" scope="col">Speciality</th>
                            <th data-testid="my-table-doctorAction" scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {doctor.map((currElem) => {
                        return(
                        <tr>
                            <th scope="row">{currElem.d_id}</th>
                            <td> Dr.{currElem.name}</td>
                            <td>{currElem.speciality}</td>
                            <td><button className="btn btn-danger" onClick={()=>{
                            //alert("Deleting Doctor");
                            deleteDoctor(currElem.d_id);
                            }}>Delete</button></td>
                        </tr>
                          );
                        })}  
                    </tbody>
                </table>


            </div>
    </>
      );
}

export default Dr_schedule;
