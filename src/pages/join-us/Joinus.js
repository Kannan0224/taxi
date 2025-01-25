import React, { useState } from 'react';
import './joinus.css';
import { useFormik } from 'formik';
import axios from 'axios';
import { Modal , Button} from 'react-bootstrap';
import { errorIcon, successIcon } from '../../assets/images/Image';

const validate = values =>{
    const errors = {};
    if(!values.userName){
        errors.userName = 'Name is Required'
    }
    if(!values.phoneNo){
        errors.phoneNo = 'Phone No is Required'
    }
    if(!values.location){
        errors.location = 'Location is Required'
    }
    if(!values.regNo){
        errors.regNo = 'Registration No is Required'
    }
    if(!values.vechileType){
        errors.vechileType = 'Vechile Type is Required'
    }
    if(!values.message){
        errors.message = 'Message is Required'
    }
    return errors
}

function Joinus() {
    const [modal,setModal] = useState(false)
    const [responseData,setResponsedata] = useState({});
    const handleClose = () => setModal(false);
    const formik = useFormik({
        initialValues:{
            userName:"",
            phoneNo:"",
            location:"",
            regNo:"",
            vechileType:"",
            message:"",
        },
        validate,
        onSubmit:values=>{
            axios.post("https://taxi-server-bmrh.onrender.com/booking/joinUs",values).then((response)=>{
                // console.log(response);
                setResponsedata(response.data);
                setModal(true)
              })
        }
    })
  return (
    <>
    <section>
            <div className="container">
                <div className="row multiple-row v-align-row">
                  <div className="col-lg-12 col-md-12 text-center mt-5">
                    <div className="col-wrap">
                      <div className="block-heading mb-5 mt-5">
                      <span className="block-sub-heading">RoyalVipCallTaxi // Become a Driver</span>
                        <h2 className="block-main-heading pack-heading mt-3">BECOME A DRIVER</h2>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
    </section>
    <section className='serv-bg-col'>
            <div className='container'>
                <div className='row'>
                    <h6 className='text-center mt-5'>If you need anything from us, feel free to get in touch!</h6>
                    <h6 className='text-center'>We are available from 10 AM - 6 PM</h6>
                    <h6 className='text-center mb-5'>Call us @ 9087777361</h6>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                <div className="col-lg-8">
                                        <form onSubmit={formik.handleSubmit} action="#" method="post" id="contact_form" className="waituk_contact-form join-form">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" onChange={formik.handleChange} name='userName' onBlur={formik.handleBlur} value={formik.values.userName} placeholder="YOUR NAME *" id="con_fname" 
                                                        className={formik.touched.userName && formik.errors.userName ? "form-control border-red":"form-control"}/>
                                                        {
                                                            formik.touched.userName && formik.errors.userName ? <span className='form-err-msg'>{formik.errors.userName}</span>:null
                                                        }
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="number" onChange={formik.handleChange} onBlur={formik.handleBlur} name='phoneNo' value={formik.values.phoneNo} placeholder="YOUR PHONE NO *" id="con_lname"
                                                         className={formik.touched.phoneNo && formik.errors.phoneNo ? "form-control border-red":"form-control"}/>
                                                      {
                                                            formik.touched.phoneNo && formik.errors.phoneNo ? <span className='form-err-msg'>{formik.errors.phoneNo}</span>:null
                                                      }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" onChange={formik.handleChange} name='location' onBlur={formik.handleBlur} value={formik.values.location} placeholder="Your Location (Area/City) " id="con_phone"
                                                         className={formik.touched.location && formik.errors.location ?"form-control border-red":"form-control" }/>
                                                        {
                                                                formik.touched.location && formik.errors.location ? <span className='form-err-msg'>{formik.errors.location}</span>:null
                                                        }
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" onChange={formik.handleChange} name='regNo' onBlur={formik.handleBlur} value={formik.values.regNo} placeholder="Your Vehicle Registration No *" id="con_email" 
                                                        className={formik.touched.regNo && formik.errors.regNo ? "form-control border-red":"form-control"}/>
                                                        {
                                                                formik.touched.regNo && formik.errors.regNo ? <span className='form-err-msg'>{formik.errors.regNo}</span>:null
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row'>
                                            <div className="col-md-6">
                                                    <div className="form-group">
                                                    <select className={formik.touched.vechileType && formik.errors.vechileType ?"form-select  select-inp form-select-lg fs-6 border-red":"form-select select-inp form-select-lg fs-6"} onChange={formik.handleChange} onBlur={formik.handleBlur} name='vechileType' value={formik.values.vechileType} aria-label=".form-select-lg example">
                                                        <option selected>SELECT VEHICLE TYPE</option>
                                                         <option value="Alto">Alto</option>
                                                         <option value="amaze">Amaze</option>
                                                         <option value="aspire">Aspire</option>
                                                         <option value="bolero">Bolero</option>
                                                         <option value="bolt">Bolt</option>
                                                         <option value="celerio">Celerio</option>
                                                         <option value="dzire">Dzire</option>
                                                         <option value="eco">Eco</option>
                                                         <option value="enjoy">Enjoy</option>
                                                         <option value="ertiga">Ertiga</option>
                                                         <option value="etios">Etios</option>
                                                         <option value="figo">Figo</option>
                                                         <option value="indica">Indica</option>
                                                         <option value="indigo">Indigo</option>
                                                         <option value="innova">Innova Crysta</option>
                                                         <option value="liva">Liva</option>
                                                         <option value="lodgy">Lodgy</option>
                                                         <option value="marazzo">Marazzo</option>
                                                         <option value="sumo">Sumo</option>
                                                         <option value="sunny">Sunny</option>
                                                         <option value="tavera">Tavera</option>
                                                         <option value="tembo">Tempo Traveller</option>
                                                         <option value="wagon">Wagon R</option>
                                                         <option value="xylo">Xylo</option>
                                                         <option value="others">Others</option>
                                                         </select>
                                                         {
                                                                formik.touched.vechileType && formik.errors.vechileType ? <span className='form-err-msg'>{formik.errors.vechileType}</span>:null
                                                         }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <textarea onChange={formik.handleChange} name='message' onBlur={formik.handleBlur} value={formik.values.message} 
                                                className={formik.touched.message && formik.errors.message ?"form-control border-red":"form-control"} placeholder="MESSAGE *" id="con_message"></textarea>
                                                {
                                                        formik.touched.message && formik.errors.message ? <span className='form-err-msg'>{formik.errors.message}</span>:null
                                                }
                                            </div>
                                            <div className="btn-container">
                                                <button type='submit' id="btn_sent" className="btn join-btn btn-arrow">SUBMIT</button>
                                            </div>
                                        </form>
                                    </div>
                                 </div>
                             </div>
    </section>
    <Modal
      show={modal}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {responseData.status === 'success' ? 'Your application submited ' : 'Application Failed'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex flex-column align-items-center'>
          <img src={responseData.status === 'success' ? successIcon : errorIcon } alt='successIcon' style={{width:'200px',height:'200px'}}></img>
          {
            responseData.status === 'success' ? ( <p style={{marginTop:"10px",color:"#2296f3",fontWeight:'bolder',fontSize:'22px'}}>
             Thank you for your Interest , we will getback soon  
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
    </>
  )
}

export default Joinus;