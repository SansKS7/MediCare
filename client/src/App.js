import "./App.css";
import Hos_home from "./Hospital/Hos_home";
import Dr_home from "./Doctor/Dr_home";
import Hospitals from "./Home/Hospitals.js";
import Doctors from "./Home/Doctors";
import Patient_home from "./Patient/Patient_home";
import Hos_login from "./Hospital/Hos_login";
import Dr_update from "./Doctor/Dr_update";
import Dr_register from "./Doctor/Dr_register";
import Patient_login from "./Patient/Patient_login.js";
import Patient_register from "./Patient/Patient_register.js";
import Home from "./Home/Home.js";
import Contact from "./Home/Contact";
import HospitalP from "./Patient/HospitalP";
import DoctorsP from "./Patient/DoctorsP";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter,
  MemoryRouter,
} from "react-router-dom";
import Dr_login from "./Doctor/Dr_login";
import Hos_register from "./Hospital/Hos_register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path="/" element={<Hos_Home/>} />
          <Route exact path="/dr_register" element={<Dr_register/>} />
          <Route exact path="/dr_update" element={<Dr_update/>} /> 
      */}
      
          <Route exact path="/" element={<Home/>} />
          <Route path="/Home" element={<Home/>}/>
          <Route path="/Contact" element={<Contact/>}/> 
        
          
          <Route path="/login" element={<Dr_login/>}/>
          <Route path="/login" element={<Hos_login/>}/> 
          
           <Route path="/patient_login" element={<Patient_login />} />
          <Route path="/patient_register" element={<Patient_register />} />
          <Route path="/patient_home" element={<Patient_home/>}/>
          <Route path="/hospitals" element={<Hospitals/>}/>
          <Route path="/doctors" element={<Doctors/>}/> 
          
          <Route path="/dr_login" element={<Dr_login/>} />
          <Route path="/dr_register" element={<Dr_register/>}/>
          <Route path="/hos_login" element={<Hos_login/>}/>
          <Route path="/hos_register" element={<Hos_register/>}/>
          <Route path="/hos_home" element={<Hos_home/>}/>
          <Route path="/dr_home" element={<Dr_home/>}/>
          <Route path="/dr_update" element={<Dr_update/>}/>
          <Route path="HospitalP" element={<HospitalP/>}/>
          <Route path="DoctorsP" element={<DoctorsP/>}/>

        </Routes>
      </BrowserRouter>
      {/* <Dr_home/> */}
 
    </>
  );
}

export default App;
