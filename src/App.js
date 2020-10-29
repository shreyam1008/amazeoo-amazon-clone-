import "./App.css";

import React from "react";
import Header from "./Header";
import Home from "./Home";

const App = () => {
  return (
    <div className="app">
      {/* header */}
      <Header />

      {/* home-everything */}
      <Home />
    </div>
  );
};

export default App;
