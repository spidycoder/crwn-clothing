import React from "react";
import { NavLink } from "react-router-dom/dist";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { connect } from "react-redux";
import "./header.scss";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

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
const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <NavLink className="logo-container" to="/">
      <Logo className="logo" />
    </NavLink>
    <div className="options">
      <NavLink className="option" to="/shop">
        SHOP
      </NavLink>
      <NavLink className="option" to="/contact">
        CONTACT
      </NavLink>
      {/* <NavLink className="option" to="/signin">
        SIGN IN
      </NavLink> */}
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <NavLink to="/signin" className="option">
          SIGN IN
        </NavLink>
      )}
      <CartIcon />
    </div>
    {hidden ? false : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
