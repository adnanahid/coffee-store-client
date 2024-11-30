// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2gAf32inuyn_41bdSd6cRJE42RM9kS6Q",
  authDomain: "coffee-master-28996.firebaseapp.com",
  projectId: "coffee-master-28996",
  storageBucket: "coffee-master-28996.firebasestorage.app",
  messagingSenderId: "178443141174",
  appId: "1:178443141174:web:c0b9000675a00dba035897",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;
