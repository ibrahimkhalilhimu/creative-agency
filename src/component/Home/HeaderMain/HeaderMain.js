import React from 'react';
import frame from '../../../images/logos/Frame.png'

const HeaderMain = () => {
    return (
        <section className="container ">
            <div className="row d-flex align-items-center">
                <div className="col-md-5 col-sm-12">
                    <h1>Let’s Grow Your <br/>Brand To The <br/>Next Level</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Purus commodo ipsum duis<br/> laoreet maecenas. Feugiat </p>
                    <button style={{width:"170px"}} className="btn bg-dark text-white">Hire Us</button>
                </div>
                <div className="col-md-7 col-sm-12">
                    <img className="img-fluid w-100" src={frame} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default HeaderMain;