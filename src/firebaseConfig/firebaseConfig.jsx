// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQysagE3aGiM39xem9iU-59w3lIuQ8sfs",
  authDomain: "dream-craft-events-da8fb.firebaseapp.com",
  projectId: "dream-craft-events-da8fb",
  storageBucket: "dream-craft-events-da8fb.appspot.com",
  messagingSenderId: "923847074423",
  appId: "1:923847074423:web:6cc8329fa7464c9a751c72"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =getAuth(app);