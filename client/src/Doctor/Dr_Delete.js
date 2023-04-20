import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import Hos_header from "../Hospital/Hos_header";
function Dr_schedule() {
return(
    <>
    <Hos_header/>
    <div className="table-container">
                <table className="table">
                    <thead className="thead-dark1">
                        <tr>
                            <th scope="col">Sr.No</th>
                            <th scope="col">Doctor ID</th>
                            <th scope="col">Doctor Name</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td><button className="btn btn-danger">Delete</button></td>
                        </tr>
                       
                    </tbody>
                </table>


            </div>
    </>
      );
}

export default Dr_schedule;
