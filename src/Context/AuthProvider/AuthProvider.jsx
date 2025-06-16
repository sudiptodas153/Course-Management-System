import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, FacebookAuthProvider, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../firebase/firebase';



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new FacebookAuthProvider();
    const provider2 = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        // setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const profileUpdate = (userDetails) => {
        
        return updateProfile(auth.currentUser, userDetails)
    }

    const logInByGoogle = () =>{
        return signInWithPopup(auth, provider2)
    }

    const logInByFacebook = () =>{
        return signInWithPopup(auth, provider)
    }



    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setUser(currentUser)
        })
        return () => {
            unSubscribe();
        }
    }, [])


    const allInfo = {
        createUser,
        user,
        profileUpdate,
        signInUser,
        loading,
        setLoading,
        setUser,
        logInByFacebook,
        logInByGoogle,

    }

    return (
        <AuthContext value={allInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;