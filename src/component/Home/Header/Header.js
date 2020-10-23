import React from 'react';
import './Header.css'
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="header-container">
            <HeaderMain></HeaderMain>
            </div>
        </div>
    );
};

export default Header;