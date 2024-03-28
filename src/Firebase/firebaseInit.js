// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3GLH5GYG_mX6-5CT5UfvPgPwN0M4wCQ4",
  authDomain: "buybusy-d8fd1.firebaseapp.com",
  projectId: "buybusy-d8fd1",
  storageBucket: "buybusy-d8fd1.appspot.com",
  messagingSenderId: "371628778165",
  appId: "1:371628778165:web:ed6b806f6396b8087614fc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);