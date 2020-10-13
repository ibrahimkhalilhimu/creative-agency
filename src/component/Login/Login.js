import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/logo.png'
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig'
import { useContext } from 'react';
import { UserContext } from '../../App';




const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)

    if(firebase.apps.length === 0){
      firebase.initializeApp(firebaseConfig);
  }
   
     
    const handleGoogle = () => {
         const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {

            var {displayName,email} = result.user;
            const signInUser = {name:displayName,email}
            setLoggedInUser(signInUser)
           
            
          })
          .catch(function(error) {
          
            var errorCode = error.code;
            var errorMessage = error.message;
           
            var email = error.email;
           
            console.log(errorMessage,errorCode,email);
          });
    }

    return (
        <div className="text-center">
        <Link to="home" > <img src={logo} alt=""/> </Link>
          <div className="box">
              <div className="boxText m-auto">
              <h3>LogIn With</h3>
              <div className="py-4">
              <button onClick={handleGoogle}> Continue with Google</button><br/><br/>
              <h6>Dont't have an account?<Link to="">create new account</Link></h6>
              </div>
              </div>

          </div>
    <h1>email:{loggedInUser.email}</h1>
      </div>
    );
};

export default Login;