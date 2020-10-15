import React from 'react';
import { useState } from 'react';
import Sidebar from '../../Customer/Sidebar/Sidebar';
import ShareNav from '../../Shared/ShareNav/ShareNav';
import AddminSidebar from '../AddminSidebar/AddminSidebar';

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

  fetch('http://localhost:5000/addServices', {
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
        <section className="container row">
            <ShareNav></ShareNav>
           <div className="col-md-4 ">
               <Sidebar></Sidebar>
               </div>
               <div className="col-md-8 pt-5">
               <form onSubmit={handleSubmit}>
                    <div className="form-group">
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
           
        </section>
    );
};

export default AddService;