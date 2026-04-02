import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB-CERwaWY2ZW5-QQZ_0hMYdyv7pyVevEw",
  authDomain: "heerency-website.firebaseapp.com",
  projectId: "heerency-website",
  storageBucket: "heerency-website.firebasestorage.app",
  messagingSenderId: "560427506641",
  appId: "1:560427506641:web:872e9009a799e6f21e9ef0",
};

const app = initializeApp(firebaseConfig);

// 🔥 Firestore DB
export const db = getFirestore(app);