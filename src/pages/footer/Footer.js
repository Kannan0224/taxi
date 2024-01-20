import React from 'react';
import './footer.css';
import { FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaHandsHelping,FaPhoneAlt,FaCarSide,FaMoneyBillAlt,FaGooglePay,FaTable,FaUser} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <>
    <section className='bg-dark'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 mt-5'>
                    <h3 className='footer-tex'>About Us</h3>
                     <p className='footer-tex mt-4'>
                     RoyalVipCallTaxi is one of the leading cab services in Vellore,Arcot,Arni and polur.We give the best rides for low                         prices.Our service are all that you need if you are looking for a ride.
                     </p>
                     <p className='footer-tex mt-3'>A Unit of Royal Groups</p>
                     <div className='mt-5'>
                       <a href='#0'><FaFacebook className='footer-icons'/></a>
                       <a href='#0'><FaInstagram className='footer-icons'/></a>
                       <a href='#0'><FaYoutube className='footer-icons'/></a>
                       <a href='#0'><FaTwitter className='footer-icons'/></a>
                     </div>
                </div>
                <div className='col-md-4 explore mt-5 mb-5 '>
                <h3 className='footer-tex mb-4'>Explore</h3>
                <div className="icon-lists round-icons">
                      <ul>
                         <li><a href="#0"><span className="icon-time"><FaCarSide /></span>Book a Ride</a></li>
                         <li><a href="/package"><span className="icon-heart"><FaMoneyBillAlt/></span>Packages</a></li>
                         <li><a href="/contact"><span className="icon-edit-pen-1"><FaPhoneAlt /></span>Contact</a></li>
                        <li><a href="/payment"><span className="icon-play"><FaGooglePay /></span>Pay Now</a></li>
                        <li><a href="/tariff"><span className="icon-thumbs-up"><FaTable/></span>Tariff</a></li>
                        <li><a href="/#testimonial"><span className="icon-thumbs-up"><FaUser/></span>Testimonials</a></li>
                        <li><a href="/joinus"><span className="icon-thumbs-up"><FaHandsHelping/></span>Join Us</a></li>
                     </ul>
                   </div>
                </div>
                <div className='col-md-4 mt-5 mb-5'>
                <h3 className='footer-tex mb-4'>Contact</h3>
                <p className='footer-tex mt-3'>Head Office</p>
                <p className='footer-tex mt-3'>Address: No.2, Main Road, Sainathapuram, Vellore, Tamil Nadu 632001,Landmark:Opposite to SBI, India</p>
                <div className='mt-contact-icon'><a href='#0' className='footer-tex footer-a'><FaPhoneAlt className='footer-tex arrow-icons'/>9087777361</a></div><br/>
               <div className='mt-contact-icon'> <a href='#0' className='footer-tex toll footer-a'><FaPhoneAlt className='footer-tex arrow-icons'/> 9087777362</a></div><br/>
                <a href='#0' className='footer-tex mt-3 footer-a'><IoMdMail className='footer-tex arrow-icons'/>royalvipcalltaxi@gmail.com</a><br/>
                </div>
            </div>
        </div>
        <div className='container'>
          <div className='row mt-3'>
            <div className='col-sm-5'>
            <a href='#0' className='footer-tex footer-a copy-con'>&copy;2024 All Rights Reserved RoyalVipCallTaxi, Vellore </a>
            </div>
            <div className='col-sm-4'>
            <a href='#0' className="footer-a footer-tex con">Terms of use</a>
            <a href='#0' className="footer-a footer-tex">Privacy Policy</a>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default Footer;