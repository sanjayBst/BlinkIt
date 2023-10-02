// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyA3-YwsPGzJAthsF3srKYIiXJyZlun5zzw",
  authDomain: "blinkit-67e09.firebaseapp.com",
  databaseURL: "https://blinkit-67e09-default-rtdb.firebaseio.com",
  projectId: "blinkit-67e09",
  storageBucket: "blinkit-67e09.appspot.com",
  messagingSenderId: "662532831315",
  appId: "1:662532831315:web:7ab4cedbddefb6d8a0eea6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
