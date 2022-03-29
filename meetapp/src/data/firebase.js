// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyB9uLGhoWrHwCu_K-b9HANfHEg-q5YPCRU",
    authDomain: "skap-972ec.firebaseapp.com",
    projectId: "skap-972ec",
    storageBucket: "skap-972ec.appspot.com",
    messagingSenderId: "517453229359",
    appId: "1:517453229359:web:460943e769be7bdba245da"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage();