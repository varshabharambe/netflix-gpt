// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC-Va1XjvuPxC9hH1TeW1HncH8WJpPF90",
  authDomain: "netflixgpt-74ff4.firebaseapp.com",
  projectId: "netflixgpt-74ff4",
  storageBucket: "netflixgpt-74ff4.appspot.com",
  messagingSenderId: "215880308325",
  appId: "1:215880308325:web:894c3abe77db8aa035988c",
  measurementId: "G-8N2J37YBT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
// npm install -g firebase-tools