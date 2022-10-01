// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  getDocs,
  collection,
  addDoc,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyA_TpKjxfrKGsNESMwsyB-ymtS0BtMvqpc",
  authDomain: "miodata-d53a3.firebaseapp.com",
  projectId: "miodata-d53a3",
  storageBucket: "miodata-d53a3.appspot.com",
  messagingSenderId: "668742994113",
  appId: "1:668742994113:web:d08190b9c591db7a8cec40",
  measurementId: "G-D5G6PT3D6E",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const readDocs = () => getDocs(collection(db, "products"));
export const readUsers = () => getDocs(collection(db, "users"));
export const addDocument = (data) => addDoc(collection(db, "orders"), data);

export const updateStock = (id, updates) => {
  const docRef = doc(collection(db, "products"), id);
  updateDoc(docRef, updates);
};
export const getProductDocument = (id) =>
  getDoc(doc(collection(db, "products"), id));
