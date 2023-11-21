import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCDkAX4lX8RG9I1m_xsvmX5pg11xdD9FQY",
  authDomain: "book-66d7c.firebaseapp.com",
  projectId: "book-66d7c",
  storageBucket: "book-66d7c.appspot.com",
  messagingSenderId: "126558578632",
  appId: "1:126558578632:web:ae44244ebbacef51e682fd"
};

// Initialize Firebase
export const appFirebase = initializeApp(firebaseConfig);