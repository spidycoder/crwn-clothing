import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { connect } from "react-redux";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop.component";
import Header from "./component/header/header.jsx";
import CheckOutPage from "./pages/checkout/checkout";

import SingINadnSingUp from "./pages/sign-in-sign-up/sign-in-sign-up";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user-action";
import { Redirect } from "react-router/cjs/react-router.min";
const config = {
  apiKey: "AIzaSyDU75NwmWwZ46qSFkbi30VJTMQ7OgHzNmc",
  authDomain: "first-2c5a6.firebaseapp.com",
  projectId: "first-2c5a6",
  storageBucket: "first-2c5a6.appspot.com",
  messagingSenderId: "155800528400",
  appId: "1:155800528400:web:94f1e9261adc176bb78c95",
  measurementId: "G-ZC1EGYCGWL",
};
const App = ({ setCurrentUser, currentUser }) => {
  useEffect(() => {
    const app = initializeApp(config);
    const auth = getAuth(app);
    const db = getFirestore(app);

    const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userRef = doc(db, "users", userAuth.uid);

        onSnapshot(userRef, (snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });

    return () => {
      unsubscribe();
    };
  }, [setCurrentUser]);

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          {currentUser ? (
            <Route path="/signin" element={<Redirect to="/" />} />
          ) : (
            <Route path="/signin" element={<SingINadnSingUp />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
