import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminTable() {
  const [list,setList] = useState([]);
  const [loader,setLoader] = useState(true);
  useEffect(() => {
    axios.get('https://taxi-server-bmrh.onrender.com/booking/list').then((data) => {
        setList(data.data);
        setLoader(false)
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
                  <thead>
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
                  </thead>
                  <tbody>
                      {
                        loader ? ( 
                          <tr className='text-center'>
                            <td colSpan={8}>Data Fetching ....</td>
                          </tr>
                          ) :  
                        list.map((values) =>(
                          <tr key={values._id}>
                            <td>{values._id}</td>
                            <td>{values.carType}</td>
                            <td>{values.userPackage}</td>
                            <td>{values.userName}</td>
                            <td>{values.fromUser}</td>
                            <td>{values.toUser}</td>
                            <td>{values.userMobile}</td>
                            <td>{values.userDate}</td>
                          </tr>
                        ))
                      }
                  </tbody>
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