// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcpZVn8tLcO7UIx7ERKqSwZfaWDaJnKio",
  authDomain: "meu-primeiro-projeto-4a9cf.firebaseapp.com",
  projectId: "meu-primeiro-projeto-4a9cf",
  storageBucket: "meu-primeiro-projeto-4a9cf.firebasestorage.app",
  messagingSenderId: "521014504675",
  appId: "1:521014504675:web:d59d30fe8b9f603da0e9d6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp)

export {db}