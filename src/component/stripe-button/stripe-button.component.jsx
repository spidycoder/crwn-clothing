import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./stripe-button.styles.scss";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    "pk_test_51NTHptSJr2XXgtt1mVuXWt3k4Al0bFkgJufXxhbUflrRtwfZ8eL9kVByMK2YY6sfGlPQ63ZPIEtNNXwvoHGyMVGg00py92Wq3S";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    // to get this component and all its info visit this site : {https://github.com/azmenak/react-stripe-checkout}
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      shippingAddress
      image="https://w1.pngwing.com/pngs/930/196/png-transparent-grey-crown-blue-purple-black-pink-green-red-thumbnail.png"
      description={`Your total Amount is ₹${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      currency="INR"
      stripeKey={publishablekey}
    />
  );
};
export default StripeCheckoutButton;
