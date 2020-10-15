import React from 'react';
import ShareNav from '../../Shared/ShareNav/ShareNav'
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form"
import FakeData from '../../../FakeData/FakeData';

const CustomarReview = () => {
    const { register, handleSubmit,  errors } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:5000/addReview',{
            method:'POST',
            headers:{ 
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
           
          if (data) {
           
            alert('your register place successfully')
          }
        })
        console.log(data)
    }
    return (
        <div className="container row">
            <ShareNav></ShareNav>
           <div className="col-md-4">
               <Sidebar></Sidebar>
               
               </div> 
            <div className="col-md-8 pt-5">
                 <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="company" placeholder="company name"  className="form-control" />
                        {errors.company && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <textarea type="text" ref={register({ required: true })} name="description" placeholder="description" cols="30px" rows="10px" className="form-control" />
                        {errors.description && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group ">
                        <button type="submit" className="btn bg-dark text-white">Submit</button>
                    </div>
                </form>
            </div>
          
        </div>
    );
};

export default CustomarReview;