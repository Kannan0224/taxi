import React, { useState } from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBInput} from 'mdb-react-ui-kit';
import './admin.css';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const navigate = useNavigate();

  const[adminTable,setAdminTable]=useState("");

  const handleChange =(e)=>{
    setAdminTable(e.target.value)
  }
  const handleRout=()=>{
    if(adminTable==="Admin123"){
      navigate("/adminTable")
    }
  }

  return (
    <>
    <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow style={{marginTop:"6rem"}}>

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample" />
        </MDBCol>

        <MDBCol col='4' md='6' style={{marginTop:"3rem"}}>

          <div className="d-flex flex-row align-items-center">

            <h1 className="lead fw-normal mb-0 me-3">RoyalVipCallTaxi</h1>
          </div>
          <div className='d-flex flex-column '>
            <input onChange={handleChange} className='form-control' wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"></input>
            <button onClick={handleRout} type='submit' id="btn_sent" className="btn btn-admin btn-arrow form-btn btn-contact mt-10">SUBMIT</button>
          </div>
        </MDBCol>

      </MDBRow>
    </MDBContainer>

    </>
  );
}

export default Admin;