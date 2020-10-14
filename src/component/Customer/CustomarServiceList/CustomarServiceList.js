import React from 'react';
import ShareNav from '../../Shared/ShareNav/ShareNav';
import Sidebar from '../Sidebar/Sidebar';

const CustomarServiceList = () => {
    return (
        <div className="container row">
           <ShareNav></ShareNav>
           <div className="col-md-4">
               <Sidebar></Sidebar>
               </div> 
               <div className="col-md-8">
                   <div className="card-deck">
                       <div className="card">
                       <img src="..." class="" alt="..."/>
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                       </div>
                   </div>
               </div>
        </div>
    );
};

export default CustomarServiceList;