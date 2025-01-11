import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBSL4MlKQH9jexMl-uGoh-a5m3m_MmkTY8",
  authDomain: "user-essentials.firebaseapp.com",
  projectId: "user-essentials",
  storageBucket: "user-essentials.firebasestorage.app",
  messagingSenderId: "913236048141",
  appId: "1:913236048141:web:553a4c08d51551c880d844",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };