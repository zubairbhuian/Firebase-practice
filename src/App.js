import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from 'react';
import firebaseConfig from './firebase.config';





initializeApp(firebaseConfig);
export default function App(){
  const [user ,setuser] = useState({
    isSignIn:false,
    photo:''
  })
  
  const handelSignIn = ()=>{
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const photoURL = result.user;
      const isSignedIn ={
        isSigIn:true,
        photo:photoURL
      }
      setuser(isSignedIn)
      console.log(result.user.photoURL);
    
    }).catch((error) => {
      console.log(error);
    });
  
  }
 return (
    <AppBar position="fixed" color="primary">
      <Toolbar  style={{display:"flex",justifyContent:"space-between"}}>
        <Typography variant="h6">
          Xixer
        </Typography>
        <div style={{display:'flex'}}>
        <Avatar style={{marginRight:'20px'}} alt="m" src='user.photo'/>
          <Button  variant="contained" color="primary">Sign out</Button>
          <Button onClick={handelSignIn} variant="contained" color="primary">Sign in</Button>
        </div>
      </Toolbar>
    </AppBar>

  );
}

