import React from 'react';
import  { useState } from 'react';

import {  GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";

import { FaGoogle } from "react-icons/fa";
import { app } from '../firebase/firebase.config.js';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const GoogleSignIn = () => {

   
 
    const navigate  = useNavigate();
    const location = useLocation();
  
    const from =  location.state?.form?.pathname || "/" ;
 
        const [user, setUser] = useState(null);
        const auth = getAuth(app);
        const provider = new GoogleAuthProvider();

    
        const handlegoogleSignin = () => {
            signInWithPopup(auth,provider)
            .then(result =>{
                const loggedinUser = result.user;
                console.log(loggedinUser);
                const saveUser = {name : loggedinUser.displayName, email : loggedinUser.email}
                fetch('http://localhost:5000/users',{
              method: 'POST',
              headers: {
                'content-type':'application/json'
              },
              body : JSON.stringify(saveUser)
             })
             .then(res => res.json())
             .then(() => {
              
                navigate(from,{replace: true});
              
                setUser(loggedinUser);
                
                
         
            })
            
            .catch(error => {
                console.log('error', error.message)
            })
            
            })}

       
    
            const handleSignout = () => {
                  signOut(auth)
                .then (result => {
                    console.log(result);
                    setUser(null);
                })
                .catch(error => {
                    console.log(error)
                })
            }
    
          
    return (
        <div className='mx-auto'>
        {
         user ?
       <div>
       <button className="bg-violet-400 btn" onClick={handleSignout}>Sign out from google</button> 
        
       </div> :
            <div>
            <button className='me-5 "bg-teal-400 btn rounded-full' onClick={handlegoogleSignin}> <FaGoogle></FaGoogle></button>
            
            </div>
        }
 
       
         </div>
     );
 };

export default GoogleSignIn;