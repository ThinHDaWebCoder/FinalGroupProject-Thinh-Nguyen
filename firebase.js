// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClp5XfhVlO2XjCvle04-LquBKeBYM66As",
  authDomain: "sheesh-b00.firebaseapp.com",
  projectId: "sheesh-b00",
  storageBucket: "sheesh-b00.appspot.com",
  messagingSenderId: "102596453590",
  appId: "1:102596453590:web:241a38c6e6ec541a275577",
  measurementId: "G-KPD4P27Q2G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();