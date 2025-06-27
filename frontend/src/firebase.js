import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAuOlxxhbYb7s9s_BKVxje23GYiIYJyn10",
  authDomain: "therapistai-1c52a.firebaseapp.com",
  projectId: "therapistai-1c52a",
  storageBucket: "therapistai-1c52a.firebasestorage.app",
  messagingSenderId: "804640863668",
  appId: "1:804640863668:web:1cc8cd28b1e6eedf586ee1",
  measurementId: "G-DHY7Y1708C"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const db = getFirestore(app);

  export {auth, db};