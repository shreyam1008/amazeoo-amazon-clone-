import "./App.css";

import React from "react";
import Header from "./Header";
import Home from "./Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

const App = () => {
  return (
    // for pages like. checkout. basket
    <Router>
      <div className="app">
        {/* header-stays in both pages */}
        <Header />
        {/* on which link what happens check */}
        <Switch>
          {/* to go to checkout page */}
          <Route path="/checkout">
            <Checkout />
          </Route>
          {/* "default route by "/" ..use in last*/}
          <Route path="/">
            {/* home-everything */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
