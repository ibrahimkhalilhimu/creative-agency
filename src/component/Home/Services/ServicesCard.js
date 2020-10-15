import React from 'react';
import { useHistory } from 'react-router-dom';
const ServicesCard = (props) => {
  console.log(props);
const {title,description,img,image} = props.data
  // const history = useHistory()

  //  const handleClick=(id)=>{
  //    history.push(`/${id}`)
  //  }
   
    return (
      <div className="col-md-4 my-2">
      <div  className="card">

     {  image ? <img style={{width:'74px'}}  className="mx-auto" src={`data:image/png;base64,${image.img}`}/>:
     <img  src={img} className="mx-auto" alt="..."/>
     
     }

    <div className="card-body text-center">
    <h5 className="card-title">{title}</h5>
    <p className="card-text text-secondary">{description}</p>
    </div> 
    </div>
    </div>
       
    );
};

export default ServicesCard;