import React,{useState,useEffect} from 'react';
import './Feedback.css'
import FeedbackCard from './FeedbackCard'
import FeedbackData from '.././../../FakeData/FeedbackData'

const Feedback = () => {
    // const feedback = FeedbackData
 const [feedbackData,setFeedbackData] = useState([])

 useEffect(()=>{
    fetch('http://localhost:5000/review')
    .then(res => res.json())
    .then(data=> 
        setFeedbackData(data))
},[])

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