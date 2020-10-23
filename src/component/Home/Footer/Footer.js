import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <section className="footer-section mt-5 pt-5">
            <div className="container">
                <div className="row ">
            <div className="col-md-5 offset-md-0">
                <h1>Let us handle your<br/> project, professionally.</h1>
                <p>With well written codes, we build amazing apps for all<br/> platforms, mobile and web apps in general.</p>
            </div>
            <div className="col-md-6">
                <form action="">
                <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your Email Address "/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Your Name/Company's Name"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Your message"></textarea>
                       </div>
                       <div className="form-group ">
                           <button type="button" className="btn bg-dark text-white all-btn"> Send </button>
                           </div>
                </form>
            </div>
            </div>
            </div>
            <p className="text-center text-secondary mt-5 pt-5">copyright Ibrahim Khalil Himu {(new Date().getFullYear())}</p>
        </section>
    );
};

export default Footer;