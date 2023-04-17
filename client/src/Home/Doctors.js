import React from "react";
import Header from "./Header";

function Doctors() {
  return (
    <>
    <Header/>
      <div className="row">
      <Card
        img="https://upload.wikimedia.org/wikipedia/commons/3/34/Jehangir_Hospital_Building.jpg"
        title="Jahangir Hospital"
        spe="Speciality:"
        speciality="MultiSpecialist"
        contact="Contact:"
        contactno="9284954006"
        add="Address"
        address="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad ipsa explicabo quo! Molestias delectus cupiditate magni tenetur ipsum quod"
    />
      
      <Card
        img="https://upload.wikimedia.org/wikipedia/commons/3/34/Jehangir_Hospital_Building.jpg"
        title="Jahangir Hospital"
        spe="Speciality:"
        speciality="MultiSpecialist"
        contact="Contact:"
        contactno="9284954006"
        add="Address"
        address="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad ipsa explicabo quo! Molestias delectus cupiditate magni tenetur ipsum quod"
    />
      
      <Card
        img="https://upload.wikimedia.org/wikipedia/commons/3/34/Jehangir_Hospital_Building.jpg"
        title="Jahangir Hospital"
        spe="Speciality:"
        speciality="MultiSpecialist"
        contact="Contact:"
        contactno="9284954006"
        add="Address"
        address="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad ipsa explicabo quo! Molestias delectus cupiditate magni tenetur ipsum quod"
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
              <h5 class="card-title"> {props.title}</h5>
              <p class="card-text">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">{props.spe}</th>
                      <td>{props.speciality}</td>
                    </tr>
                    <tr>
                      <th scope="col">{props.contact}</th>
                      <td>{props.contactno}</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>{props.add}</th>
                      <td className="card__address">
                      {props.address}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </p>
              <a href="#" class="btn btn-primary hospitalbtn-card">
                View Doctors
              </a>
            </div>
          </div>
        </div>
    )

}
export default Doctors;
