import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item-component.jsx";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { useNavigate } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import "./cart-dropdown.scss";
const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          navigate("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
