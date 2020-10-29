import React from "react";

import "./Header.css";

import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Header = () => {
  return (
    <div className="header">
      {/* logo */}
      <img
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        alt="amazon logo"
        className="header__logo"
      />

      {/* search bar */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        {/* search icon */}
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* navigation bar */}
      <div className="header__nav">
        {/* options.. signin orders and prime */}
        {/* signin */}
        <div className="header__option">
          <div className="header__optionLineOne">Hello Guest</div>
          <div className="header__optionLineTwo">Sign IN</div>
        </div>
        {/* orders */}
        <div className="header__option">
          <div className="header__optionLineOne">Returns</div>
          <div className="header__optionLineTwo">& Orders</div>
        </div>
        {/* prime try */}
        <div className="header__option">
          <div className="header__optionLineOne">Your</div>
          <div className="header__optionLineTwo">Prime</div>
        </div>

        {/* basket */}
        <div className="header__optionBasket">
          {/* basket icon */}
          <ShoppingBasketIcon />
          {/* basket count */}
          <div className="header__optionLineTwo header__basketCount">0</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
