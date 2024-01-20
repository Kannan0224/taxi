import React, { useState } from 'react';
import "../package/package.css";
import { packageData } from './Data';

function Package() {

   const[district,setDistrict]=useState("Vellore");
   const [currentState , setCurrentState] = useState('outstation');
   const changeVellore=()=>{
    setDistrict("Vellore")
   }
   const changeRpt=()=>{
    setDistrict("Ranipet")
   }
   const changeArc=()=>{
    setDistrict("Arcot")
   }
   const changeArani=()=>{
    setDistrict("Arani")
   }
   const changeKanchi=()=>{
    setDistrict("Kanchipuram")
   }

  return (
    <>
    <section>
      <div className="container-fluid">
        <div className="row multiple-row v-align-row">
          <div className="col-lg-12 col-md-12 text-center mt-5">
             <div className="col-wrap">
               <div className="block-heading mb-5 mt-5">
                 <span className="block-sub-heading">RoyalVipCallTaxi // Package</span>
                    <h2 className="block-main-heading pack-heading mt-3">Packages</h2>
                 </div>
                </div>
             </div>
          </div>
        </div>
    </section>
    <section className='serv-bg-col'>
      <div className='container-fluid'>
        <div className='row d-flex justify-content-center align-items-center'>
          <div className='col-12 serv-con'><span className='serv-con sel-sta fs-5'>Select The Starting Point</span></div>
        </div>
      </div>
      {/* <div className='container padd-serv'>
       <div className='row justify-content-center'>
        <div onClick={changeVellore} className='col-sm-3 aria-l'>Vellore</div>
        <div onClick={changeRpt} className='col-sm-3 aria-l'>Ranipet</div>
        <div onClick={changeArc} className='col-sm-3 aria-l'>Arcot</div>
        </div>
        <div className='row justify-content-center'>
        <div onClick={changeArani} className='col-sm-3 aria-l'>Arani</div>
        <div onClick={changeKanchi} className='col-sm-3 aria-l'>Kanchipuram</div>
        </div>
       </div> */}
       <div className="content-wrapper">
               <section className="mt-0 mb-0">
                     <div className="container">
                          <div className="tab-container tab-black tab-center-container">
                                <ul className=" mt-5 nav nav-tabs tab-button-nav" role="tablist">
                                    <li className="nav-item">
                                        <a onClick={changeVellore} className="nav-link" data-toggle="tab" href="#tab13" role="tab">Vellore</a>
                                    </li>
                                    <li className="nav-item">
                                        <a onClick={changeRpt} className="nav-link" data-toggle="tab" href="#tab14" role="tab">Ranipet</a>
                                    </li>
                                    <li className="nav-item">
                                        <a onClick={changeArc} className="nav-link" data-toggle="tab" href="#tab15" role="tab">Arcot</a>
                                    </li>
                                    <li className="nav-item">
                                        <a onClick={changeArani} className="nav-link" data-toggle="tab" href="#tab15" role="tab">Arani</a>
                                    </li>
                                    <li className="nav-item">
                                        <a onClick={changeKanchi} className="nav-link" data-toggle="tab" href="#tab15" role="tab">Kanchipuram</a>
                                    </li>
                                </ul>
                            </div>
                          </div>
                          </section>
                          </div> 
   </section>
   <section className='serv-bg-col'>
          <div className="content-wrapper">
               <section className="mt-0 mb-0">
                     <div className="container">
                          <span className="text-center element-type">Select the ride type</span> 
                          <div className="tab-container tab-black tab-center-container">
                                <ul className="nav nav-tabs tab-button-nav" role="tablist">
                                    <li className="nav-item">
                                        <a onClick={()=>setCurrentState('outstation')} className="nav-link" data-toggle="tab" href="#tab13" role="tab">OUTSTATION</a>
                                    </li>
                                    <li className="nav-item">
                                        <a onClick={()=>setCurrentState('local')} className="nav-link" data-toggle="tab" href="#tab14" role="tab">LOCAL</a>
                                    </li>
                                    <li className="nav-item">
                                        <a onClick={()=>setCurrentState('pickup')} className="nav-link" data-toggle="tab" href="#tab15" role="tab">PICKUP</a>
                                    </li>
                                </ul>
                            </div>
                          </div>
                          </section>
                          </div>       
      <div className="container-fluid mt-5">
        <div className="demo-wrapper">
          <div className="row default-gallery">
            {
              packageData[currentState].map((data) => {
                return(
                      <div  className="col-md-6 col-lg-4">
                      <figure className="caption-hover-full">
                        <div className="image-wrapper"><img src={data.src} className="img-fluid outs-img-sty" alt="Responsive"/>
                          <div className=' image-text'><h2>{data.name}</h2></div>
                      </div>
                      <div className="image-details">
                        <div className="figcaption">
                            <div className="trigger">
                              <div className="custom-icon-plus"><span className="sr-only">&nbsp;</span></div>
                            </div>
                              <div className="info">
                                <h4 className="from-to-con">{district} To {data.name}</h4><br/>
                                  <span className="content-title">{data.district[district]}</span>
                              </div>
                            </div>
                        </div>
                      </figure>
                  </div>
                )
              })
            }             
            </div>
          </div>
          </div>
                  </section>
          </>
  )
}

export default Package;