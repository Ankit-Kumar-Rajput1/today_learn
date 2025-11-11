// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC-GrmnF4OIqFwoZDsxFVh24_mg9zu_nZw",
  authDomain: "ws-survey-32add.firebaseapp.com",
  databaseURL: "https://ws-survey-32add-default-rtdb.firebaseio.com",
  projectId: "ws-survey-32add",
  storageBucket: "ws-survey-32add.firebasestorage.app",
  messagingSenderId: "714956816335",
  appId: "1:714956816335:web:cf940218d739413d531cba",
  measurementId: "G-368E5Y8JPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
export const db = getDatabase(app);

export default app;