import React, { useEffect, useState } from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStore,faComment,faPlus,faUser } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser,setLoggedInUser, isAdmin,setIsAdmin] = useContext(UserContext)
 

    useEffect(()=>{
        
        fetch('https://immense-everglades-41028.herokuapp.com/isAdmin',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({email:loggedInUser.email})
        })
        .then(res => res.json())
        .then(data=>{setIsAdmin(data)})
    },[])
    console.log(isAdmin);
    return (
       
             <div className="sidebar d-flex flex-column justify-content-between  py-5 px-4" style={{height:"100%"}}>
            
            <ul className="list-unstyled">
            {!isAdmin && <div>
            <li>
                <Link to="/order" className="text-dark">
                    <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span> 
                </Link>
            </li>
            <li>
                <Link to="/services" className="text-dark">
                    <FontAwesomeIcon icon={faStore} /> <span>Service list</span> 
                </Link>
            </li>
            <li>
                <Link to="/reviews" className="text-dark">
                    <FontAwesomeIcon icon={faComment} /> <span>Review</span>
                </Link>
            </li>
            </div>}
      {isAdmin &&  <div className="">
         <li>
            <Link to="/adminService" className="text-dark">
                <FontAwesomeIcon icon={faStore} /> <span>Service List</span> 
            </Link>
        </li>
        <li>
            <Link to="/addService" className="text-dark">
                <FontAwesomeIcon icon={faPlus} /> <span>Add Service </span> 
            </Link>
        </li>
        <li>
            <Link to="/admin" className="text-dark">
                <FontAwesomeIcon icon={faUser} /> <span>Make Admin</span>
            </Link>
        </li>
        </div>}
            </ul>
            
        </div>
      
     
    );
};

export default Sidebar;