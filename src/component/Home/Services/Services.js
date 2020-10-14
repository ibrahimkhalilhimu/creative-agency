import React,{useState} from 'react';
import FakeData from '../../../FakeData/FakeData';
import './Services.css'
import ServicesCard from './ServicesCard';

   
 const Services = () => {
    
    const data = FakeData
   const [servicesData,setServicesData] = useState(data)
    return (
        <section className="services-container">
            <div className="container">
                <div className="text-center pt-5 mt-5">
                <h3><b> Provide awesome<span style={{color:"#7AB259"}}> services</span></b> </h3>
                </div>
                <div  className="card-deck py-5">
                    {
                        servicesData.map(data=><ServicesCard data={data}></ServicesCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;