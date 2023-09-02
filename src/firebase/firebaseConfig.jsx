// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import {getFirestore} from 'firebase/firestore'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD1aQWRzNhC_hnFWgkrmYrfK8P6DL0FZA",
  authDomain: "kitsune-manga-store.firebaseapp.com",
  projectId: "kitsune-manga-store",
  storageBucket: "kitsune-manga-store.appspot.com",
  messagingSenderId: "369576321463",
  appId: "1:369576321463:web:6e0ac336efb9cc7cf64832"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);