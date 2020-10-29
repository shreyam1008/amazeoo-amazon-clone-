import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
const Checkout = () => {
  return (
    <div className="checkout">
      {/* ad and basket */}
      <div className="checkout__left">
        {/* ad image */}
        <img
          className="checkout__ad"
          src="https://adfreeblog.org/adfreeblog.png"
          alt="ad"
        />
        {/* basket- bought items */}
        <h2 className="checkout__title">Your basket</h2>
      </div>
      {/* total paying price info */}
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
