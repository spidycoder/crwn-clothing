import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxxlmmo55yn7DjBZP-IvPuKuTjiyg_Zs4",
  authDomain: "crwn-fb7b8.firebaseapp.com",
  projectId: "crwn-fb7b8",
  storageBucket: "crwn-fb7b8.appspot.com",
  messagingSenderId: "409374049420",
  appId: "1:409374049420:web:e3b1e0fb5ea4e31139e7a9"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
