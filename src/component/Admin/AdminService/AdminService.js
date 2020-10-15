import React, { useEffect, useState } from 'react';
import ShareNav from '../../Shared/ShareNav/ShareNav';
import AddminSidebar from '../../Admin/AddminSidebar/AddminSidebar'
import Sidebar from '../../Customer/Sidebar/Sidebar';
const AdminService = () => {
  const [orderList,setOderList] = useState([])
   
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data=>{
          console.log(data);
          setOderList(data)
        })
      },[])
    return (
        <section className="container row">
            <ShareNav></ShareNav>
            <div className="col-md-3">
               <Sidebar></Sidebar>
                </div>
                <div  className="col-md-9 pt-5">
             {
               orderList.map(data=>
               <table class="table table-borderless w-100">
               <thead>
                 <tr>
                   <th scope="col">Name</th>
                   <th scope="col">Email ID</th>
                   <th scope="col">Service</th>
                   <th scope="col">Project Details</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
               <th>{data.data.name}</th>
               <td>{data.data.email}</td>
               <td>{data.data.service}</td>
               <td>{data.data.Details}</td>
                 </tr>
                 </tbody>
              </table>
                 )
             }
             </div>
          
        </section>
    );
};

export default AdminService;