import React, { createContext, useState } from 'react';
import {  createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';



export const AuthContext = createContext(null);

const auth = getAuth(app)


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const createuser = (email , password) => {
       return createUserWithEmailAndPassword( auth, email, password)
    }

    const login = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = ()=>{
       return signOut(auth)
    }

    const authInfo = {
       user,
       createuser,
       login,
       logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;