import React from 'react';
import './tariff.css';

function Tariff() {
  return (
    <>
    <section>
            <div className="container">
                <div className="row multiple-row v-align-row">
                  <div className="col-lg-12 col-md-12 text-center mt-5">
                    <div className="col-wrap">
                      <div className="block-heading mb-5 mt-5">
                      <span className="block-sub-heading">RoyalVipCallTaxi // Tariff</span>
                        <h2 className="block-main-heading pack-heading mt-3">Tariff</h2>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
         </section>
         <section className='serv-bg-col'>
          <div className='container'>
            <div className='row'>
              <h5 className='mt-5'>PLEASE INFORM BEFORE 20 MINUTES AND MAKE YOUR JOURNEY SAFE AND HASSLE FREE</h5>
              <h5 className='text-red mb-5'>ADDITIONAL CHARGES: HILLS, NIGHT STAY @ RS.300 / NIGHT</h5>
              <div className='local-meter mb-3'>
                <h2>LOCAL METER TARIFF</h2>
                <button className='btn-down'>Download Tariff</button>
              </div>
              <h5 className='mt-5'>METER STARTS FROM YOUR POINT | WAITING CHARGES : FREE FOR 15 MINUTES</h5>
              <h5 className='text-secondary mb-5'>NIGHT CHARGES (10 PM TO 6 AM) APPLICABLE. PACKAGES ALSO AVAILABLE @ SPECIAL RATES</h5>
            </div>
          </div>
         </section>

         {/* first table data */}

         <section>
          <div className='container-fluid'>
            <div className='row'>
            <div className="demo-wrapper mt-0 mb-3">
               <div className="data-table">
                  <table className="table table-striped">
                    <tr>
                        <th rowSpan={2}>VEHICLE TYPE</th>
                        <th rowSpan={2}>MINIMUM RATE</th>
                        <th colSpan={2}>ADDITIONAL CHARGE PER KM</th>
                        <th colSpan={2}>WAITING CHARGES</th>
                    </tr>
                    <tr>
                        <th>NON A/C</th>
                        <th>A/C</th>
                        <th>NON A/C</th>
                        <th>A/C</th>
                    </tr>
                    <tr>
                        <td>INDICA/ALTO/LIVACELERIO/WAGON R/INDIGO/BOLT</td>
                        <td>RS.90 /-<br/>(3 KM)</td>
                        <td>RS.18 /-</td>
                        <td>RS.20 /-</td>
                        <td>RS.2 /-<br/>(PER MIN)</td>
                        <td>RS.2 /-<br/>(PER MIN)</td>
                    </tr>
                    <tr>
                        <td>DZIRE/ETIOSASPIRE/AMAZE/SUNNY</td>
                        <td>RS.100 /-<br/>(4 KM)</td>
                        <td>RS.19 /-</td>
                        <td>RS.21 /-</td>
                        <td>RS.2 /-<br/>(PER MIN)</td>
                        <td>RS.2 /-<br/>(PER MIN)</td>
                    </tr>
                    <tr>
                        <td>TAVERA/SUMOECO/BOLERO</td>
                        <td>RS.200 /-<br/>(4 KM)</td>
                        <td>RS.23 /-</td>
                        <td>RS.25 /-</td>
                        <td>RS.3 /-<br/>(PER MIN)</td>
                        <td>RS.3 /-<br/>(PER MIN)</td>
                    </tr>
                    <tr>
                        <td>XYLO/ENJOY/ERTIGALODGY/MARAZZO</td>
                        <td>RS.200 /-<br/>(4 KM)</td>
                        <td>RS.23 /-</td>
                        <td>RS.25 /-</td>
                        <td>RS.3 /-<br/>(PER MIN)</td>
                        <td>RS.3 /-<br/>(PER MIN)</td>
                    </tr>
              </table>
            </div>
          </div>
         </div>
        </div>
      </section>
         
         {/* second table data */}

         <section>
          <div className='container-fluid'>
            <div className='row'>
             <div className="demo-wrapper">
               <h2 className="text-center element-heading mt-5 mb-5">OutStation Tariff</h2>
                 <div className="data-table">
                    <table className="table table-striped">
                      <tr>
                        <th rowSpan={2}>HRS.</th>
                        <th rowSpan={2}>KMS.</th>
                        <th colSpan={2}>INDICA - ALTO - LIVAWAGON R - CELERIOINDIGO - BOLT</th>
                        <th colSpan={2}>DZIRE - ETIOS - ASPIREAMAZE - SUNNY</th>
                        <th colSpan={2}>TAVERA - SUMOECO - BOLERO</th>
                        <th colSpan={2}>XYLO - ENJOY - ERTIGALODGY - MARAZZO</th>
                        <th>INNOVO CRISTA</th>
                      </tr>                 
                      <tr>
                        <th>NON A/C</th>
                        <th>A/C</th>
                        <th>NON A/C</th>
                        <th>A/C</th>
                        <th>NON A/C</th>
                        <th>A/C</th>
                        <th>NON A/C</th>
                        <th>A/C</th>
                        <th>A/C</th>
                      </tr>
                       <tr>
                         <td>2</td>
                         <td>20</td>
                         <td>395</td>
                         <td>430</td>
                         <td>405</td>
                         <td>435</td>
                         <td>570</td>
                         <td>600</td>
                         <td>570</td>
                         <td>600</td>
                         <td>760</td>
                       </tr>
                       <tr>
                         <td>2</td>
                         <td>20</td>
                         <td>395</td>
                         <td>430</td>
                         <td>405</td>
                         <td>435</td>
                         <td>570</td>
                         <td>600</td>
                         <td>570</td>
                         <td>600</td>
                         <td>760</td>
                       </tr>
                       <tr>
                         <td>2</td>
                         <td>20</td>
                         <td>395</td>
                         <td>430</td>
                         <td>405</td>
                         <td>435</td>
                         <td>570</td>
                         <td>600</td>
                         <td>570</td>
                         <td>600</td>
                         <td>760</td>
                       </tr>
                       <tr>
                         <td>2</td>
                         <td>20</td>
                         <td>395</td>
                         <td>430</td>
                         <td>405</td>
                         <td>435</td>
                         <td>570</td>
                         <td>600</td>
                         <td>570</td>
                         <td>600</td>
                         <td>760</td>
                       </tr>
                       <tr>
                         <td>2</td>
                         <td>20</td>
                         <td>395</td>
                         <td>430</td>
                         <td>405</td>
                         <td>435</td>
                         <td>570</td>
                         <td>600</td>
                         <td>570</td>
                         <td>600</td>
                         <td>760</td>
                       </tr>
                       <tr>
                         <td>2</td>
                         <td>20</td>
                         <td>395</td>
                         <td>430</td>
                         <td>405</td>
                         <td>435</td>
                         <td>570</td>
                         <td>600</td>
                         <td>570</td>
                         <td>600</td>
                         <td>760</td>
                       </tr>
                       <tr>
                         <td>2</td>
                         <td>20</td>
                         <td>395</td>
                         <td>430</td>
                         <td>405</td>
                         <td>435</td>
                         <td>570</td>
                         <td>600</td>
                         <td>570</td>
                         <td>600</td>
                         <td>760</td>
                       </tr>
                       <tr>
                         <td>2</td>
                         <td>20</td>
                         <td>395</td>
                         <td>430</td>
                         <td>405</td>
                         <td>435</td>
                         <td>570</td>
                         <td>600</td>
                         <td>570</td>
                         <td>600</td>
                         <td>760</td>
                       </tr>
                       <tr>
                         <td>2</td>
                         <td>20</td>
                         <td>395</td>
                         <td>430</td>
                         <td>405</td>
                         <td>435</td>
                         <td>570</td>
                         <td>600</td>
                         <td>570</td>
                         <td>600</td>
                         <td>760</td>
                       </tr>
                       <tr>
                         <td>2</td>
                         <td>20</td>
                         <td>395</td>
                         <td>430</td>
                         <td>405</td>
                         <td>435</td>
                         <td>570</td>
                         <td>600</td>
                         <td>570</td>
                         <td>600</td>
                         <td>760</td>
                       </tr>
                  </table>
                 </div>
               </div>
            </div>
          </div>
         </section>
         {/* third table data */}
         <section>
          <div className='container-fluid'>
            <div className='row'>
             <div className="demo-wrapper">
               <h3 className="element-heading mt-5">Additional Charges: Tollgate, Parking, Permits & Food</h3>
                 <h3 className="element-heading  mb-5">OUTSTATION TARIFF - ADDITIONAL RATES PER KM</h3>
                   <div className="data-table">
                      <table className="table table-striped">
                        <tr>
                           <th rowSpan={2}>VEHICLE TYPE</th>
                           <th colSpan={2}>INDICA - ALTO - LIVAWAGON R - CELERIOINDIGO - BOLT</th>
                           <th colSpan={2}>DZIRE - ETIOS - ASPIREAMAZE - SUNNY</th>
                           <th colSpan={2}>TAVERA - SUMOECO - BOLERO</th>
                           <th colSpan={2}>XYLO - ENJOY - ERTIGALODGY - MARAZZO</th>
                           <th>INNOVO CRISTA</th>
                        </tr>
                        <tr>
                           <th>NON A/C</th>
                           <th>A/C</th>
                           <th>NON A/C</th>
                           <th>A/C</th>
                           <th>NON A/C</th>
                           <th>A/C</th>
                           <th>NON A/C</th>
                           <th>A/C</th>
                           <th>A/C</th>
                        </tr>
                         <tr>
                           <td>RS/KMS</td>
                           <td>RS.11.00</td>
                           <td>RS.12.00</td>
                           <td>RS.12.00</td>
                           <td>RS.13.00</td>
                           <td>RS.15.00</td>
                           <td>RS.14.00</td>
                           <td>RS.15.00</td>
                           <td>RS.17.00</td>
                           <td>RS.14.00</td>
                        </tr>
                    </table>
                  </div>
              </div>
            </div>
          </div>
         </section>
         {/* fourth table data */}
         <section>
          <div className='container-fluid'>
            <div className='row'>
              <div className="demo-wrapper">
                <h3 className="element-heading mt-5 mb-5">ADDITIONAL HOURS CHARGES</h3>
                  <div className="data-table">
                     <table className="table table-striped">
                        <tr>
                             <th>HOURLY RATE</th>
                             <th>INDICA - ALTO - LIVAWAGON R - CELERIOINDIGO - BOLT</th>
                             <th>DZIRE - ETIOS - ASPIREAMAZE - SUNNY</th>
                             <th>TAVERA - SUMOECO - BOLERO</th>
                             <th>XYLO - ENJOY - ERTIGALODGY - MARAZZO</th>
                             <th>INNOVO CRISTA</th>
                        </tr>
                        <tr>
                              <td>BELOW 100 KMS</td>
                              <td>60</td>
                              <td>60</td>
                              <td>80</td>
                              <td>80</td>
                              <td>90</td>
                        </tr>
                        <tr>
                              <td>ABOVE 100 KMS</td>
                              <td>50</td>
                              <td>50</td>
                              <td>70</td>
                              <td>70</td>
                              <td>80</td>
                        </tr>
                   </table>
                 </div>
              </div>
            </div>
          </div>
         </section>
    </>
  )
}

export default Tariff;