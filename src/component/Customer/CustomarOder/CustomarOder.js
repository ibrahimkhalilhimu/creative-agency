import React,{useState} from 'react';
import ShareNav from '../../Shared/ShareNav/ShareNav';
import Sidebar from '../Sidebar/Sidebar';
import { useForm} from "react-hook-form";
import { useParams } from 'react-router-dom';
import FakeData from '../../../FakeData/FakeData';



const CustomarOder = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    // let {id} = useParams();
    // const dataText = FakeData.find(data=>data.id ==id)
    // const [homeData,setHomeData]= useState(dataText)
   

    return (
        <section className="container row">
           <ShareNav></ShareNav>
            
                <div className=" col-md-4">
            <Sidebar></Sidebar>
            </div>
            <div style={{backgroundColor:"#E5E5E5",height:"100%"}} className="col-md-8   pt-5">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name/company name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="email" placeholder=" Your Email Address" className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="service" placeholder="Service" className="form-control" />
                        {errors.service && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <textarea type="text" ref={register({ required: true })} cols="30px" rows="10px" name="Details" placeholder="Product Details" className="form-control" />
                        {errors.Details && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="price" placeholder="price" className="form-control" />
                        {errors.price && <span className="text-danger">This field is required</span>}
                    </div>

                    <div className="form-group ">
                        <button type="submit" className="btn bg-dark text-white">Send</button>
                    </div>
                </form>
            </div>
            
        </section>
    );
};

export default CustomarOder;