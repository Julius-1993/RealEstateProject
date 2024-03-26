// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-cf860.firebaseapp.com",
  projectId: "real-estate-cf860",
  storageBucket: "real-estate-cf860.appspot.com",
  messagingSenderId: "401079727469",
  appId: "1:401079727469:web:53a3b3219b821e4ab55664"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);