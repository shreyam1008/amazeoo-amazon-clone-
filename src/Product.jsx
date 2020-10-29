import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      {/* title price and rating */}
      <div className="product__info">
        {/* product title */}
        <p>a something prodcut to do soemthing</p>

        {/* product rate */}
        <div className="product__price">
          <small>$</small>
          <strong>420.69</strong>
        </div>

        {/* product rating */}
        <div className="product__rating">
          <p>⭐</p>
        </div>
      </div>

      {/* product image */}
      <img
        src="https://images.unsplash.com/photo-1513116476489-7635e79feb27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=984&q=80"
        alt="product"
        className="product__image"
      />

      {/* add to basket button */}
      <button className="product__button">add to bsket</button>
    </div>
  );
};

export default Product;
