import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuQh-vMtu5XVmUHk36DGZBQzB4Sv-Hg88",
  authDomain: "new080626.firebaseapp.com",
  projectId: "new080626",
  storageBucket: "new080626.firebasestorage.app",
  messagingSenderId: "818109782904",
  appId: "1:818109782904:web:cecba04b7e331cd40b068d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const firebaseContext = createContext(null);

export const userAuth = () => useContext(firebaseContext);

const FirebaseProvider = (props) => {
  const [loading, setloading] = useState(true);
  const [user, setUser] = useState(null);

  const signupUserWithEmailAndPassword = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setloading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <firebaseContext.Provider
      value={{ signupUserWithEmailAndPassword, loading, user }}
    >
      {props.children}
    </firebaseContext.Provider>
  );
};

export default FirebaseProvider;
