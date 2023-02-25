import React from "react";
import bootstrap from "bootstrap";

import Search from "./Search";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./index.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="weather-app">
        <Search />
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
