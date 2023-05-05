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
import Dr_login from "./Doctor/Dr_login";
import Hos_register from "./Hospital/Hos_register";
import Dr_schedule from "./Doctor/Dr_Schedule";
import Patient_Details from "./Hospital/Patient_Details";
import Appointment from "./Doctor/Appointment";
import C_appointment from "./Doctor/C_appointment";
import P_appointment from "./Doctor/P_appointment";
import R_appointment from "./Doctor/R_appointment";
import Dr_Delete from "./Doctor/Dr_Delete";
import Dr_Profile from "./Doctor/Dr_Profile";
import Book_Appointment from "../src/Patient/Book_Appointment"
import Patient_profile from "./Patient/Patient_profile";
import Edit_profile from "./Patient/Edit_profile";
import View_Appointment from "./Patient/View_Appointment";
import Dr_edit from "./Doctor/Dr_edit";
import Hos_Profile from "./Hospital/Hos_Profile";
import Hos_edit from "./Hospital/Hos_edit";
import HospitalDr from "./Patient/HospitalDr";
import Patient_profile_dr from "./Doctor/Patient_profile_dr";

import {

  Route,
  Link,
  Routes,
  BrowserRouter,
  MemoryRouter,
} from "react-router-dom";
import HeaderP from "./Patient/HeaderP";






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
          <Route path="/Dr_schedule" element={<Dr_schedule/>}/>
          <Route path="/Patient_Details" element={<Patient_Details/>}/>
          <Route path="/Appointment" element={<Appointment/>}/>
          <Route path="/C_Appointment" element={<C_appointment/>}/>
          <Route path="/P_Appointment" element={<P_appointment/>}/>
          <Route path="/R_Appointment" element={<R_appointment/>}/>
          <Route path="/Patient_Details" element={<Patient_Details/>}/>
          <Route path="/Dr_Delete" element={<Dr_Delete/>}/>
          <Route path="/Dr_Profile" element={<Dr_Profile/>}/>
         <Route path="/Book_Appointment" element={<Book_Appointment/>}/>
         <Route path="/Patient_profile" element={<Patient_profile/>}/>
         <Route path="/Edit_profile" element={<Edit_profile/>}/>
         <Route path="/View_Appointment" element={<View_Appointment/>}/>
         <Route path="/Dr_edit" element={<Dr_edit/>}/>
         <Route path="/Hos_profile" element={<Hos_Profile/>}/>
        <Route path="/Hos_edit" element={<Hos_edit/>}/>
        <Route path="/HospitalDr" element={<HospitalDr/>}/>
        <Route path="/Patient_profile_dr" element={<Patient_profile_dr/>}/>
        <Route path="/HeaderP" element={<HeaderP/>}/>
          </Routes>
      </BrowserRouter>
      {/* <Dr_home/> */}
 
    </>
  );
}

export default App;
