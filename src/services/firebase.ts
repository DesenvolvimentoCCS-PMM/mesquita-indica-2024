import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAzwgI4gYf9ovpiv9ahSwmM2862tlOE01w",
  authDomain: "hml-mi2024.firebaseapp.com",
  projectId: "hml-mi2024",
  storageBucket: "hml-mi2024.appspot.com",
  messagingSenderId: "279714056123",
  appId: "1:279714056123:web:cd1dbf5bfa4e486612669e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };