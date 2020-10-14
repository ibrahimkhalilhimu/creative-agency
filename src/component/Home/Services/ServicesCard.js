import React from 'react';
import { useHistory } from 'react-router-dom';
const ServicesCard = (props) => {
const {img,title,description,id} = props.data
  // const history = useHistory()

  //  const handleClick=(id)=>{
  //    history.push(`/${id}`)
  //  }
   
    return (
      
      <div  className="card">
    <img  src={img} className="mx-auto" alt="..."/>
    <div className="card-body text-center">
    <h5 className="card-title">{title}</h5>
    <p className="card-text text-secondary">{description}</p>
    </div> 
    </div>
       
    );
};

export default ServicesCard;