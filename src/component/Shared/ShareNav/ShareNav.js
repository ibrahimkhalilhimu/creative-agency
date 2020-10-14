import React,{useState} from 'react';
import logo from '../../../images/logos/logo.png'
import {Link} from "react-router-dom";
import { useLocation} from 'react-router-dom';

const ShareNav = () => {
  let location = useLocation();

    return (
        <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light ">
  <Link className="navbar-brand" to="home">
      <img style={{width:"150px"}} src={logo} alt=""/>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
  <div className="navbar-nav ml-auto">
    {window.location.pathname ===`/order` &&
       <h4 ><Link style={{paddingRight:"450px"}} className={`nav-link ${window.location.pathname ==='/order'? 'text-primary':'text-danger'}`} to="#">Order</Link></h4> 
    }
      {window.location.pathname ==='/reviews'&&
       <h4 ><Link style={{paddingRight:"450px"}} className={`nav-link ${window.location.pathname ==='/order'? 'text-primary':'text-danger'}`} to="#">Review</Link></h4> 
    }
       {window.location.pathname ==='/services'&&
       <h4 ><Link style={{paddingRight:"450px"}} className={`nav-link ${window.location.pathname ==='/order'? 'text-primary':'text-danger'}`} to="#">Service-List</Link></h4> 
    }
     
       {window.location.pathname ==='/adminService'&&
       <h4 ><Link style={{paddingRight:"450px"}} className={`nav-link ${window.location.pathname ==='/order'? 'text-primary':'text-danger'}`} to="#">Service List</Link></h4> 
    }
     {window.location.pathname ==='/addService'&&
       <h4 ><Link style={{paddingRight:"450px"}} className={`nav-link ${window.location.pathname ==='/order'? 'text-primary':'text-danger'}`} to="#">Add Service</Link></h4> 
    }
    {window.location.pathname ==='/admin'&&
       <h4 ><Link style={{paddingRight:"450px"}} className={`nav-link ${window.location.pathname ==='/order'? 'text-primary':'text-danger'}`} to="#">Make Admin</Link></h4> 
    }
 
 
      <Link className="nav-link pr-4" to="#">Pro Rasal</Link>
      
    </div>
  </div>
</nav>
</div>
    );
};

export default ShareNav;