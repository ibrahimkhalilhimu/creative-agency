import React from 'react';
import './OurWorks.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-3.png'

const OurWorks = () => {
    const handleDragStart = (e) => e.preventDefault();
 
const items = [
  <img src={carousel1} onDragStart={handleDragStart} className="yours-custom-class w-50" />,
  <img src={carousel2} onDragStart={handleDragStart} className="yours-custom-class w-50" />,
  <img src={carousel3} onDragStart={handleDragStart} className="yours-custom-class w-25" />,
];
    return (
        <section className="works-container">
            <div className="container">
                <h3 className="text-center text-white pt-5">Here are some of <span style={{color:"#7AB259"}}>our works</span> </h3>
           <div className="div py-5">
           <AliceCarousel autoPlay disableButtonsControls autoHeight infinite mouseTracking items={items} />
           </div>
            </div>
        </section>
    );
};

export default OurWorks;