import React from 'react';
import './Services.css'
import ServicesCard from './ServicesCard';

const Services = () => {
    const servicesData = [
        {
          title: "Web & Mobile design",
          img: "https://i.ibb.co/fGhQmRS/service1.png",
          description: "We craft stunning and amazing we UI, using a well drafted UX to fit your product"
        },
        {
          title: "Graphic design",
          img: "https://i.ibb.co/QbZ5Pd2/service2.png",
          description:"Amazing flyers, social media posts and brand represntations that would make your brand stand out.",
        },
        {
          title: "Web development",
          img: "https://i.ibb.co/PmqLFKc/service3.png",
          description:"With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
        },
      ];
    return (
        <section className="services-container">
            <div className="container">
                <div className="text-center pt-5 mt-5">
                <h3><b> Provide awesome<span style={{color:"#7AB259"}}> services</span></b> </h3>
                </div>
                <div className="card-deck py-5">
                    {
                        servicesData.map(data=><ServicesCard data={data}></ServicesCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;