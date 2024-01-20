import React, { useState } from 'react';
import './contact.css';
import { FaMapLocationDot,FaHeadset } from "react-icons/fa6";
import { FaFacebook,FaInstagram,FaYoutube,FaTwitter} from "react-icons/fa";
import { LuMails } from "react-icons/lu";
import { useFormik } from 'formik';
import { Modal,Button} from 'react-bootstrap'
import axios from 'axios';
import { errorIcon, successIcon } from '../../assets/images/Image';

const validate = values =>{
    const errors={};
    if(!values.userName){
        errors.userName="Name is Required"
    }
    if(!values.eMail){
        errors.eMail="Email is Required"
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.eMail)) {
        errors.eMail = 'Invalid email address';
      }
   
    if(!values.number){
        errors.number="Phone No is Required"
    }
    if(!values.subject){
        errors.subject="Subject is Required"
    }
    if(!values.message){
        errors.message="Message is Required"
    }
    return errors
}

function Contact() {
    const [modal,setModal] = useState(false)
    const [responseData,setResponsedata] = useState({});
    const handleClose = () => setModal(false);
    const formik = useFormik({
        initialValues:{
            userName:"",
            eMail:"",
            number:"",
            subject:"",
            message:"",
        },
        validate,
        onSubmit:values=>{
            axios.post("https://precious-jade-dove.cyclic.app/booking/complaints",values).then((response)=>{
                // console.log(response);
                setResponsedata(response.data);
                setModal(true)
              })
        }
    })
    /* formik.handleSubmit = async ()=>{
        await axios.post(API_URL,
         formik.values
        )
      } */
    console.log(formik.values);

  return (
    <>
     <section>
            <div className="container">
                <div className="row multiple-row v-align-row">
                  <div className="col-lg-12 col-md-12 text-center mt-5">
                    <div className="col-wrap">
                      <div className="block-heading mb-5 mt-5">
                      <span className="block-sub-heading">RoyalVipCallTaxi // Contact</span>
                        <h2 className="block-main-heading pack-heading mt-3">CONTACT</h2>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
    </section>
    <div className="content-wrapper">
                    <section className="content-block pb-0 serv-bg-col">
                        <div className="container">
                            <div className="contact-container">
                                <p className='contact-para mb-0'>If you need anything from us, feel free to get in touch!</p><br/>
                                <p className='text-center'>We are available 24/7</p>
                                <p className='text-center'>Call Us @ <a href='#0'>9087777361</a></p>
                                <p className='text-center'>Toll Free - <a href='#0'>9087777362</a></p>
                                <h2 className="content-title contact-title text-center">SUGGESTIONS & COMPLAINTS</h2>
                                <div className="row">
                                    <div className="col-lg-6">
                                        {/* contact form */}
                                        <form onSubmit={formik.handleSubmit} action="#" method="post" id="contact_form" className="waituk_contact-form">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} name='userName' value={formik.values.userName} placeholder="YOUR NAME *" id="con_fname"
                                                         className={formik.touched.userName && formik.errors.userName ? "form-control border-red":"form-control"}/>
                                                        {
                                                            formik.touched.userName && formik.errors.userName ? <spam className='form-err-msg'>{formik.errors.userName}</spam>:null
                                                        }
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} name='eMail' value={formik.values.eMail}
                                                         placeholder="YOUR EMAIL *" id="con_lname" className={formik.touched.eMail && formik.errors.eMail ? "form-control border-red":"form-control"}/>
                                                        {
                                                             formik.touched.eMail && formik.errors.eMail ? <spam className='form-err-msg'>{formik.errors.eMail}</spam>:null
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} name='number' value={formik.values.number} placeholder="YOUR NUMBER *"
                                                         id="con_phone" className={formik.touched.number && formik.errors.number ? "form-control border-red":"form-control"}/>
                                                        {
                                                             formik.touched.number && formik.errors.number ? <spam className='form-err-msg'>{formik.errors.number}</spam>:null
                                                        }
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" onChange={formik.handleChange} onBlur={formik.handleBlur} name='subject' value={formik.values.subject} placeholder="SUBJECT *" 
                                                        id="con_email"  className={formik.touched.subject && formik.errors.subject ?"form-control border-red":"form-control"}/>
                                                        {
                                                             formik.touched.subject && formik.errors.subject ? <spam className='form-err-msg'>{formik.errors.subject}</spam>:null
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <textarea placeholder="MESSAGE *" onChange={formik.handleChange} onBlur={formik.handleBlur} name='message' value={formik.values.message}
                                                 className={ formik.touched.message && formik.errors.message ?"form-control border-red":"form-control" } id="con_message"></textarea>{
                                                     formik.touched.message && formik.errors.message ? <spam className='form-err-msg'>{formik.errors.message}</spam>:null
                                                }
                                            </div>
                                            <div className="btn-container">
                                                <button type='submit' id="btn_sent" className="btn btn-arrow btn-contact">SUBMIT</button>
                                                <p id="error_message"> </p>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-lg-6 col-xl-5 offset-xl-1">
                                        <div className="info-slot">
                                            <div className="icon"><span className="custom-icon-map-marker"><FaMapLocationDot/></span></div>
                                            <div className="text">
                                                <address>No.2, Main Road
                                                    <br/>Sainathapuram, Vellore
                                                    <br/>Tamil Nadu 632001
                                                    <br/>Land Mark:Opposite to SBI</address>
                                            </div>
                                        </div>
                                        <div className="info-slot">
                                            <div className="icon icon-head-set"><span className="custom-icon-headset"><FaHeadset/></span></div>
                                            <div className="text">
                                                <ul className="content-list contact-list">
                                                    <li><span className="label-text">BOOKING</span> <a href="#0">9087777361</a></li>
                                                    <li><span className="label-text">WHATSAPP</span> <a href="#0">9087777361</a></li>
                                                    <li><span className="label-text">COMPLAINTS</span> <a href="#0">9087777361</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="info-slot">
                                            <div className="icon icon-head-set"><span className="custom-icon-message"><LuMails/></span></div>
                                            <div className="text">
                                                <ul className="content-list contact-list">
                                                    <li><a href="#0">RoyalVipCallTaxi@gmail.com</a></li>
                                                    <li><a href="#0">RoyalVipCallTaxi@gmail.com</a></li>
                                                    <li><a href="#0">RoyalVipCallTaxi@gmail.com</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="content-block text-center serv-bg-col">
                        <div className="container">
                        <div className="demo-wrapper">
                                <h3 className="text-center element-heading mb-4">SOCIAL</h3>
                                <ul className="social-network mb-0">
                                    <li><a href="#0"><span className="icon-facebook"><FaFacebook className='contact-soc-ico'/></span></a></li>
                                    <li><a href="#0"><span className="icon-twitter"><FaInstagram className='contact-soc-ico'/></span></a></li>
                                    <li><a href="#0"><span className="icon-google-plus"><FaYoutube className='contact-soc-ico'/></span></a></li>
                                    <li><a href="#0"><span className="icon-pinterest"><FaTwitter className='contact-soc-ico'/></span></a></li>
                                </ul>
                            </div>
                            </div>
                            </section>
                    <div className="map-holder embed-responsive-21by9 grayscaled-map">
                    <iframe className='embed-responsive-item map-style' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248904.42357900031!2d78.9535247341502!3d12.899257165091576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad38e61fa68ffb%3A0xbedda6917d262b5e!2sVellore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1703687531401!5m2!1sen!2sin" title="map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
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
          {responseData.status === 'success' ? 'Complaint Registered' : 'Complaint Failed'}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex flex-column align-items-center'>
          <img src={responseData.status === 'success' ? successIcon : errorIcon } alt='successIcon' style={{width:'200px',height:'200px'}}></img>
          {
            responseData.status === 'success' ? ( <p style={{marginTop:"10px",color:"#2296f3",fontWeight:'bolder',fontSize:'22px'}}>
             Thank you for your feedback 
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

export default Contact;