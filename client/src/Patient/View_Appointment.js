import React from 'react'
import HeaderP from '../Home/HeaderP'

function View_Appointment() {
  return (
    <>
<HeaderP/>
<div className="table-container">
                <table className="table">
                    <thead className="thead-dark1">
                        <tr>
                            <th scope="col">Sr.No</th>
                            <th scope="col">Hospital Name</th>
                            <th scope="col">Doctor Name</th>
                            
                            <th scope="col"> Time</th>
                            <th scope="col">Message</th>
                            <th scope="col">Appointment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            
                            <td><button className="btn btn-primary">Pending</button></td>
                        </tr>
                        
                    </tbody>
                </table>


            </div>
    </>
  )
}

export default View_Appointment
