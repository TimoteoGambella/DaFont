import { createContext, useState } from 'react';
import { initializeApp } from "firebase/app";

export const UseUserContext = createContext();

export const UserContext = ({ children }) => {

    const [user,setUser]=useState(null)

    const firebaseConfig = {
        apiKey: process.env.REACT_APP_FIREBASE,
        authDomain: "tuciclo-335ab.firebaseapp.com",
        projectId: "tuciclo-335ab",
        storageBucket: "tuciclo-335ab.appspot.com",
        messagingSenderId: "630475593181",
        appId: "1:630475593181:web:9d633bf2726091f9b6d234"
    };

    const app = initializeApp(firebaseConfig);

    return (
        <UseUserContext.Provider
            value={{
                user
            }}
        >
            {children}
        </UseUserContext.Provider>
    );
};
