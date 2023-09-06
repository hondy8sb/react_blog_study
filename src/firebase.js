import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEiQJ-bIigHw_Wm1twuJmEPfYanCjICv4",
  authDomain: "blog-44b58.firebaseapp.com",
  projectId: "blog-44b58",
  storageBucket: "blog-44b58.appspot.com",
  messagingSenderId: "423234330630",
  appId: "1:423234330630:web:9d94b78f950766dcb26387"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };