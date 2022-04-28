import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLIWOxVt1xbiVET6CNPwrmTaX6_R4MkC0",
  authDomain: "e-com-prima.firebaseapp.com",
  projectId: "e-com-prima",
  storageBucket: "e-com-prima.appspot.com",
  messagingSenderId: "826195880466",
  appId: "1:826195880466:web:e854d01a010726d61306cb"
};

export const firestoreDB= getFirestore(app)




// Initialize Firebase
const app = initializeApp(firebaseConfig);