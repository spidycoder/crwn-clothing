import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
const config = {
  apiKey: "AIzaSyDU75NwmWwZ46qSFkbi30VJTMQ7OgHzNmc",
  authDomain: "first-2c5a6.firebaseapp.com",
  projectId: "first-2c5a6",
  storageBucket: "first-2c5a6.appspot.com",
  messagingSenderId: "155800528400",
  appId: "1:155800528400:web:94f1e9261adc176bb78c95",
  measurementId: "G-ZC1EGYCGWL",
};
const app = initializeApp(config);
const auth = getAuth(app);
const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const createUserProfileDocument = async (userAuth,additionalData)=>{
  if(!userAuth)return;
  console.log(firestore.doc('users/123adsffasa'));
}
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // Handle successful sign-in
    })
    .catch((error) => {
      // Handle sign-in error
    });
};

export default app;
