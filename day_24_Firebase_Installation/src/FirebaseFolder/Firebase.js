// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUIKGjOMLm5IP9_E6QzhH7rEa5wvmRUYw",
  authDomain: "loginsignup-efae9.firebaseapp.com",
  projectId: "loginsignup-efae9",
  storageBucket: "loginsignup-efae9.appspot.com",
  messagingSenderId: "831939749905",
  appId: "1:831939749905:web:9e15a25add74608ca9a9b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)