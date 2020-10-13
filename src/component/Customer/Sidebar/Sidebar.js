import React from 'react';
import './Sidebar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faStore,faComment } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="container">
             <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100%"}}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/doctor/dashboard" className="text-dark">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/appointment" className="text-dark">
                        <FontAwesomeIcon icon={faStore} /> <span>Service list</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/patients" className="text-dark">
                        <FontAwesomeIcon icon={faComment} /> <span>Review</span>
                    </Link>
                </li>
            </ul>
            
        </div>
        </div>
     
    );
};

export default Sidebar;