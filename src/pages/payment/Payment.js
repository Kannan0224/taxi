import React from 'react';
import { qrimage } from '../../assets/images/Image';

function Payment() {
  return (
    <>
     <section>
            <div className="container">
                <div className="row multiple-row v-align-row">
                  <div className="col-lg-12 col-md-12 text-center mt-5">
                    <div className="col-wrap">
                      <div className="block-heading mb-5 mt-5">
                      <span className="block-sub-heading">RoyalVipCallTaxi</span>
                        <h2 className="block-main-heading pack-heading mt-3">ROYALVIP TAXI PAYMENTS</h2>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
         </section>
         <section className='serv-bg-col'>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-4 mt-3 mb-3 text-center'><img src={qrimage} alt="..." className="img-thumbnail mb-3"/><br/>
                    <span className='text-primary pgp-text'>Phonepe</span><br/>
                    <span>9159152699</span>
                    </div>
                    <div className='col-sm-4 mt-3 mb-3 text-center'><img src={qrimage} alt="..." class="img-thumbnail mb-3"/><br/>
                    <span className='text-primary pgp-text'>Paytm</span><br/>
                    <span>9159152699</span></div>
                    <div className='col-sm-4 mt-3 mb-3 text-center'><img src={qrimage} alt="..." class="img-thumbnail mb-3"/><br/>
                    <span className='text-primary pgp-text'>Google Pay</span><br/>
                    <span>9159152699</span>
                    </div>
                </div>
            </div>
         </section>
    </>
  )
}

export default Payment;