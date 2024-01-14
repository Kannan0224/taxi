import React, { useState } from 'react';
import './form.css';
import { errorIcon, indica, innova, nissan, successIcon, tavera, tempo, xylo } from '../../assets/images/Image';
import { useFormik } from 'formik';
import axios from 'axios';
import {Modal,Button } from 'react-bootstrap'

const validate = values =>{
  const errors = {};
  if(!values.userPackage){
    errors.userPackage = "Package is Required!";
  }
  if(!values.carType){
    errors.carType = "Package is Required!";
  }
  if(!values.userName){
    errors.userName = "Your Name is Required!";
  }
  if(!values.fromUser){
    errors.fromUser = "From Location is Required!";
  }
  if(!values.toUser){
    errors.toUser = "To location is Required!";
  }
  if(!values.userMobile){
    errors.userMobile = "Mobile No is Required!";
  }
  if(!values.userDate){
    errors.userDate = "Date is Required!";
  }
  return errors;
}

function Form() {
 const [modal,setModal]= useState(false);
 const [responseData,setResponsedata] = useState({});
  const formik = useFormik({
    initialValues:{
      carType : 'indica',
      userPackage:'outstation',
      userName:'',
      fromUser:'',
      toUser:'',
      userMobile:'',
      userDate:''
    },
    validate,
    onSubmit: values =>{
      console.log(values);
      // model.show();
      axios.post("https://precious-jade-dove.cyclic.app/booking/insert",values).then((response)=>{
        // console.log(response);
        setResponsedata(response.data);
        setModal(true)
      })
    }
  })
  const images = {
    "nissan" : nissan,
    "tavera" : tavera,
    "indica" : indica,
    "xylo" : xylo,
    "innova" : innova,
    "tempo" : tempo
  }
  const handleClose = () => setModal(false);
  return (
   <>
   <div className='container-fluid booking-container banner-form-sty'>
    <div className='row justify-content-end'>
        <div className='col-lg-8 model-container'>
          <form onSubmit={formik.handleSubmit} method="post" id="contact_form" className="waituk_contact-form home-page-form">
          <h2>Get Taxi Online</h2>
          <div className='cars-container container-fluid mb-2'>
            <div className='col-12'>
              <div className='row'>
                <div className='cars-name' style={{padding:'0'}}>
                  <div className='flex justify-center' style={{height:'150px',marginBottom:'30px'}}>
                    <img src={images[formik.values.carType]} className="img-fluid form-cars" alt="..."/>
                  </div>
                  <div className="form-group form-err">
                    <select className={formik.touched.carType && formik.errors.carType ?"form-select  select-inp form-select-lg fs-6 border-red":"form-select select-inp form-select-lg fs-6"}
                    onChange={formik.handleChange} name='carType' value={formik.values.carType}
                      onBlur={formik.handleBlur}  aria-label=".form-select-lg example">
                      <option value="indica" >Indica</option>
                      <option value="nissan" >Nissan</option>
                      <option value="tavera" >Tavera</option>
                      <option value="xylo" >Xylo</option>
                      <option value="innova" >Innova</option>
                      <option value="tempo" >Tempo</option>
                      </select> 
                      {
                      formik.touched.carType && formik.errors.carType ? <span className='form-err-msg'>{formik.errors.carType}</span>:null
                      }
                </div>
                </div>
              </div>
            </div>
          </div>
      <div className="row">
         <div className="col-sm-6">
         <div className="form-group form-err">
          <select className={formik.touched.userPackage && formik.errors.userPackage ?"form-select  select-inp form-select-lg fs-6 border-red":"form-select select-inp form-select-lg fs-6"}
           onChange={formik.handleChange} name='userPackage' value={formik.values.userPackage}
            onBlur={formik.handleBlur}  aria-label=".form-select-lg example">
             <option value="outstation">Outstation package</option>
             <option value="local">Local package</option>
             </select> 
             {
            formik.touched.userPackage && formik.errors.userPackage ? <span className='form-err-msg'>{formik.errors.userPackage}</span>:null
             }
          </div>
          </div>
          <div className="col-sm-6">
          <div className="form-group f-group form-err">
          <input type="text" onChange={formik.handleChange} value={formik.values.userName} onBlur={formik.handleBlur} name='userName' placeholder="NAME *" id="con_lname"
          className={formik.touched.userName && formik.errors.userName ?"form-control border-red":"form-control"}/>
               {
               formik.touched.userName && formik.errors.userName ? <span className='form-err-msg'>{formik.errors.userName}</span>:null 
               }
            </div>
            </div>
           </div>
           <div className="row">
               <div className="col-sm-6">
                   <div className="form-group f-group form-err">
                       <input type="text" onChange={formik.handleChange} value={formik.values.fromUser} onBlur={formik.handleBlur} name='fromUser' placeholder="FROM *" id="con_phone" 
                       className={formik.touched.fromUser && formik.errors.fromUser ? "form-control border-red":"form-control"}/>
                       {
                       formik.touched.fromUser && formik.errors.fromUser ? <span className='form-err-msg'>{formik.errors.fromUser}</span>:null
                       }
                    </div>
                </div>
            <div className="col-sm-6">
                 <div className="form-group f-group form-err">
                       <input type="text" onChange={formik.handleChange} value={formik.values.toUser} onBlur={formik.handleBlur} name='toUser' placeholder="TO *" id="con_email" 
                       className={formik.touched.toUser &&  formik.errors.toUser ? "form-control border-red":"form-control"}/>
                       {
                       formik.touched.toUser &&  formik.errors.toUser ? <span className='form-err-msg'>{formik.errors.toUser}</span>:null
                       }
                    </div>
                  </div>
                </div>
            <div className="row">
                 <div className="col-sm-6">
                   <div className="form-group f-group form-err">
                      <input type="number" onChange={formik.handleChange} value={formik.values.userMobile} onBlur={formik.handleBlur} name='userMobile' placeholder="MOBILE NO *" id="con_phone" 
                      className={formik.touched.userMobile && formik.errors.userMobile ? "form-control border-red":"form-control"}/>
                      {
                       formik.touched.userMobile && formik.errors.userMobile ? <span className='form-err-msg'>{formik.errors.userMobile}</span>:null
                      }
                   </div>
                 </div>
             <div className="col-sm-6">
                  <div className="form-group f-group form-err">
                      <input type="datetime-local" onChange={formik.handleChange} value={formik.values.userDate} onBlur={formik.handleBlur} name='userDate' placeholder="SUBJECT *" id="con_email"
                       className={formik.touched.userDate && formik.errors.userDate ? "form-control border-red":"form-control"}/>
                      {
                       formik.touched.userDate && formik.errors.userDate ? <span className='form-err-msg'>{formik.errors.userDate}</span>:null
                      }
                  </div>
                 </div>
           </div>
              <div className='row'>
                <div className='col-12'>
                <div className="btn-container">
                <button type='submit' id="btn_sent" className="btn btn-arrow form-btn btn-contact">SUBMIT</button>
               </div>
                </div>
              </div>
          </form>
        </div>
    <Modal
      show={modal}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {responseData.status === 'success' ? 'Booking Conformed' : 'Booking Failed'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex flex-column align-items-center'>
          <img src={responseData.status === 'success' ? successIcon : errorIcon } alt='successIcon' style={{width:'200px',height:'200px'}}></img>
          {
            responseData.status === 'success' ? ( <p style={{marginTop:"10px",color:"#2296f3",fontWeight:'bolder',fontSize:'22px'}}>
            Booking Id : {responseData.bookingId}
          </p>)   : (<p style={{marginTop:"10px",color:"#fe646f",fontWeight:'bolder',fontSize:'22px'}}>
            Internal server Error 
          </p>)
          }
        </div>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
      </Modal.Footer>
    </Modal>
    </div>
   </div>
   </>
  )
}

export default Form;