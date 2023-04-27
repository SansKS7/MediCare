import React ,{ useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useStateValue } from "../Context/StateProvider";

export default function () {
    const [ {HospitalUser} , dispatchUser] = useStateValue();
  const navigate=useNavigate()

    
  function logoutUser()
  {
      window.localStorage.clear();
      window.location.reload();
  }


  useEffect(()=>{
    if(HospitalUser === null || HospitalUser === "null")
    {
      navigate("/Hos_login")
    }
  })
  
    return (
        <header id="header" class="fixed-top d-flex align-items-center">
            <div class="container d-flex align-items-center justify-content-between">
                <div class="logo">
                    <h1><a href="index.html">MediCare</a></h1>
                    <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a>
                </div>
                <nav id="navbar" class="navbar">
                    <ul>
                        <li><Link to={"/Hos_home"} className='underline'>Home</Link></li>
                    
                        <li><Link to={"/Hos_Profile"} className='underline'>View Profile</Link></li>
                        <li><Link to={"/Dr_register"} className='underline'>Add New Doctor</Link></li>
                        <li><Link to={"/Patient_Details"} className='underline'>View Patient Details</Link></li>
                        <li><Link to={"/Dr_Delete"} className='underline'>View Doctor Details</Link></li>
                        <li><button type="submit" class="getstarted scrollto" onClick={logoutUser}>Logout</button></li>
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </header>
        
    )
}

