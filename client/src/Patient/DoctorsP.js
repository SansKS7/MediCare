import React, {useState,useEffect}from "react";
import HeaderP from "./HeaderP";
import { Link } from "react-router-dom";
function DoctorP() {
 
  
  
  const [query,setQuery]=useState([]);
  console.log(query);
  
  const URL = "/api/doctor?search="+query;

  const [doctor, setDoctors] = useState([]);

   
  

    const getDoctors = async () => {
      const response = await fetch(URL);
      setDoctors(await response.json());
      const data=await response.json();
   
    };

    useEffect(()=>{

    getDoctors();
  
    },[query]);


 


 
 
  return (
    <>
      <HeaderP />
      <div className="search__back">
                 <input
            className="form-control me-2 search__bar__dr d-flex navbar navbar-expand  fixed-top d-flex align-items-center"
            type="search"
            id="search_doctorss"
            name="search_doctors"
            placeholder="Search Doctors Here....."
            aria-label="Search"
            onChange={(e)=>setQuery(e.target.value)}

          />
 
      </div>
      <div className="row" data-testid="my-div-doctor">
      {doctor.map((currElem) => {
          return (
            <>
      <div className="col">
        <div className="card doctorcard">
          <img
            src={currElem.profileUrl}
            className="card-img-top doctor__card__imgblock"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title"> {currElem.name}</h5>
            <p className="card-text">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">HospitalName:</th>
                    <td>{currElem.hospitalName}</td>
                  </tr>

                  <tr>
                    <th scope="col">Speciality:</th>
                    <td>{currElem.speciality}</td>
                  </tr>
                  <tr>
                    <th scope="col">Experience</th>
                    <td>{currElem.experience}</td>
                  </tr>
                  <tr>
                    <th scope="col">Phone No </th>
                    <td>{currElem.phoneNo}</td>
                  </tr>
                  <tr>
                    <th scope="col">Qualification</th>
                    <td>{currElem.qualification}</td>
                  </tr>
                  <tr>
                    <th scope="col">Charges</th>
                    <td>{currElem.charges}</td>
                  </tr>
                  <tr>
                    <th scope="col">Mail</th>
                    <td>{currElem.mail}</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Address</th>
                    <td className="card__address">{currElem.address}</td>
                  </tr>
                </tbody>
              </table>
            </p>
            <p className="text-center">
            <Link to="/Book_Appointment" state={currElem}  className="btn btn-primary hospitalbtn-card">
            Book Appointment
            </Link>
            
            </p>
          </div>
        </div>
        
      </div>
        </>
          );
        })}

      </div>
    </>
  );
}


function Card1(props) {
  return <></>;
}

export default DoctorP;
