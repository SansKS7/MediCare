import React, { useState } from "react";
function Dr_register() {

  const [formData, setForm] = useState({
    _id: null,
    d_id: "",
    h_id: "",
    hospitalName: "",
    name: "",
    speciality: "",
    mail: "",
    phoneNo: "",
    address: "",
    password: "",
    repassword: "",
    experience: "",
    charges: "",
    qualification: "",
  }
  )

  const handleEvent = (e) => {
    setForm({ ...formData, [e.target.name]: e.target.value })
  }


  return (
    <>
      {console.log(formData)}

      <div id="doctor_register">
        <div className="container">
          <form className="register">
            <fieldset>
              <b className="my-3">
                {" "}
                <center>
                  <legend> Register Doctor Here.</legend>{" "}
                </center>{" "}
              </b>

              <div className="displayFlex">
                <div class="mb-3">
                  <label for="disabledTextInput" class="form-label">Enter Doctor-ID</label>
                  <input
                    type="text"
                    class="form-control textbox"

                    id="d_id"
                    name="d_id"
                    onChange={handleEvent}
                  />
                </div>

                <div class="mb-3">
                  <label for="disabledTextInput" class="form-label">Enter Hospital-ID</label>
                  <input
                    type="text"
                    class="form-control textbox"

                    id="h_id"
                    onChange={handleEvent}
                    name="h_id"
                  />
                </div>
              </div>

              <div className="displayFlex">
                <div class="mb-3">
                  <label for="disabledTextInput" class="form-label">Enter Hospital Name</label>
                  <input
                    type="text"
                    class="form-control textbox"

                    id="hospitalName"
                    onChange={handleEvent}
                    name="hospitalName"
                  />
                </div>

                <div class="mb-3">
                  <label for="disabledTextInput" class="form-label">Enter Doctor Name</label>
                  <input
                    type="text"
                    class="form-control textbox"

                    id="name"
                    onChange={handleEvent}
                    name="name"
                  />
                </div>
              </div>

              <div className="displayFlex">
                <div class="mb-3">
                  <label for="disabledTextInput" class="form-label">Enter Speciality</label>
                  <input
                    type="text"
                    class="form-control textbox"

                    id="speciality"
                    name="speciality"
                    onChange={handleEvent}
                  />
                </div>

                <div class="mb-3">
                  <label for="disabledTextInput" class="form-label">Enter Mail-ID</label>
                  <input
                    type="text"
                    class="form-control textbox"

                    id="mail"
                    onChange={handleEvent}
                    name="mail"
                  />
                </div>
              </div>

              <div className="displayFlex">
                <div class="mb-3">
                  <label for="disabledTextInput" class="form-label">Enter Phone No</label>
                  <input
                    type="text"
                    class="form-control textbox"
                    onChange={handleEvent}
                    id="phoneNo"
                    name="phoneNo"
                  />
                </div>

                <div class="mb-3">
                  <label for="disabledTextInput" class="form-label">Enter Address</label>
                  <input
                    type="text"
                    class="form-control textbox"

                    onChange={handleEvent}
                    id="address"
                    name="address"
                  />
                </div>

              </div>
              <div className="displayFlex">

                <div class="mb-3">
                  <label for="disabledTextInput" class="form-label">Enter Experience</label>
                  <input
                    type="text"
                    class="form-control textbox"

                    onChange={handleEvent}
                    id="experience"
                    name="experience"
                  />
                </div>


                <div class="mb-3">
                  <label for="disabledTextInput" class="form-label">Enter Charges</label>
                  <input
                    type="text"
                    class="form-control textbox"
                    onChange={handleEvent}

                    id="charges"
                    name="charges"
                  />
                </div>
              </div>

              <div className="displayFlex">
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

              </div>
              

              <div class="mb-3">
                <label for="disabledTextInput" class="form-label">Enter Qualification</label>
                <input
                  type="text"
                  onChange={handleEvent}
                  class="form-control textbox"

                  id="qualification"
                  name="qualification"
                />
              </div>
              <button type="submit" class="displayFlex-2  textalign-center btn btn-primary my-2 ">
                Register
              </button>

              <center>
                {" "}
                <b> OR</b>{" "}
              </center>

              <button type="submit" class="displayFlex-2  textalign-center btn btn-primary my-2  ">
                Login
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}

export default Dr_register;
