import React, { useContext } from 'react';
import { useForm} from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../../Customer/Sidebar/Sidebar';
import ShareNav from '../../Shared/ShareNav/ShareNav';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const onSubmit = data => {
        fetch('https://immense-everglades-41028.herokuapp.com/makeAdmin',{
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
    };
    return (
        <section className="container ">
            <div className="row">
          <ShareNav></ShareNav>  
          <div className="col-md-2">
              <Sidebar></Sidebar>
          </div>
          <div style={{backgroundColor:"#E5E5E5",height:"600px",width:"100%"}} className="col-md-10">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mt-5">
                        <h4>Email</h4>
                        <input type="email" ref={register({ required: true })} name="email" placeholder="@gmail.com" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group ">
                        <button type="submit" className="btn bg-primary text-white">Submit</button>
                    </div>
                </form>
                </div>
          </div>
        </section>
    );
};

export default MakeAdmin;