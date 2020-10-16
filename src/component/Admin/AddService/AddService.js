import React from 'react';
import { useState } from 'react';
import Sidebar from '../../Customer/Sidebar/Sidebar';
import ShareNav from '../../Shared/ShareNav/ShareNav';

const AddService = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = (e) =>{
        const formData = new FormData()
  formData.append('file', file)
  formData.append('title', info.title)
  formData.append('description', info.description)

  fetch('https://immense-everglades-41028.herokuapp.com/addServices', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  })
        
  e.preventDefault();
        }
   
    return (
        <section className="container ">
            <div className="row">
            <ShareNav></ShareNav>
           <div className="col-md-2 ">
               <Sidebar></Sidebar>
               </div>
               <div style={{backgroundColor:"#E5E5E5",height:"600px",width:"100%"}} className="col-md-10 ">
               <form onSubmit={handleSubmit}>
                    <div className="form-group pt-5">
                        <label htmlFor="exampleInputText">Service Title</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Service Title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputText">Description</label>
                        <textarea onBlur={handleBlur} type="text" col="30px" rows="10px" className="form-control" name="description" placeholder="Description" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputText">Upload a image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button type="submit" className="btn btn-dark">Submit</button>
                </form>
               </div>
               </div>
        </section>
    );
};

export default AddService;