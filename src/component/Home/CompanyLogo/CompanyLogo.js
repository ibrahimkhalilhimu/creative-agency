import React from 'react';
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'

const CompanyLogo = () => {
    return (
        <section className="pt-5">
           <div className="container offset-md-1">
           <div className="row ">
              <div className="col-md-2">
                <img className="img-fluid" style={{width:"140px"}} src={slack} alt=""/>
              </div>
              <div className="col-md-2">
              <img className="img-fluid" style={{width:"129px"}} src={google} alt=""/>
              </div>
              <div className="col-md-2">
              <img className="img-fluid" style={{width:"99px"}} src={uber} alt=""/>
              </div>
              <div className="col-md-2">
              <img className="img-fluid"style={{width:"120px"}} src={netflix} alt=""/>
              </div>
              <div className="col-md-2">
              <img className="img-fluid"style={{width:"161px"}} src={airbnb} alt=""/></div>  
                </div>
           </div>
        </section>
    );
};

export default CompanyLogo;