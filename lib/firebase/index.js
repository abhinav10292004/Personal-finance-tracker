import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBbT9c-o4wUDdd6jW6Gdvu5b6-WYnDW9Ng",
  authDomain: "ftor-c8d65.firebaseapp.com",
  projectId: "ftor-c8d65",
  storageBucket: "ftor-c8d65.firebasestorage.app",
  messagingSenderId: "198115041583",
  appId: "1:198115041583:web:20857f10c9a42099bf01da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };



















