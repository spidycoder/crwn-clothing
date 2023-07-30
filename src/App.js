import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { connect } from "react-redux";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import AuthProvider from "./component/context/AuthContext";
import { auth, app } from "./firebase/firebase-initialise";


import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop.component";
import Header from "./component/header/header.jsx";
import CheckOutPage from "./pages/checkout/checkout";
import CollectionPage from "./pages/collection/collection.component";
import SingINadnSingUp from "./pages/sign-in-sign-up/sign-in-sign-up";
import ContactPage from "./pages/contactpage/contact";

import { setCurrentUser } from "./redux/user/user-action";

const App = ({ setCurrentUser, currentUser }) => {
  
  useEffect(() => {
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
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/:collectionId" element={<CollectionPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/checkout" element={<CheckOutPage />} />
            {currentUser ? (
              <Route path="/signin" element={<HomePage />} />
            ) : (
              <Route path="/signin" element={<SingINadnSingUp />} />
            )}
          </Routes>
        </AuthProvider>
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
