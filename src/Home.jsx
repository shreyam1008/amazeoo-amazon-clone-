import React from "react";

import "./Home.css";
import Product from "./Product";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        {/* banner */}
        <img
          className="home__image"
          src="https://interfactsvideo.files.wordpress.com/2019/03/amazon-1.png"
          alt="banner"
        />

        {/* product showcase homepage in rows */}
        {/* first row */}
        <div className="home__row">
          <Product />
          <Product />
        </div>
        {/* second row */}
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        {/* third row */}
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
};

export default Home;
