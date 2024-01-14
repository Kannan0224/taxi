import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminTable() {
  const [list,setList] = useState([]);
  useEffect(() => {
    axios.get('https://precious-jade-dove.cyclic.app/booking/list').then((data) => {
        setList(data.data);
      })
  },[]);

  return (
    <>
     <section>
            <div className="container">
                <div className="row multiple-row v-align-row">
                  <div className="col-lg-12 col-md-12 text-center mt-5">
                    <div className="col-wrap">
                      <div className="block-heading mb-5 mt-5">
                        <h6 className="block-main-heading pack-heading mt-3">BOOKED LIST</h6>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
         </section>
         <section>
          <div className='container-fluid'>
            <div className='row'>
            <div className="demo-wrapper mt-0 mb-3">
               <div className="data-table">
                  <table className="table table-striped">
                    <tr>
                        <th>Bookin Id</th>
                        <th>CarType</th>
                        <th>Package</th>
                        <th>Name</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Mobile Number</th>
                        <th>Date</th>
                    </tr>
                    {
                      list.map((values) =>(
                        <tr>
                          <td>{values.ID}</td>
                          <td>{values.cartype}</td>
                          <td>{values.package}</td>
                          <td>{values.username}</td>
                          <td>{values.bookFrom}</td>
                          <td>{values.bookTo}</td>
                          <td>{values.mobileNumber}</td>
                          <td>{values.bookingdate}</td>
                        </tr>
                      ))
                    }
              </table>
            </div>
          </div>
         </div>
        </div>
      </section>
    </>
  )
}

export default AdminTable;