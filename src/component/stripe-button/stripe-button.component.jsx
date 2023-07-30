import React from "react";
import StripeCheckout from "react-stripe-checkout";
import "./stripe-button.styles.scss";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishablekey =
    "pk_test_51NTHptSJr2XXgtt1mVuXWt3k4Al0bFkgJufXxhbUflrRtwfZ8eL9kVByMK2YY6sfGlPQ63ZPIEtNNXwvoHGyMVGg00py92Wq3S";
  const onToken = (token) => {
    // axios({
    //   url: "payment",
    //   method: "post",
    //   data: {
    //     amount: priceForStripe,
    //     token: token,
    //   },
    // })
    //   .then((response) => {
    //     alert("succesful payment");
    //   })
    //   .catch((error) => {
    //     console.log("Payment Error: ", error);
    //     // alert(
    //     //   "There was an issue with your payment! Please make sure you use the provided credit card."
    //     // );
    //   });

    alert("Payment Successful")
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://w1.pngwing.com/pngs/930/196/png-transparent-grey-crown-blue-purple-black-pink-green-red-thumbnail.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishablekey}
    />
  );
};
export default StripeCheckoutButton;
