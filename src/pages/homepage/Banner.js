import React from 'react';
import './banner.css'
import Carousel from 'react-bootstrap/Carousel';
import { car1, car2, car3 } from '../../assets/images/Image';
import Form from './Form';

function Banner() {

  return (
    <>
     <Carousel data-bs-theme="dark">
        <Carousel.Item>
            {/* <div classNameName='container-fluid'>
                <div classNameName='row'>
                    <div classNameName='col-lg image-background'>
                      <img src={car1} className="img-fluid image-s" alt="..."/>  
                    </div>
                </div>
            </div> */}
            <section className="content-block image-s quotation-block-1 black-overlay-6 parallax" data-stellar-background-ratio="0.55">
                        <div className="container">
                            <div className="demo-wrapper">
                            </div>
                        </div>
                    </section>
        </Carousel.Item>
        <Carousel.Item>
            <section className="content-block image-s quotation-block-2 black-overlay-6 parallax" data-stellar-background-ratio="0.55">
                        <div className="container">
                            <div className="demo-wrapper">
                            </div>
                        </div>
                    </section>
        </Carousel.Item>
        <Carousel.Item>
                <section className="content-block image-s quotation-block-3 black-overlay-6 parallax" data-stellar-background-ratio="0.55">
                        <div className="container">
                            <div className="demo-wrapper">
                            </div>
                        </div>
                    </section>
        </Carousel.Item>
    </Carousel> 
    <Form/>
    </>
  )
}

export default Banner;