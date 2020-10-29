import "./App.css";

import React from "react";
import Header from "./Header";
import Home from "./Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    // for pages like. checkout. basket
    <Router>
      <div className="app">
        {/* on which link what happens check */}
        <Switch>
          {/* to go to checkout page */}
          <Route path="/checkout">
            <Header />
            <h1>checkout</h1>
          </Route>
          {/* "default route by "/" ..use in last*/}
          <Route path="/">
            {/* header */}
            <Header />
            {/* home-everything */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
