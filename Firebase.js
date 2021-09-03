// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhLNOX5KyOjfn374K3qUn3yDB43B2WWyg",
  authDomain: "smartschools-dfba7.firebaseapp.com",
  projectId: "smartschools-dfba7",
  storageBucket: "smartschools-dfba7.appspot.com",
  messagingSenderId: "514967757134",
  appId: "1:514967757134:web:4a8ea18f2c6785f5d77e1f",
  measurementId: "G-LG3VQME7XQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);