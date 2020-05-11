import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // it calculate in paise unit
  const publishableKey = "pk_test_bVVNLVFlP7uKovSyw4IBa3F4003LE5Rked";

  const onToken = (token) => {
    console.log(token);
    alert("payment successfull");
  };

  return (
    <StripeCheckout
      name="Sami Ltd. co."
      description={`Your total is ₹${price}`}
      image="https://svgshare.com/i/CUz.svg"
      label="Pay Now"
      amount={priceForStripe}
      currency="INR"
      stripeKey={publishableKey}
      locale="en"
      shippingAddress
      billingAddress
      token={onToken}
    />
  );
};

export default StripeCheckoutButton;
