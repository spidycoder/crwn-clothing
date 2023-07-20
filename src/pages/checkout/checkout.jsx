import { React } from "react";
import "./checkout.scss";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";
import StripeCheckoutButton from "../../component/stripe-button/stripe-button.component";
import CheckoutItem from "../../component/checkout-item/checkout-item";
import ShareButton from "../../component/share-button/share-button.component";

const Url = "http://localhost:3000/checkout";
const shareTitle="Share Your Cart"
const CheckOutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="share">
      <ShareButton url={Url} shareTitle={shareTitle}/>
    </div>
    <div className="total">TOTAL: ₹{total}</div>
    <StripeCheckoutButton price={total} />
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckOutPage);
