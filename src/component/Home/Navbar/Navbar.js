import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../../images/logos/logo.png'

const Navbar = () => {
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
      <Link className="nav-link pr-4 active" to="#">Home <span className="sr-only">(current)</span></Link>
      <Link className="nav-link pr-4" to="#">Our Portfolio</Link>
      <Link className="nav-link pr-4" to="#">Our Team</Link>
      <Link className="nav-link pr-4" to="#">Contact Us</Link>
      <Link  style={{width:"100px",height:"40px"}} className="nav-link pr-4 bg-dark text-white text-center" to="login">Login</Link>
      
    </div>
  </div>
</nav>
</div>
    );
};

export default Navbar;