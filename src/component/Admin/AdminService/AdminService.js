import React from 'react';
import ShareNav from '../../Shared/ShareNav/ShareNav';
import AddminSidebar from '../../Admin/AddminSidebar/AddminSidebar'
import Sidebar from '../../Customer/Sidebar/Sidebar';
const AdminService = () => {
    return (
        <section className="container row">
            <ShareNav></ShareNav>
            <div className="col-md-4">
               <Sidebar></Sidebar>
                </div>
                <div  className="col-md-8 pt-5">
                <table class="table table-borderless">
  <thead style={{backgroundColor:"#F5F6FA"}}>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email ID</th>
      <th scope="col">Service</th>
      <th scope="col">Project Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>Mark</td>
      <td>Saiful@gmail.com</td>
      <td>Design</td>
      <td>Very Hard</td>
    </tr>
    </tbody>
</table>
                </div>
          
        </section>
    );
};

export default AdminService;