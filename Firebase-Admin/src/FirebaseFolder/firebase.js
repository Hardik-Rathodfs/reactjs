// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider, signInWithPopup, signOut} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQuPyrrF26T06DLwRDqjrJiFUf_6FblFo",
  authDomain: "form-validation-project-94226.firebaseapp.com",
  projectId: "form-validation-project-94226",
  storageBucket: "form-validation-project-94226.appspot.com",
  messagingSenderId: "431361102918",
  appId: "1:431361102918:web:161ad70d17dd394b672647"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth()


export const googleAuth = ()=>{
   let provider = new GoogleAuthProvider()
   return signInWithPopup(auth,provider)
}

export const GoogleLogout = async ()=>{
    return await signOut(auth)
}
