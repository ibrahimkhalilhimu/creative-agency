import React from 'react';
import './Feedback.css'
import FeedbackCard from './FeedbackCard'

const Feedback = () => {
    const feedbackData = [
        {
            name:"Nash Patrik",
            company:"CEO, Manpol",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
            img:"https://i.ibb.co/whFz74S/customer-1.png"
        },
        {
            name:"Miriam Barron",
            company:"CEO, Manpol",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
            img:"https://i.ibb.co/Ryvcn42/customer-2.png"
        },
        {
            name:"Bria Malone",
            company:"CEO, Manpol",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
            img:"https://i.ibb.co/LgVzwyz/customer-3.png"
        },
    ]
    return (
        <section className="feedback-section my-5">
           <div className="container text-center">
               <h2><b>Clients<span style={{color:"#7AB259"}}> Feedback</span></b> </h2>
               <div className="row py-5 my-5">
                {
                    feedbackData.map(info=><FeedbackCard info={info}></FeedbackCard>)
                }
               </div>
               </div> 
        </section>
    );
};

export default Feedback;