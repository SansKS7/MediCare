
import React ,{useState, useEffect}from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function Hospitals() {
  const URL = "/api/hospital?search=";

  const [hospital, setHospital] = useState([]);

  const getHospitals = async () => {
    const response = await fetch(URL);
    setHospital(await response.json());
    const data = await response.json();
    // const doctorDipslay = doctor.slice(0,2);

    //console.log(data);
  };
  useEffect(() => {
    getHospitals();
  }, []);

  return (
    <>
      <Header />

      <div className="row">
        {hospital.slice(0, 3).map((curElem) => {
          return (
            <>
              <Card
                img={curElem.profileUrl}
                title={curElem.name}
                spe="Speciality:"
                speciality={curElem.speciality}
                add="Description"
                address={curElem.address} />
            </>
          );
        })}

      
      </div>
    </>
  );
}
function Card(props) {
  return (
    <div className="col">
      <div className="card hospitalcard">
        <img src={props.img} className="card-img-top hospital_card_img" alt="..." />
        <div className="card-body">
          <h5 className="card-title"> {props.title}</h5>
          <p className="card-text">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">{props.spe}</th>
                  <td>{props.speciality}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>{props.add}</th>
                  <td className="card__address">{props.address}</td>
                </tr>
              </tbody>
            </table>
          </p>
          <Link to="/Patient_login" className="btn btn-primary hospitalbtn-card">
            View More
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Hospitals;
