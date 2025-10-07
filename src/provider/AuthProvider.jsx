import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../firebase';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
export const AuthContext = createContext()
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    
    const [user ,setUser] = useState(null)
    const [loading , setLoading] = useState(true)
    
     const userCreate = (email , password ) => {
        setLoading(true)
          return createUserWithEmailAndPassword( auth,email , password)
     }

     const logOut = () =>{
         return signOut(auth)
     }

     const login = (email , password ) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email , password )
     }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth ,(currentUser) =>{
            setUser (currentUser)
            setLoading(false)
        })
        return ()=> {
               unsubscribe()
        }
    }, [])
     const AuthData = {
            user ,
            setUser,
            userCreate,
            logOut ,
            login,
            loading ,
            setLoading,
        }
    return  <AuthContext value={ AuthData}>{children}</AuthContext>
        
           
       
    
};

export default AuthProvider;