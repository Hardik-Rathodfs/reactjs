// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNBlkCDpi6hHafOeYxnec4hy8u9S_c5C8",
  authDomain: "blog-project-8df0d.firebaseapp.com",
  projectId: "blog-project-8df0d",
  storageBucket: "blog-project-8df0d.appspot.com",
  messagingSenderId: "428459122269",
  appId: "1:428459122269:web:2f25a67c54083b23c4f7b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
