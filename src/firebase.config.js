// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyAaJY9LaVhYICPLmYC8r4G0i4pvQ20nbAk",
  authDomain: "blinkit-clone-36f01.firebaseapp.com",
  // databaseURL: "https://blinkit-clone-36f01-default-rtdb.firebaseio.com",
  projectId: "blinkit-clone-36f01",
  storageBucket: "blinkit-clone-36f01.appspot.com",
  messagingSenderId: "584221354690",
  appId: "1:584221354690:web:06a9755077b30f1245295b",
  measurementId: "G-4J4DVXWQ7J"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
