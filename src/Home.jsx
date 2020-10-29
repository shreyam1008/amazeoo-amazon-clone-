import React from "react";

import "./Home.css";
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
      </div>
    </div>
  );
};

export default Home;
