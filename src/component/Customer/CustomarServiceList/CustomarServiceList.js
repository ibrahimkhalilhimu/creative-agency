import React,{useContext, useEffect, useState} from 'react';
import { UserContext } from '../../../App';
import ShareNav from '../../Shared/ShareNav/ShareNav';
import Sidebar from '../Sidebar/Sidebar';

const CustomarServiceList = () => {

    const [order,setOder] = useState([])
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    useEffect(()=>{
        fetch('https://immense-everglades-41028.herokuapp.com/orders?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data=>{
            console.log(data);
          setOder(data)
        })
      },[])


    return (
        <div className="container ">
           <ShareNav></ShareNav>
           <div className="row">
           <div className="col-md-2">
               <Sidebar></Sidebar>
               </div> 
               <div style={{backgroundColor:"#E5E5E5",height:"600px",width:"100%"}} className="col-md-10 ">
                   <div className="row">
                       {
                           order.map(data=>
                            <div className="col-md-6">
                           <div className="card">
                          {
                          data.cardInfo.image ? <img style={{width:'74px'}}  className="" src={`data:image/png;base64,${data.cardInfo.image.img}`}/>:
                          <img src={data.cardInfo.img} className="" alt="..."/>
                          
                          }
                        <div className="card-body">
                           <h5 className="card-title">{data.cardInfo.title}</h5>
                           <p className="card-text">{data.cardInfo.description}</p>
                        </div>
                        </div>
                           </div>)
                       }
                   </div>
               </div>
        </div>
        </div>
    );
};

export default CustomarServiceList;