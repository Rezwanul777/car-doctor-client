import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext=createContext()
const auth=getAuth(app)

const AuthProvider = ({children}) => {

    const [user,SetUser]=useState(null)
    const [loading,SetLoading]=useState(false)
    
    const authInfo={
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;