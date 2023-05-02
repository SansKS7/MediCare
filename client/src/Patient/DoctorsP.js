import React, {useState,useEffect}from "react";
import HeaderP from "../Home/HeaderP";
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
            class="form-control me-2 search__bar__dr d-flex navbar navbar-expand  fixed-top d-flex align-items-center"
            type="search"
            id="search_doctorss"
            name="search_doctors"
            placeholder="Search Doctors Here....."
            aria-label="Search"
            onChange={(e)=>setQuery(e.target.value)}

          />
 
      </div>
      <div className="row">
      {doctor.map((currElem) => {
          return (
            <>
      <div className="col">
        <div class="card doctorcard">
          <img
            src=""
            class="card-img-top doctor__card__imgblock"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title"> {currElem.name}</h5>
            <p class="card-text">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Hospital Name:</th>
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
            <Link to="/Book_Appointment" state={currElem}  class="btn btn-primary hospitalbtn-card">
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
