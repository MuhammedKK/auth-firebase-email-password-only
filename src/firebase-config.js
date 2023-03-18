// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5uoPdPX3aC37gE9aFgcA8hgU4qWTIUPc",
  authDomain: "auth-rect-with-firebase.firebaseapp.com",
  projectId: "auth-rect-with-firebase",
  storageBucket: "auth-rect-with-firebase.appspot.com",
  messagingSenderId: "1064895241755",
  appId: "1:1064895241755:web:e197f2d8d961a5e7b362be",
  measurementId: "G-ZGDKJ54F3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);