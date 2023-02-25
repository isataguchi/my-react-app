import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Search from "./Search";
import Header from "./Header";
import Main from "./Main";
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
