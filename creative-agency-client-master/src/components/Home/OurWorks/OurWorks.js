import React from 'react';

import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';
import './OurWorks.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const OurWorks = () => {
    return (

        <section className="testimonials" id="ourWorks">
            <h1 className="text-white my-5">Here are some of <span style={{ color: '#7AB259' }}>our works</span></h1>
            <Carousel>

                <div className="carousel-inner">
                    <img src={carousel1} />
                    <p className="legend">Mobile App</p>
                </div>
                <div className="carousel-inner">
                    <img src={carousel2} />
                    <p className="legend">Web App</p>
                </div>
                <div className="carousel-inner">
                    <img src={carousel3} />
                    <p className="legend">UX Design</p>
                </div>
                <div className="carousel-inner">
                    <img src={carousel4} />
                    <p className="legend">Graphics Design</p>
                </div>
                <div className="carousel-inner">
                    <img src={carousel5} />
                    <p className="legend">UX Design</p>
                </div>

            </Carousel>
        </section>


    );
};

export default OurWorks;