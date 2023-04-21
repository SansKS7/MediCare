import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

function Doctors() {
  return (
    <>
    <Header/>
      <div className="row">
      <Card
        img="https://upload.wikimedia.org/wikipedia/commons/3/34/Jehangir_Hospital_Building.jpg"
        dnm="Doctor Name:"
        dname="Aditi Kumar"
        hosnm="Hospital Name"
        hosname="Jahangir Hospital"
        spe="Speciality:"
        speciality="MultiSpecialist"

       />
      
      <Card
        img="https://upload.wikimedia.org/wikipedia/commons/3/34/Jehangir_Hospital_Building.jpg"
        dnm="Doctor Name:"
        dname="Aditi Kumar"
        hosnm="Hospital Name"
        hosname="Jahangir Hospital"
        spe="Speciality:"
        speciality="MultiSpecialist"

       />
      <Card
        img="https://upload.wikimedia.org/wikipedia/commons/3/34/Jehangir_Hospital_Building.jpg"
        dnm="Doctor Name:"
        dname="Aditi Kumar"
        hosnm="Hospital Name"
        hosname="Jahangir Hospital"
        spe="Speciality:"
        speciality="MultiSpecialist"

       />
      
      
      </div>
    </>
  );
}
function Card(props){
    return(
    <div className="col">
          <div class="card hospitalcard">
            <img src={props.img} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                <table class="table">
                  <thead>
                  <tr>
                      <th scope="col">{props.dnm}</th>
                      <td>{props.dname}</td>
                    </tr>
                    <tr>
                      <th scope="col">{props.hosnm}</th>
                      <td>{props.hosname}</td>
                    </tr>
                   
                   
                    <tr>
                      <th scope="col">{props.spe}</th>
                      <td>{props.speciality}</td>
                    </tr>
                    </thead>
                  <tbody>
                    
                  </tbody>
                </table>
              </p>
              <Link to="/Patient_login" class="btn btn-primary hospitalbtn-card">
                View more
              </Link>
            </div>
          </div>
        </div>
    )

}
export default Doctors;
