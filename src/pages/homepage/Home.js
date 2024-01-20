import React from 'react';
import Banner from './Banner';
import './home.css';
import { FaPhoneVolume,FaCodeCommit,FaHandshake,FaFirstOrder } from "react-icons/fa6";
import { TbBrandCashapp } from "react-icons/tb";
import { MdPhonelinkRing } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";
import { GiExtraTime } from "react-icons/gi";
import {indica, innova, nissan, prossingimg, service1, service2, service3, service4, tavera, tempo, xylo } from '../../assets/images/Image';
import {MDBCarousel,MDBCarouselItem, MDBCol,MDBIcon,MDBTypography,MDBContainer,MDBRow,} from "mdb-react-ui-kit";



function Home() {
  return (
    <>
    <Banner/>
    <section className='ser-available-con'>
            <div className="container-fluid">
                <div className="row multiple-row v-align-row">
                  <div className="col-lg-12 col-md-12 text-center mt-5">
                    <div className="col-wrap">
                      <div className="block-heading mb-3">
                      <span className="block-sub-heading text-white">Ready To Book Your Dream Car?</span>
                        <h2 className="block-main-heading pack-heading text-white mt-3">Book Your Dream Car Today</h2>
                        <div className='row'>
                        <div className='col-sm-3  offset-sm-3'><a href="tel:9087777361" className='phone-a'><h3 className='p-no mt-3'><FaPhoneVolume className='phone-icon'/>9087777361</h3></a></div>
                        <div className='col-sm-3'><a href="tel:9087777361" className='phone-a'><h3 href="tel:9087777361" className='p-no mt-3'><MdPhonelinkRing className='phone-icon'/>9087777362</h3></a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
         </section>
          <section className='serv-bg-col'>
              <div className='container-fluid'>
               <div className='row d-flex justify-content-center align-items-center'>
                  <div className='col-12 serv-con'><span className='serv-con'>Service Available AT</span></div>
                 </div>
              </div>
             <div className='container padd-serv'>
               <div className='row justify-content-center'>
                  <div className='col-sm-3 aria-l'>Vellore</div>
                    <div className='col-sm-3 aria-l'>Ranipet</div>
                    <div className='col-sm-3 aria-l'>Arcot</div>
               </div>
              <div className='row justify-content-center'>
              <div className='col-sm-3 aria-l'>Arani</div>
                <div className='col-sm-3 aria-l'>Kanchipuram</div>
             </div>
           </div>
      </section>
      <section>
    <div className="container-fluid">
                <div className="row multiple-row v-align-row">
                  <div className="col-lg-12 col-md-12 text-center">
                    <div className="col-wrap">
                      <div className="block-heading mb-5">
                        <h3 className="block-top-heading mt-5">WELCOME</h3>
                        <h2 className="block-main-heading">OUR SERVICES</h2>
                        <span className="block-sub-heading">Safe Travel</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4 mb-2">
                    <div className="col-wrap">
                      <div className="ico-box bg-gray-light has-radius-medium">
                        <div className="icon">
                            <img src={service1} alt='transfer'/>
                        </div>
                        <h4 className="content-title"><a href="#0" className='phone-a'>RAPID CITY TRANSFER</a></h4>
                        <div className="des">
                          <p>
                          We will bring you quickly and comfortably to anywhere in your city
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="col-wrap">
                      <div className="ico-box bg-gray-light has-radius-medium">
                        <div className="icon">
                        <img src={service2} alt='service'/>
                        </div>
                        <h4 className="content-title">
                          <a href="#0" className='phone-a'>HOTEL PICKUP <br />
                          </a>
                        </h4>
                        <div className="des">
                          <p>
                          Visiting the city? We are here at your service for pick up and drop at your hotel
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="col-wrap">
                      <div className="ico-box bg-gray-light has-radius-medium">
                        <div className="icon">
                          <img src={service3} alt='pickup' />
                        </div>
                        <h4 className="content-title"><a href="#0" className='phone-a'>AIRPORT PICKUP/DROP</a></h4>
                        <div className="des">
                          <p>Contact us for Airport pick up/drop for you or your guests</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-4">
                    <div className="col-wrap">
                      <div className="ico-box bg-gray-light has-radius-medium">
                        <div className="icon">
                        <img src={service4} alt='transaport'/>
                        </div>
                        <h4 className="content-title"><a href="#0" className='phone-a'>BAGGAGE TRANSPORT</a></h4>
                        <div className="des">
                          <p>Have extra luggage? We will arrange the perfect cab?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
       </section>
        <section className='serv-bg-col'>
         <div className='container-fluid padd-serv'>
           <div className='row'>
               <div className="col-lg-12 col-md-12 text-center">
                    <div className="col-wrap">
                      <div className="block-heading">
                        <h5 className="block-top-heading mt-3">SEE OUR</h5>
                        <h2 className="block-main-heading fs-1">TARIFFS</h2>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-md-4 mb-5'>
                  <div className="card card-cascade wider">
                    <div className="view view-cascade overlay">
                      <img src={indica} alt="..." className="img-thumbnail center box-car-img"/>
                       <a href="#!">
                        <div className="mask rgba-white-slight"></div>
                       </a>
                    </div>
                 <div className="ico-box card-body card-body-bg-col card-body-cascade text-center pb-0">
                     <h3 className="card-title text-white">MINI</h3>
                     <p className="blue-text pb-2 text-white">Seating 4+1</p>
                     <p className="card-text text-white">The perfect cab for a quick ride Indica, Etios Liva, Wagon R, Alto, Celerio, Indigo, Bolt </p>
                     <h3 className='text-white'>Rs.11/Km(Non-Ac)</h3>
                    <h3 className='text-white'>Rs.12/Km(Ac)</h3>
                </div>
              </div>
            </div>
               <div className='col-md-4 mb-5'>
                 <div className="card card-cascade wider">
                  <div className="view view-cascade overlay">
                    <img src={nissan} alt="..." className="img-thumbnail center box-car-img"/>
                      <a href="#!">
                       <div className="mask rgba-white-slight"></div>
                      </a>
                    </div>
                    <div className="ico-box card-body card-body-bg-col card-body-cascade text-center pb-0">
                      <h3 className="card-title text-white">SEDAN</h3>
                      <p className="blue-text pb-2 text-white">Seating 4+1</p>
                      <p className="card-text text-white">Travel in style with the premium home cars.Swift, Etios, Ford Amaze, Sunny</p>
                      <h3 className='text-white'>Rs.12/Km(Non-Ac)</h3>
                      <h3 className='text-white'>Rs.13/Km(Ac)</h3>
                     </div>
                </div>
               </div>
               <div className='col-md-4 mb-5'>
                 <div className="card card-cascade wider">
                  <div className="view view-cascade overlay">
                    <img src={tavera} alt="..." className="img-thumbnail center box-car-img"/>
                      <a href="#!">
                        <div className="mask rgba-white-slight"></div>
                        </a>
                     </div>
                    <div className="ico-box card-body card-body-bg-col card-body-cascade text-center pb-0">
                      <h3 className="card-title text-white">MUV</h3>
                      <p className="blue-text pb-2 text-white">Seating 8+1</p>
                      <p className="card-text text-white">The people mover, for the joint family travel.Tavera, Sumo, Eco, Bolero</p>
                      <h3 className='text-white'>Rs.14/Km(Non-Ac)</h3>
                      <h3 className='text-white'>Rs.15/Km(Ac)</h3>
                    </div>
                </div>
               </div>
               <div className='col-md-4 mb-5'>
                 <div className="card card-cascade wider">
                  <div className="view view-cascade overlay">
                    <img src={xylo} alt="..." className="img-thumbnail center box-car-img"/>
                     <a href="#!">
                       <div className="mask rgba-white-slight"></div>
                      </a>
                     </div>
                    <div className="ico-box card-body card-body-bg-col card-body-cascade text-center pb-0">
                      <h3 className="card-title text-white">MUV PRIME</h3>
                      <p className="blue-text pb-2 text-white">Seating 7+1</p>
                      <p className="card-text text-white">The className comfy ride for the complete family.Xylo, Enjoy, Ertiga, Lodgy, Marazzo</p>
                      <h3 className='text-white'>Rs.14/Km(Non-Ac)</h3>
                      <h3 className='text-white'>Rs.15/Km(Ac)</h3>
                     </div>
                </div>
               </div>
               <div className='col-md-4 mb-5'>
                <div className="card card-cascade wider">
                  <div className="view view-cascade overlay">
                    <img src={innova} alt="..." className="img-thumbnail center box-car-img"/>
                      <a href="#!">
                       <div className="mask rgba-white-slight"></div>
                      </a>
                     </div>
                   <div className="ico-box card-body card-body-bg-col card-body-cascade text-center pb-0">
                      <h3 className="card-title text-white">SUV</h3>
                      <p className="blue-text pb-2 text-white">Seating 7+1</p>
                      <p className="card-text text-white">When Luxury meets Comfort.Innova Crysta </p>
                      <h3 className='text-white'>Rs.17/Km(Ac)</h3>
                    </div>
                </div>
               </div>
               <div className='col-md-4 mb-5 mb-5'>
                 <div className="card card-cascade wider">
                  <div className="view view-cascade overlay">
                    <img src={tempo} alt="..." className="img-thumbnail center box-car-img"/>
                      <a href="#!">
                        <div className="mask rgba-white-slight"></div>
                       </a>
                    </div>
                    <div className="ico-box card-body card-body-bg-col card-body-cascade text-center pb-0">
                      <h3 className="card-title card-item text-white">TEMPO</h3>
                      <p className="blue-text card-item pb-2 text-white">Seating 12+1</p>
                      <p className="card-text card-item text-white">Spacious, Safe and Comfortable.Tempo Traveler </p>
                      <h3 className='text-white card-item'>Rs.25/Km</h3>
                    </div>
                </div>
               </div>
              </div>
            </div>
        </section>
        <section>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <h4 className='mt-5 drive-col mb-3'>FOR DRIVERS</h4>
                <span className='for-driv'>DO YOU WANT TO EARN WITH US?</span>
                <p className='mt-3'>Are you an experienced driver willing to enrol with Maya Call Taxi? Come join us for these great benefits!</p>
                <div className='container-fluid cheke-box-colm'>
                   <div className="icon-lists solid-icons">
                      <ul className='row'>
                       <div className='col-sm-6 cheke-box-colm'> <li><h6><span className="icon-time"><TbBrandCashapp className='cash-icon'/></span>Quick Payments</h6></li></div>
                       <div className='col-sm-6 cheke-box-colm'> <li><h6><span className="icon-heart"><IoIosTimer/></span>Flexible Timings</h6></li></div>
                       <div className='col-sm-6 cheke-box-colm'> <li><h6><span className="icon-edit-pen-1"><FaCodeCommit/></span>Low Commissions</h6></li></div>
                       <div className='col-sm-6 cheke-box-colm'><li><h6><span className="icon-play"><FaHandshake/></span>Friendly Management</h6></li></div>
                       <div className='col-sm-6 cheke-box-colm'><li><h6><span className="icon-thumbs-up"><FaFirstOrder /></span>Stable Orders</h6></li></div>
                       <div className='col-sm-6 cheke-box-colm'> <li><h6><span className="icon-thumbs-up"><GiExtraTime/></span>24/7 Support</h6></li></div>
                        </ul>
                        <div className='col-6 mt-3 check-fare-btn cheke-icon-con'><a href='/joinus' className="button-59 j-button" role="button">Join Us</a></div>
                    </div>
                </div>
              </div>
              <div className="bottom-space-medium-only col-lg-6 mt-5">
                 <div className="img-block shine-effect image-zoom">
                    <img src={prossingimg} className="img-fluid for-drive-img" alt="..."/>
                 </div>
              </div>
            </div>
          </div>
        </section>
        <section id='testimonial' className='serv-bg-col'>
        <div className='container-fluid padd-serv'>
        <div className='row'>
        <div className="col-lg-12 col-md-12 text-center">
            <div className="col-wrap">
               <div className="block-heading">
                  <h5 className="block-top-heading mt-3 hpy-tex">Happy Client's</h5>
                    <h2 className="block-main-heading font-test">Testimonial</h2>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <MDBContainer className="py-5">
      <MDBCarousel showControls dark>
          <MDBCarouselItem className="active">
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                      alt='ram'
                    />
                  </div>
                  <h5 className="mb-3 hpy-tex">Ram Kumar</h5>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    They helped me when I was in urgent need and wanna tell u they provided me with a cab within 30 min in the 3 am night
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                      alt='madhu'
                    />
                  </div>
                  <h5 className="mb-3 hpy-tex">Madhu</h5>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Best Cab service in vellore.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                      alt='sanjay'
                    />
                  </div>
                  <h5 className="mb-3 hpy-tex">Sanjay</h5>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    An excellent taxi service and comfortable travel. Was very helpful during my mrs Pregnancy period from my home to CMC. All the best for Maya taxi service and team
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                      alt='karthi'
                    />
                  </div>
                  <h5 className="mb-3 hpy-tex">Karthi</h5>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Very gud service and quick response from staffs.superb.......keep it up.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                      alt='madhavan'
                    />
                  </div>
                  <h5 className="mb-3 hpy-tex">Madhavan</h5>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Comfortable and reliable taxi service in vellore
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                      alt='yuvaraj'
                    />
                  </div>
                  <h5 className="mb-3 hpy-tex">Yuvaraj</h5>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Available at any time wit nominal cost
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                      alt='selvam'
                    />
                  </div>
                  <h5 className="mb-3 hpy-tex">Selvam</h5>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Best & Economical call taxi service in Vellore
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                      alt='akash'
                    />
                  </div>
                  <h5 className="mb-3 hpy-tex">Akash</h5>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    An excellent taxi service and comfortable travel. Was very helpful during my mrs Pregnancy period from my home to CMC. All the best for Maya taxi service and team
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                  </MDBTypography>
                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp"
                      className="rounded-circle shadow-1-strong"
                      width="150"
                      height="150"
                      alt='tamil'
                    />
                  </div>
                  <h5 className="mb-3 hpy-tex">Tamil Selvan</h5>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>
                  <MDBTypography
                    listUnStyled
                    className="d-flex justify-content-center mb-0"
                  >
                  </MDBTypography>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
      </MDBCarousel>
    </MDBContainer>
        </section>
    </>
  )
}

export default Home;