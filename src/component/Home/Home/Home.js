import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Feedback from '../Feedback/Feedback';
import OurWorks from '../OurWorks/OurWorks';
import CompanyLogo from '../CompanyLogo/CompanyLogo';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
           <Header></Header>
           <CompanyLogo></CompanyLogo>
           <Services></Services>
           <OurWorks></OurWorks>
           <Feedback></Feedback>
           <Footer></Footer>
        </div>
    );
};

export default Home;