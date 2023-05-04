import React, {  useEffect ,useState } from "react";
import { useNavigate } from "react-router-dom"
import Hos_header from "../Hospital/Hos_header";
import { useStateValue } from "../Context/StateProvider";
function Dr_schedule() {
    
    const navigate = useNavigate()
    const [{ HospitalUser }, dispatchUser] = useStateValue();
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
    <div className="table-container">
                <table className="table">
                    <thead className="thead-dark1">
                        <tr>
                            <th scope="col">Doctor ID</th>
                            <th scope="col"> Name</th>
                            <th scope="col">Speciality</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {doctor.map((currElem) => {
                        return(
                        <tr>
                            <th scope="row">{currElem.d_id}</th>
                            <td>{currElem.name}</td>
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
