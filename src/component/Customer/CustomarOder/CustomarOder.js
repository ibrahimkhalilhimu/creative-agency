import React,{useContext, useState} from 'react';
import ShareNav from '../../Shared/ShareNav/ShareNav';
import Sidebar from '../Sidebar/Sidebar';
import { useForm} from "react-hook-form";
import { useParams } from 'react-router-dom';
import FakeData from '../../../FakeData/FakeData';
import { UserCardInfo, UserContext } from '../../../App';



const CustomarOder = () => {
    const [cardInfo,setCardInfo]=useContext(UserCardInfo)
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const newData ={...loggedInUser,cardInfo, data}

        fetch('https://immense-everglades-41028.herokuapp.com/addOder',{
            method:'POST',
            headers:{ 
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newData)
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
        <section className="container ">
           <ShareNav></ShareNav>
            <div className="row">
                <div className=" col-md-2">
            <Sidebar></Sidebar>
            </div>
            <div style={{backgroundColor:"#E5E5E5",height:"600px",width:"100%"}} className="col-md-10 ">
            <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mt-5  pt-5">
                        <input type="text" ref={register({ required: true })} name="name" placeholder="Your Name/company name" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}

                    </div>
                    <div className="form-group">
                        <input type="email" ref={register({ required: true })} name="email" placeholder=" Your Email Address" defaultValue={loggedInUser.email} className="form-control" />
                        {errors.email && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <input type="text" ref={register({ required: true })} name="service" defaultValue={cardInfo.title} placeholder="Service" className="form-control" />
                        {errors.service && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                        <textarea type="text" ref={register({ required: true })} cols="30px" rows="10px" name="Details" defaultValue={cardInfo.description} placeholder="Product Details" className="form-control" />
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
            </div>
        </section>
    );
};

export default CustomarOder;