import React,{ createContext, useState }  from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home/Home';
import Login from './component/Login/Login';
import CustomarOder from './component/Customer/CustomarOder/CustomarOder';
import CustomarReview from './component/Customer/CustomarReview/CustomarReview';
import CustomarServiceList from './component/Customer/CustomarServiceList/CustomarServiceList';
import AdminService from './component/Admin/AdminService/AdminService';
import AddService from './component/Admin/AddService/AddService';
import MakeAdmin from './component/Admin/MakeAdmin/MakeAdmin';

export const UserContext =createContext()

function App() {

  const [loggedInUser,setLoggedInUser] = useState({success:false})

  return (
    <div className="div">
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
     <Router>
  
       <Switch>
         <Route exact path="/home">
         <Home></Home>
         </Route>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="/reviews">
           <CustomarReview></CustomarReview>
         </Route>
         <Route path="/services">
           <CustomarServiceList></CustomarServiceList>
         </Route>
        < Route exact path="/order">
           <CustomarOder></CustomarOder>
         </Route>
         < Route path="/adminService">
           <AdminService></AdminService>
         </Route>
         <Route path="/addService">
           <AddService></AddService>
         </Route>
         <Route path="/admin">
           <MakeAdmin></MakeAdmin>
         </Route>
         <Route exact path="/">
         <Home></Home>
         </Route>
       </Switch>
     </Router>
    </UserContext.Provider>
    </div>
  );
}

export default App;
