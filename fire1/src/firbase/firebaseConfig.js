import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCuQh-vMtu5XVmUHk36DGZBQzB4Sv-Hg88",
    authDomain: "new080626.firebaseapp.com",
    projectId: "new080626",
    storageBucket: "new080626.firebasestorage.app",
    messagingSenderId: "818109782904",
    appId: "1:818109782904:web:cecba04b7e331cd40b068d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);