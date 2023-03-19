// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAF8XWLEdGkOIIBlXY62K8xJiY7enJvjqk",
    authDomain: "admin-lama-81242.firebaseapp.com",
    projectId: "admin-lama-81242",
    storageBucket: "admin-lama-81242.appspot.com",
    messagingSenderId: "151749375723",
    appId: "1:151749375723:web:a35de6a9a1dc4c440af0ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage();