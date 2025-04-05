import { getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAQfDJn_1P3HRlYPFVH6GDEy0kzuwfLqdg",
  authDomain: "interviews-f807d.firebaseapp.com",
  projectId: "interviews-f807d",
  storageBucket: "interviews-f807d.firebasestorage.app",
  messagingSenderId: "508707418295",
  appId: "1:508707418295:web:30392b4a0f3669faf4dd32",
  measurementId: "G-0XLDD0BQ2V",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
