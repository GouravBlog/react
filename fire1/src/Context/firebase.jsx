import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

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
  const signupUserWithEmailAndPassword = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <firebaseContext.Provider value={{ signupUserWithEmailAndPassword }}>
      {props.children}
    </firebaseContext.Provider>
  );
};

export default FirebaseProvider;
