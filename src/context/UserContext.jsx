import { createContext, useState } from 'react';
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    getDocs,
    query,
    collection,
    where,
    addDoc,
    doc,
    setDoc,
    getDoc,
    orderBy,
} from 'firebase/firestore';

export const UseUserContext = createContext();

export const UserContext = ({ children }) => {

    const [user,setUser]=useState(null)

    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASE,
      authDomain: "dafont-b16fc.firebaseapp.com",
      projectId: "dafont-b16fc",
      storageBucket: "dafont-b16fc.appspot.com",
      messagingSenderId: "475615563360",
      appId: "1:475615563360:web:dbecc88a95160355b9fd05",
      measurementId: "G-JWPRWRDGC9"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    const addUser = async (newUser) => {
        const user = await addDoc(collection(db, 'usuarios'), newUser);
        return user.id;
        
    };

    const updateUser = async (idUser, library, balance) => {
        const user = doc(db, 'usuarios', idUser);
        // await setDoc(user, { biblioteca: library, mediosPago: balance }, { merge: true });
        return true;
    };
    
    return (
        <UseUserContext.Provider
            value={{
                user,
                addUser
            }}
        >
            {children}
        </UseUserContext.Provider>
    );
};
