// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1CAgmQ1v6MTFhsojWuTzWSUoA_0B26ww",
  authDomain: "chatapp-874d5.firebaseapp.com",
  projectId: "chatapp-874d5",
  storageBucket: "chatapp-874d5.appspot.com",
  messagingSenderId: "353910652829",
  appId: "1:353910652829:web:a8ff1d82e2c9b48fb6b974"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);