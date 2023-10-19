import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import app from '../../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
 
export const AuthContext =createContext(null)
const auth =getAuth(app);
const provider =new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null);
    const [loading, setLoading]= useState(true);

    const createUser=(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    
    const googleUser=()=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    const userLogin=(email, password)=>{
       setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
 };
 const userLogOut=()=>{  
    setLoading(true);
   return signOut(auth);
 }

    useEffect(()=>{
        const unSubscribe =onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unSubscribe();
        }
    },[])
    const authInfo ={user, createUser, googleUser, userLogin, userLogOut, loading};

    return (
         <AuthContext.Provider value={authInfo}>
            {
                children
            }
         </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children:PropTypes.node

}
export default AuthProvider;