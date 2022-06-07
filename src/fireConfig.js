// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9Rbr8gy1ODWOsrlv3TT1RdYfsRGykBR4",
  authDomain: "firecom-7cc27.firebaseapp.com",
  projectId: "firecom-7cc27",
  storageBucket: "firecom-7cc27.appspot.com",
  messagingSenderId: "602090436328",
  appId: "1:602090436328:web:a7ed9ab60bd0fc7984bb5d",
  measurementId: "G-YT7ER8GKQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)

export default fireDB