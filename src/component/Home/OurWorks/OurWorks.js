import React from 'react';
import './OurWorks.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import carousel1 from '../../../images/carousel-1.png'
import carousel2 from '../../../images/carousel-2.png'
import carousel3 from '../../../images/carousel-3.png'
import carousel4 from '../../../images/carousel-4.png'
import carousel5 from '../../../images/carousel-5.png'

const  responsive={
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
}


const items = [
    <div className="item">
  <img src={carousel1}  className="carousels " />
  </div>,
   <div className="item">
  <img src={carousel2}  className="carousels " />
  </div>,
  <div className="item">
  <img src={carousel4}  className="carousels " />
  </div>,
  <div className="item">
  <img src={carousel5}  className="carousels " />
  </div>,
];
    

const OurWorks = () => {
 
return (
        <section className="works-container">
            <div className="container">
                <h3 className="text-center text-white pt-5 ">Here are some of <span style={{color:"#7AB259"}}>our works</span> </h3>
           <div className="div py-5 justify-content-center">
           <AliceCarousel autoPlay disableButtonsControls autoHeight
           responsive ={responsive}
           infinite    items={items} />
           </div>
            </div>
        </section>
    );
};

export default OurWorks;