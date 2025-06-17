import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, FacebookAuthProvider, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import axios from 'axios';
// import axios from 'axios';



const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider2 = new GoogleAuthProvider();
    const provider = new GithubAuthProvider();
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

    const logInByGoogle = () => {
        return signInWithPopup(auth, provider2)
    }
    const logInByGithub = () => {
        return signInWithPopup(auth, provider)
    }





    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false)
            setUser(currentUser)
            if (currentUser?.email) {
                const userData = { email: currentUser.email }
                axios.post('https://server-side-taupe-three.vercel.app/jwt', userData, {
                    withCredentials: true
                })

                    .then(res => {
                        console.log(res)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
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
        logInByGithub,
        logInByGoogle,

    }

    return (
        <AuthContext value={allInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;