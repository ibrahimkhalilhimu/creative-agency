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
         <Route path="/order">
           <CustomarOder></CustomarOder>
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
