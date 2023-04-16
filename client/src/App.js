import "./App.css";
import Hos_home from "./Hospital/Hos_home";
import Dr_home from "./Doctor/Dr_home";
import Patient_home from "./Patient/Patient_home";
import Hos_login from "./Hospital/Hos_login";
import Dr_register from "./Doctor/Dr_register";
import Patient_login from "./Patient/Patient_login.js";
import Patient_register from "./Patient/Patient_register.js";
import Home from "./Home/Home.js";

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
          <Route exact path="/" element={<Home/>} />
          <Route path="/patient_login" element={<Patient_login />} />
          <Route path="/patient_register" element={<Patient_register />} />
          <Route path="/patient_home" element={<Patient_home/>}/>
          
          <Route path="/dr_login" element={<Dr_login/>} />
          <Route path="/dr_register" element={<Dr_register/>}/>
          <Route path="/hos_login" element={<Hos_login/>}/>
          <Route path="/hos_register" element={<Hos_register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
