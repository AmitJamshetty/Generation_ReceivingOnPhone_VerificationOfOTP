import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBYVNbRK3FjXoB27t4lK0zPIxcr4Itf62s",
  authDomain: "otp-d01bf.firebaseapp.com",
  projectId: "otp-d01bf",
  storageBucket: "otp-d01bf.appspot.com",
  messagingSenderId: "498874209869",
  appId: "1:498874209869:web:de449510bad175458cae04",
  measurementId: "G-0D8X947G0F"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);