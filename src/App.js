import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from 'react';
import firebaseConfig from './firebase.config';





initializeApp(firebaseConfig);
// handel

export default function App(){
  const [user ,setuser] = useState({
    isSignedIn:false,
    name:'',
    photo:''
  })
  const handelSignIn = ()=>{
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      const {photoURL,displayName} = result.user;
      const isSignedInUser ={
        isSignedIn:true,
        name:displayName,
        photo:photoURL
      }
      setuser(isSignedInUser)
    }).catch((error) => {
      console.log(error);
    });
  
  }
  const handelSignout=()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
      const isSignedOutUser ={
        isSignedIn:false,
        name:'',
        photo:''
      }
      setuser(isSignedOutUser)
    }).catch((error) => {
      console.log(error);
      // An error happened.
    });
  }



 return (
    <AppBar position="fixed" color="primary">
      <Toolbar  style={{display:"flex",justifyContent:"space-between"}}>
        <Typography variant="h6">
          {user.name}
        </Typography>
        <div style={{display:'flex'}}>
        <Avatar style={{marginRight:'20px'}} alt="Remy Sharp" src={user.photo} />
        {
          user.isSignedIn ?
            <Button onClick ={handelSignout}  variant="contained" color="primary">Sign out</Button> :
            <Button onClick={handelSignIn} variant="contained" color="primary">Sign in</Button>
        }
        </div>
      </Toolbar>
    </AppBar>

  );
}

