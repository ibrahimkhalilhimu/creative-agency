import React,{useState,useEffect} from 'react';
import FakeData from '../../../FakeData/FakeData';
import './Services.css'
import ServicesCard from './ServicesCard';

   
 const Services = () => {
    
   const [servicesData,setServicesData] = useState([])
   useEffect(()=>{
    fetch('https://immense-everglades-41028.herokuapp.com/service')
    .then(res => res.json())
    .then(data=> setServicesData(data))
},[])


    return (
        <section className="services-container">
            <div className="container">
                <div className="text-center pt-5 mt-5">
                <h3><b> Provide awesome<span style={{color:"#7AB259"}}> services</span></b> </h3>
                </div>
                <div  className="card-deck row py-5">
                    {
                        servicesData.length === 0 && <h3 className="loader text-center mx-auto">Loading...</h3>
                    }
                    {
                        servicesData.map(data=><ServicesCard data={data} key={data._id}></ServicesCard>)
                    }
           </div>
            </div>
        </section>
    );
};

export default Services;