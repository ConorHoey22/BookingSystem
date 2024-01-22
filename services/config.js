// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKGfG8dRDcB8YOJqN8fu_wszgoUfJ-SjU",
  authDomain: "db-booking-f631d.firebaseapp.com",
  databaseURL: "https://db-booking-f631d-default-rtdb.firebaseio.com",
  projectId: "db-booking-f631d",
  storageBucket: "db-booking-f631d.appspot.com",
  messagingSenderId: "178798267413",
  appId: "1:178798267413:web:103eac741742de0da9521c"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);

