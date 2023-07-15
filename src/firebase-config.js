// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from '@firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAqxjUHyv7HfwU2bPokJSUbiXOIsoUnSI",
  authDomain: "react-chat-app-539cc.firebaseapp.com",
  projectId: "react-chat-app-539cc",
  storageBucket: "react-chat-app-539cc.appspot.com",
  messagingSenderId: "23943229071",
  appId: "1:23943229071:web:29a8a7e433052ccf590afa"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
