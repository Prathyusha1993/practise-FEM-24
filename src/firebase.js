// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBri1qM0_YT_5ugv_87a0zzO1WmKsb5BfE",
  authDomain: "login-demo-app-6e268.firebaseapp.com",
  projectId: "login-demo-app-6e268",
  storageBucket: "login-demo-app-6e268.appspot.com",
  messagingSenderId: "618206480442",
  appId: "1:618206480442:web:a7f98651f6ec1a757ecd03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
