import React from 'react'
import HeaderP from '../Home/HeaderP'
import { Link } from 'react-router-dom'
function DoctorP() {
  return (
    <>
        
    <HeaderP/>
    <div className='search__back'>
    <form class="search__bar__dr d-flex navbar navbar-expand  fixed-top d-flex align-items-center" role="search">
        <input class="form-control me-2" type="search" placeholder="Search Doctors Here....." aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    

    </div>
    <div className="row">
      
    <Card1

img="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=2000"
hname="Hospital Name"
name="Jehangir Hospital"
drname="Dr. Madhuri Thakare "
spe="Speciality"
speciality="Eye Care"
mail= "Mail"
mailid= "adityakumar@gmail.com"
add= "Address"
address= "Pune Station Road, Opposite Saurabh Hall and Alankar Talkies, Central Excise Colony, Sangamwadi, Pune"
exp= "Experience"
experience=" 4 Years"
charge="Charges"
charges= "500.00 Rs"
qua="Qualification"
qualification= "MBBS, MS"
ph="PhoneNo"
phoneNo="1234567890"

/>  
      <Card1

                img="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=2000"
                hname="Hospital Name"
                name="Jehangir Hospital"
                drname="Dr. Madhuri Thakare "
                spe="Speciality"
                speciality="Eye Care"
                mail= "Mail"
                mailid= "adityakumar@gmail.com"
                add= "Address"
                address= "Pune Station Road, Opposite Saurabh Hall and Alankar Talkies, Central Excise Colony, Sangamwadi, Pune"
                exp= "Experience"
                experience=" 4 Years"
                charge="Charges"
                charges= "500.00 Rs"
                qua="Qualification"
                qualification= "MBBS, MS"
                ph="PhoneNo"
                phoneNo="1234567890"

      />
        
        <Card1

img="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=2000"
hname="Hospital Name"
name="Jehangir Hospital"
drname="Dr. Madhuri Thakare "
spe="Speciality"
speciality="Eye Care"
mail= "Mail"
mailid= "adityakumar@gmail.com"
add= "Address"
address= "Pune Station Road, Opposite Saurabh Hall and Alankar Talkies, Central Excise Colony, Sangamwadi, Pune"
exp= "Experience"
experience=" 4 Years"
charge="Charges"
charges= "500.00 Rs"
qua="Qualification"
qualification= "MBBS, MS"
ph="PhoneNo"
phoneNo="1234567890"

/>
      

</div>
    </>
  )
}

function Card1(props)
{
  return(
    <>
      <div className="col">
          <div class="card doctorcard">
            <img src={props.img} class="card-img-top doctor__card__imgblock" alt="..." />
            <div class="card-body">
              <h5 class="card-title"> {props.drname}</h5>
              <p class="card-text">
              <table class="table">
                  <thead>
                  <tr>
                      <th scope="col">{props.hname}</th>
                      <td>{props.name}</td>
                    </tr>
                 
                  <tr>
                      <th scope="col">{props.spe}</th>
                      <td>{props.speciality}</td>
                    </tr>
                    <tr>
                      <th scope="col">{props.exp}</th>
                      <td>{props.experience}</td>
                    </tr>
                    <tr>
                      <th scope="col">{props.ph}</th>
                      <td>{props.phoneNo}</td>
                    </tr><tr>
                      <th scope="col">{props.qua}</th>
                      <td>{props.qualification}</td>
                    </tr><tr>
                      <th scope="col">{props.charge}</th>
                      <td>{props.charges}</td>
                    </tr>
                    <tr>
                      <th scope="col">{props.mail}</th>
                      <td>{props.mailid}</td>
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
              </p >
              <p className='text-center'>
              <button class="btn btn-primary doctor__btn text-center" type="submit">
            Book Appointment
          </button>
              </p>
             
            </div>
          </div>
        </div>

    </>
  )
}



export default DoctorP