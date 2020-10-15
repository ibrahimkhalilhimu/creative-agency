import React from 'react';
import { useForm} from "react-hook-form";
import Sidebar from '../../Customer/Sidebar/Sidebar';
import ShareNav from '../../Shared/ShareNav/ShareNav';
import AddminSidebar from '../AddminSidebar/AddminSidebar';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section className="container row">
          <ShareNav></ShareNav>  
          <div className="col-md-4">
              <Sidebar></Sidebar>
          </div>
          <div className="col-md-8 pt-5">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <h4>Email</h4>
                        <input type="email" ref={register({ required: true })} name="email" placeholder="@gmail.com" className="form-control" />
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group ">
                        <button type="submit" className="btn bg-primary text-white">Submit</button>
                    </div>
                </form>
          </div>
        </section>
    );
};

export default MakeAdmin;