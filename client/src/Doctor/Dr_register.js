import React ,{useState} from "react";
function Dr_register() {

  const [ formData , setForm ] = useState({
    _id:null,
    d_id:"",
    h_id:"",
    hospitalName:"",
    name:"",
    speciality:"",
    mail:"",
    phoneNo:"",
    address:"",
    password:"",
    repassword:"",
    experience:"",
    charges:"",
    qualification:"",
 }
)

const handleEvent = (e) => {
 setForm({...formData, [e.target.name]: e.target.value })
}


  return (
    <>
     { console.log(formData)}
   
    <div id="doctor_register">
      <div className="container">
        <form className="register">
          <fieldset>
            <b className="my-3">
              {" "}
              <center>
                <legend> Register Your Doctor Here .</legend>{" "}
              </center>{" "}
            </b>

            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Doctor's ID"
                id="d_id"
                name="d_id"
                onChange={handleEvent}
              />
            </div>

            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Hospital ID"
                id="h_id"
                onChange={handleEvent}
                name="h_id"
              />
            </div>

            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Hospital's Name"
                id="hospitalName"
                onChange={handleEvent}
                name="hospitalName"
              />
            </div>

            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Doctor's Name"
                id="name"
                onChange={handleEvent}
                name="name"
              />
            </div>

            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Speciality"
                id="speciality"
                name="speciality"
                onChange={handleEvent}
              />
            </div>

            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Email"
                id="mail"
                onChange={handleEvent}
                name="mail"
              />
            </div>

            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Phone Number"
                onChange={handleEvent}
                id="phoneNo"
                name="phoneNo"
              />
            </div>

            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Address"
                onChange={handleEvent}
                id="address"
                name="address"
              />
            </div>

            <div class="mb-3">
              <input
                type="password"
                id="password"
                name="password"
                class="form-control"
                onChange={handleEvent}
                placeholder=" Enter Password"
              />
            </div>

            <div class="mb-3">
              <input
                type="password"
                id="repassword"
                name="repassword"
                class="form-control"
                onChange={handleEvent}
                placeholder=" Retype Password"
              />
            </div>

            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Experience "
                onChange={handleEvent}
                id="experience"
                name="experience"
              />
            </div>

            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                onChange={handleEvent}
                placeholder="Enter Charges "
                id="charges"
                name="charges"
              />
            </div>

            <div class="mb-3">
              <input
                type="text"
                onChange={handleEvent}
                class="form-control"
                placeholder="Enter Qualification"
                id="qualification"
                name="qualification"
              />
            </div>
            <button type="submit" class="btn btn-primary my-2 ">
              Register
            </button>

            <center>
              {" "}
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

export default Dr_register;
