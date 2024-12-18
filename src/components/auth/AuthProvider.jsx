import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import auth from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
  useEffect(() => {
   const usnubscribe = onAuthStateChanged(auth, createUser => {
        setUser(createUser);
        console.log('sete capture', currentUser)
        setLoading(false);
    })

    return () => {
        usnubscribe();
    }
  }, [])

    const authInfo = {
        user,
        loading,
        createUser,
    }

  return (
    <AuthContext.Provider value={authInfo}>
            {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
