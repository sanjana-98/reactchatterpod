// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFTAMH26uX8MY-tVXr17GuInDGpgwULmk",
  authDomain: "chat-834c1.firebaseapp.com",
  projectId: "chat-834c1",
  storageBucket: "chat-834c1.appspot.com",
  messagingSenderId: "593238713177",
  appId: "1:593238713177:web:14ec8fd677a2ecfa10e248"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()