import React from 'react';

const FeedbackCard = ({info}) => {
  
    return (
        <div className="col-md-4">
           <div className="card">
               <div className="card-header d-flex  align-items-center">
                   <img style={{width:"50px"}} className="mx-3" src={info.img} alt="" />
                   <div className="pt-4">
                <h5>{info.name}</h5>
          <h6>{info.company}</h6>
                   </div>
               </div>
               <div className="card-body">
            <p className="text-secondary ">{info.description}</p>
               </div>
               </div> 
         </div>
    );
};

export default FeedbackCard;