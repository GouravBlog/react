import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-q9NBOVic7YJJromATu9xedba8nmr0gQ",
  authDomain: "fir-f0458.firebaseapp.com",
  projectId: "fir-f0458",
  storageBucket: "fir-f0458.firebasestorage.app",
  messagingSenderId: "207294919306",
  appId: "1:207294919306:web:dde64439d038c7356e7373",
  measurementId: "G-ZYSW8D8T7T",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
