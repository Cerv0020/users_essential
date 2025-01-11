import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: "user-essentials.firebaseapp.com",
  projectId: "user-essentials",
  storageBucket: "user-essentials.firebasestorage.app",
  messagingSenderId: "913236048141",
  appId: "1:913236048141:web:553a4c08d51551c880d844",
};

const App = initializeApp(firebaseConfig);

export const auth = getAuth(App);
export const db = getFirestore(App);