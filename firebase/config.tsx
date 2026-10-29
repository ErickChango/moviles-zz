import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBj8n9pQOoT3GeOTPh2Kb8kygTF0PEdHQg",
  authDomain: "moviles-54b98.firebaseapp.com",
  databaseURL: "https://moviles-54b98-default-rtdb.firebaseio.com",
  projectId: "moviles-54b98",
  storageBucket: "moviles-54b98.firebasestorage.app",
  messagingSenderId: "668082572432",
  appId: "1:668082572432:web:f46226b8807113d8579c15"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
