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
          <Product
            id="111"
            title="something"
            price={420.69}
            image="https://images.unsplash.com/photo-1513116476489-7635e79feb27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=984&q=80"
            rating={4}
          />
          <Product
            id="111"
            title="something"
            price={420.69}
            image="https://images.unsplash.com/photo-1513116476489-7635e79feb27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=984&q=80"
            rating={4}
          />
        </div>
        {/* second row */}
        <div className="home__row">
          <Product
            id="111"
            title="something"
            price={420.69}
            image="https://images.unsplash.com/photo-1513116476489-7635e79feb27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=984&q=80"
            rating={4}
          />
          <Product
            id="111"
            title="something"
            price={420.69}
            image="https://images.unsplash.com/photo-1513116476489-7635e79feb27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=984&q=80"
            rating={4}
          />
          <Product
            id="111"
            title="something"
            price={420.69}
            image="https://images.unsplash.com/photo-1513116476489-7635e79feb27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=984&q=80"
            rating={4}
          />
        </div>
        {/* third row */}
        <div className="home__row">
          <Product
            id="111"
            title="something"
            price={420.69}
            image="https://images.unsplash.com/photo-1513116476489-7635e79feb27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=984&q=80"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
