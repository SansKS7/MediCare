import React, { useState } from "react";

function Patient_register() {
  const [formData, setForm] = useState({
    _id: null,
    p_id: "",
    firstName: "",
    lastName: "",
    age: "",
    phoneNo: "",
    address: "",
    password: "",
    repassword: "",
  });

  const handleEvent = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value });
  };

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
              <div className="displayFlex-2">
                <div class="mb-3">
                <label for="disabledTextInput" class="form-label">Patient-ID</label>
                  <input
                    type="text"
                    id="p_id"
                    name="p_id"
                    class="form-control textbox"
                   
                  />
                </div>
                </div>



                <div className="displayFlex">
                <div class="mb-3">
                <label for="disabledTextInput" class="form-label">Enter First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    class="form-control textbox"
                   
                  />
                </div>
              
              <div class="mb-3">
              <label for="disabledTextInput" class="form-label">Enter Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  class="form-control textbox"
                  
                  onChange={handleEvent}
                />
              </div>
              </div>
              <div className="displayFlex">
              <div class="mb-3">
              <label for="disabledTextInput" class="form-label">Enter Age</label>
                <input
                  type="text"
                  id="age"
                  name="age"
                  class="form-control textbox"
                 
                  onChange={handleEvent}
                />
              </div>

              <div class="mb-3">
              <label for="disabledTextInput" class="form-label">Enter Phone No</label>
                <input
                  type="text"
                  class="form-control textbox"
                 
                  id="phoneNo"
                  name="phoneNo"
                  onChange={handleEvent}
                />
              </div>
              </div>
              <div class="mb-3">
              <label for="disabledTextInput" class="form-label">Enter Address</label>
                <input
                  type="text"
                  class="form-control textbox"
                  
                  id="address"
                  name="address"
                  onChange={handleEvent}
                />
              </div>

              <div class="mb-3">
              <label for="disabledTextInput" class="form-label">Enter Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="form-control textbox"
                 
                  onChange={handleEvent}
                />
              </div>

              <div class="mb-3">
              <label for="disabledTextInput" class="form-label">Retype Password</label>
                <input
                  type="password"
                  id="repassword"
                  name="repassword"
                  class="form-control textbox"
                
                  onChange={handleEvent}
                />
              </div>
              
              <button type="submit" class=" displayFlex-2  textalign-center btn btn-primary my-2 ">
               Register 
              </button>

              <center>
                <b> OR</b>{" "}
              </center>
              <button type="submit" class="displayFlex-2  textalign-center btn btn-primary my-2 ">
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
