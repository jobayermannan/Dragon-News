import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from './../Firebase/firebase.config';



 export const AuthContext=createContext(null)
 const auth =getAuth(app);

const AuthProviders = ({children}) => {

    const [user,setUser]=useState(null);
    const [loader,setLoader]=useState(true);
    const  createUser= (email,password)=>{
        setLoader(true)
         return createUserWithEmailAndPassword(auth,email,password);
    }
    const  signUser= (email,password)=>{
        setLoader(true)
         return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        setLoader(true)
        return signOut(auth);
    }
  useEffect(()=>{
       const unsubscribe=  onAuthStateChanged(auth, (currentUser) => {
            console.log("user looged in ovbserrv ", currentUser)
            setUser(currentUser)
            setLoader(false)
           })
           return (()=>{
            unsubscribe
           })

  },[])

 const authInfo={
      user,createUser,signUser,logOut,loader
 }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;