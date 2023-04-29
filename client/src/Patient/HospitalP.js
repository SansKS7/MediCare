import React, {useState,useEffect}from "react";
import HeaderP from "../Home/HeaderP";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function HospitalP() {
  const navigate = useNavigate();
  const test="";
  const URL = "/api/hospital?search="+test;

  const [hospital, setHospital] = useState([]);

  const getHospitals = async () => {
    const response = await fetch(URL);
    setHospital(await response.json());
    const data = await response.json();
    // const doctorDipslay = doctor.slice(0,2);

    //console.log(data);
  };

  const [formData, setForm] = useState(
    {
      search_hospitals:"",
    }
  )
  const handleEvent = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value })
  }

  
  

   function handleSubmit(e){
    e.preventDefault();
    console.log(formData);

  }
  useEffect(() => {
    getHospitals();
  }, []);

  useEffect(()=>{

  })

  return (
    <>
    {
      console.log(formData)
    }
      <HeaderP />
      <div className="search__back">
        <form
          class="search__bar__dr d-flex navbar navbar-expand  fixed-top d-flex align-items-center"
          role="search"
          onSubmit={handleSubmit}
        >
          <input
            class="form-control me-2"
            type="search"
            id="search_hospitals"
            placeholder="Search Hospitals Here....."
            aria-label="Search"
            onChange={handleEvent}

          />
          <button class="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>

      <div className="row">
        {hospital.map((curElem) => {
          return (
            <>
             <div className="col">
             <div class="card hospitalcard">
        <img src="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=2000"
 class="card-img-top" alt="..." />

            
          <div class="card-body">
            <h5 class="card-title"> {curElem.name}</h5>
            <p class="card-text">
              <table class="table">
                <thead>
                 
                  <tr>
                    <th scope="col">Speciality : </th>
                    <td>{curElem.speciality}</td>
                  </tr>
                  <tr>
                    <th scope="col">Mobile :</th>
                    <td>{curElem.phoneNo}</td>
                  </tr>
                  
                  <tr>
                    <th scope="col">Mail</th>
                    <td>{curElem.mail}</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Address:</th>
                    <td className="card__address">{curElem.address}</td>
                  </tr>
                </tbody>
              </table>
            </p>
            <p className="text-center">
            <Link to="/HospitalDr"state={{hospital:curElem.name}}  class="btn btn-primary hospitalbtn-card">
            View Doctors
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
  return (
    <>
          </>
  );
}

export default HospitalP;
