import React ,{ useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useStateValue } from "../Context/StateProvider";

export default function () {
    const [ {HospitalUser} , dispatchUser] = useStateValue()??[{}, () => {}];
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
        <header id="header" className="fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">
                <div className="logo">
                    <h1><a href="index.html">MediCare</a></h1>
                    <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a>
                </div>
                <nav id="navbar" className="navbar">
                    <ul>
                        <li><Link to={"/Hos_home"} className='underline'>Home</Link></li>
                    
                        <li><Link to={"/Hos_Profile"} className='underline'>View Profile</Link></li>
                        <li><Link to={"/Dr_register"} className='underline'>Add New Doctor</Link></li>
                        <li><Link to={"/Dr_Delete"} className='underline'>View Doctor Details</Link></li>
                        <li><button type="submit" className="getstarted scrollto" onClick={logoutUser}>Logout</button></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>

            </div>
        </header>
        
    )
}

