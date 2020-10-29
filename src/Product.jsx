import React from "react";
import "./Product.css";

const Product = ({ id, title, image, price, rating }) => {
  return (
    <div className="product">
      {/* title price and rating */}
      <div className="product__info">
        {/* product title */}
        <p>{title}</p>

        {/* product rate */}
        <div className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>

        {/* product rating */}
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      {/* product image */}
      <img src={image} alt="product" className="product__image" />

      {/* add to basket button */}
      <button className="product__button">add to bsket</button>
    </div>
  );
};

export default Product;
