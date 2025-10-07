// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_aXeWus7uEI-bP_Fg69U-y4IgP4t0jlY",
  authDomain: "dragon-auth-b251f.firebaseapp.com",
  projectId: "dragon-auth-b251f",
  storageBucket: "dragon-auth-b251f.firebasestorage.app",
  messagingSenderId: "1065046482143",
  appId: "1:1065046482143:web:bc820529c3a13ec7fa5d6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;