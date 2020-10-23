import React, { useEffect, useState } from 'react';
import ShareNav from '../../Shared/ShareNav/ShareNav';
import Sidebar from '../../Customer/Sidebar/Sidebar';
const AdminService = () => {
  const [orderList,setOderList] = useState([])
   
    useEffect(()=>{
        fetch('https://immense-everglades-41028.herokuapp.com/order')
        .then(res => res.json())
        .then(data=>{
        
          setOderList(data)
        })
      },[])
    return (
        <section className="container ">
            <ShareNav></ShareNav>
            <div className="row">
            <div className="col-md-2">
               <Sidebar></Sidebar>
                </div>
                <div  className="col-md-10  pt-5">
             {
               orderList.map(data=> 
             
                
               <table className="table table-borderless" >
              
               <thead>
                 <tr>
                   <th style={{width:"120px"}} scope="col">Name</th>
                   <th scope="col">Email ID</th>
                   <th  style={{width:"180px"}} scope="col">Service</th>
                   <th  scope="col">Project Details</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
               <th scope="row" >{data.data.name}</th>
               <td >{data.data.email}</td>
               <td >{data.data.service}</td>
               <td>{data.data.Details}</td>
                 </tr>
                 </tbody>
                
              </table>

              
               ) 
            }
                 
               
             
             </div>
             </div>
        </section>
    );
};

export default AdminService;