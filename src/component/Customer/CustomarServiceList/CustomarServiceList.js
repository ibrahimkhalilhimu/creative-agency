import React,{useContext, useEffect, useState} from 'react';
import { UserContext } from '../../../App';
import ShareNav from '../../Shared/ShareNav/ShareNav';
import Sidebar from '../Sidebar/Sidebar';

const CustomarServiceList = () => {

    const [order,setOder] = useState([])
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    useEffect(()=>{
        fetch('http://localhost:5000/orders?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data=>{
          console.log(data);
          setOder(data)
        })
      },[])


    return (
        <div className="container row">
           <ShareNav></ShareNav>
           <div className="col-md-4">
               <Sidebar></Sidebar>
               </div> 
               <div className="col-md-8">
                   <div className="row">
                       {
                           order.map(data=>
                            <div className="col-md-6">
                           <div className="card">
                           <img src={data.img} class="" alt="..."/>
                        <div class="card-body">
                           <h5 class="card-title">{data.title}</h5>
                           <p class="card-text">{data.description}</p>
                        </div>
                        </div>
                           </div>)
                       }
                   </div>
               </div>
        </div>
    );
};

export default CustomarServiceList;