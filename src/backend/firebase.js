import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAolQez4ftrkM_IVGktqVJS0x6jGg9WARs",
  authDomain: "tiktok-clone-39b1a.firebaseapp.com",
  databaseURL: "https://tiktok-clone-39b1a-default-rtdb.firebaseio.com",
  projectId: "tiktok-clone-39b1a",
  storageBucket: "tiktok-clone-39b1a.appspot.com",
  messagingSenderId: "1083767671000",
  appId: "1:1083767671000:web:4d8e70f8e745689821efad",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = new getDatabase(app);
export const provider = new GoogleAuthProvider();
export const storage = new getStorage(app);
