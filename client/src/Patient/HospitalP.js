import React, { useState, useEffect } from "react";
import HeaderP from "./HeaderP";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function HospitalP() {
  const navigate = useNavigate();

  const [query, setQuery] = useState([]);
  console.log(query);

  const URL = "/api/hospital?search=" + query;

  const [hospital, setHospital] = useState([]);

  const getHospitals = async () => {
    const response = await fetch(URL);
    setHospital(await response.json());
    const data = await response.json();
  };

  useEffect(() => {
    getHospitals();
  }, [query]);

  return (
    <>
      {
        // console.log(formData)
      }
      <HeaderP />
      <div className="search__back">
        {/* <form
          className="search__bar__dr d-flex navbar navbar-expand  fixed-top d-flex align-items-center"
          role="search"
          onSubmit={handleSubmit}
        > */}
        <input
          className="form-control me-2 search__bar__dr d-flex navbar navbar-expand  fixed-top d-flex align-items-center"
          type="search"
          id="search_hospitals"
          name="search_hospitals"
          role="search_hospitals"
          placeholder="Search Hospitals Here....."
          aria-label="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        {/* <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form> */}
      </div>

      <div data-testid="my-div-hospital" className="row">
        {hospital.map((curElem) => {
          return (
            <>
              <div className="col">
                <div className="card hospitalcard">
                  <img
                    src={curElem.profileUrl}
                    className="card-img-top"
                    alt="..."
                  />

                  <div className="card-body">
                    <h5 className="card-title"> {curElem.name}</h5>
                    <p className="card-text">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Speciality : </th>
                            <td>{curElem.speciality}</td>
                          </tr>
                          <tr>
                            <th scope="col">Mobile :</th>
                            <td>{curElem.phoneNo}</td>
                          </tr>

                          <tr>
                            <th scope="col">Mail</th>
                            <td>{curElem.mail}</td>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>Address:</th>
                            <td className="card__address">{curElem.address}</td>
                          </tr>
                        </tbody>
                      </table>
                    </p>
                    <p className="text-center"  data-testid="book-appointment">
                      <Link
                        to="/HospitalDr"
                        state={curElem}
                        className="btn btn-primary hospitalbtn-card"
                      >
                        View Doctors
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

function Card1(props) {
  return <></>;
}

export default HospitalP;
