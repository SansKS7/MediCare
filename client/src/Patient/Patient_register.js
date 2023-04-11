import React, {useState} from "react";


function Patient_register() {

  const [ formData , setForm ] = useState({
    _id:null,
    p_id:"",
    firstName:"",
    lastName:"",
    age:"",
    phoneNo:"",
    address:"",
    password:"",
    repassword:"",
    
 }
)

const handleEvent = (e) => {
 setForm({...formData, [e.target.name]: e.target.value })
}

  return (

    <>
      {console.log(formData)}
   
    <div id="hospital_register">
      <div className="container">
        <form className="register">
          <fieldset>
            <b className="my-2">
              {" "}
              <center>
                <legend>Patient's Register</legend>{" "}
              </center>{" "}
            </b>
            <div class="mb-3">
              <input
                type="text"
                id="p_id"
                name="p_id"
                class="form-control"
                placeholder="Enter Patient ID"
              />
            </div>

            <div class="mb-3">
              <input
                type="text"
                id="firstName"
                name="firstName"
                class="form-control"
                placeholder="Enter Patient First Name"
              />
            </div>

            <div class="mb-3">
              <input
                type="text"
                id="lastName"
                name="lastName"
                class="form-control"
                placeholder="Enter Patient Last Name"
                onChange={handleEvent}
              />
            </div>

            <div class="mb-3">
              <input
                type="text"
                id="age"
                name="age"
                class="form-control"
                placeholder="Enter Age"
                onChange={handleEvent}
              />
            </div>

            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Phone Number"
                id="phoneNo"
                name="phoneNo"
                onChange={handleEvent}
              />
            </div>

            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Address"
                id="address"
                name="address"
                onChange={handleEvent}
              />
            </div>

            <div class="mb-3">
              <input
                type="password"
                id="password"
                name="password"
                class="form-control"
                placeholder=" Enter Password"
                onChange={handleEvent}
              />
            </div>

            <div class="mb-3">
              <input
                type="password"
                id="repassword"
                name="repassword"
                class="form-control"
                placeholder=" Retype Password"
                onChange={handleEvent}
              />
            </div>

            <button type="submit" class="btn btn-primary my-2 ">
              Register
            </button>

            <center>
              <b> OR</b>{" "}
            </center>
            <button type="submit" class="btn btn-primary my-2 ">
              Login
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  </>
  
  );
}

export default Patient_register;
