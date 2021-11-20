import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import { initializeApp } from 'firebase/app';
import "firebase/auth";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from 'react';
import firebaseConfig from './firebase.config';


initializeApp(firebaseConfig);


export default function App() {
  const [user, setuser] =useState({
    isSignedIn:false,
    name:'',
    email:'',
    photo:''
  })



  const provider = new GoogleAuthProvider();
  const signInHandeler =() =>{
  const auth = getAuth();
  signInWithPopup(auth, provider)
  .then((result) => {
    const {displayName,photoURL,email} = result.user;
    const isgnedInUser ={
      isSignedIn:true,
      name:displayName,
      email:email,
      photo:photoURL
    }
  setuser(isgnedInUser);
  console.log(displayName,photoURL,email);
  })
  .catch(err =>{
    console.log(err);
    console.log(err.message);
  })
  }




  const signOutHandeler =() =>{
  const auth = getAuth();
  signOut(auth).then(() => {
    const signOutUser = {
      isSignedIn:false,
      name:'',
      email:'',
      photo:''
    }
    setuser(signOutUser)
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
  }
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar  style={{display:"flex",justifyContent:"space-between"}}>
        <Typography variant="h6">
          Xixer
        </Typography>
        <div style={{display:'flex'}}>
        <Avatar style={{marginRight:'20px'}} alt="Remy Sharp" src={user.photo} />
        {
          user.isSignedIn ?
          <Button onClick={signOutHandeler} variant="contained" color="primary">Sign out</Button>
          :
          <Button onClick={signInHandeler} variant="contained" color="primary">Sign in</Button>
        }

        </div>
      </Toolbar>
    </AppBar>

  );
}

