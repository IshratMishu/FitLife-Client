// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrBgcNiuG6ashhJhOIQkf4RPAALsGqR4o",
  authDomain: "service-assignment11.firebaseapp.com",
  projectId: "service-assignment11",
  storageBucket: "service-assignment11.appspot.com",
  messagingSenderId: "641080316707",
  appId: "1:641080316707:web:2f36cce485aa1cd44af296"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;