import React from 'react';

const ServicesCard = ({data}) => {
    console.log(data);
    return (
      
      <div className="card">
    <img  src={data.img} className="mx-auto" alt="..."/>
    <div className="card-body text-center">
    <h5 className="card-title">{data.title}</h5>
    <p className="card-text text-secondary">{data.description}</p>
    </div> 
    </div>
       
    );
};

export default ServicesCard;