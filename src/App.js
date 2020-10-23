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
import PrivateRoute from './component/PrivateRoute/PrivateRoute';

export const UserContext =createContext()
export const UserCardInfo =createContext()

function App() {

  const [loggedInUser,setLoggedInUser] = useState({success:false})
  const [cardInfo,setCardInfo]= useState({})
  const [isAdmin,setIsAdmin] = useState(false)

  return (
    <div className="div">
      <UserCardInfo.Provider value ={[cardInfo,setCardInfo]}>
    <UserContext.Provider value={[loggedInUser,setLoggedInUser , isAdmin,setIsAdmin] }>
     <Router>
  
       <Switch>
         <Route exact path="/home">
         <Home></Home>
         </Route>
         <Route path="/login">
           <Login></Login>
         </Route>
         
         <PrivateRoute path="/reviews">
           <CustomarReview></CustomarReview>
         </PrivateRoute>
         <PrivateRoute path="/services">
           <CustomarServiceList></CustomarServiceList>
         </PrivateRoute>
        
         < PrivateRoute path="/adminService">
           <AdminService></AdminService>
         </PrivateRoute>
         <PrivateRoute path="/addService">
           <AddService></AddService>
         </PrivateRoute>
         <PrivateRoute path="/admin">
           <MakeAdmin></MakeAdmin>
         </PrivateRoute>

         < PrivateRoute  path="/order">
           <CustomarOder></CustomarOder>
         </PrivateRoute>

         <Route exact path="/">
         <Home></Home>
         </Route>
       </Switch>
     </Router>
    </UserContext.Provider>
    </UserCardInfo.Provider>
    </div>
  );
}

export default App;
