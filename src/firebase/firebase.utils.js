import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore";

import { auth, app } from "./firebase-initialise";

const firestore = getFirestore(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapshot = await getDoc();

  if (!snapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user profile", error.message);
    }
  }

  return userRef;
};

//this code is to add data to firestore
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(firestore, collectionKey);

  try {
    for (const object of objectsToAdd) {
      const docRef = doc(collectionRef);
      await setDoc(docRef, object);
    }
    console.log("Documents added successfully!");
  } catch (error) {
    console.error("Error adding documents: ", error);
  }
};

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // Handle successful sign-in
    })
    .catch((error) => {
      // Handle sign-in error
    });
};

export const signInWithEmailAndPasswod = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Handle successful sign-in
    })
    .catch((error) => {
      // Handle sign-in error
    });
};

export default app;
