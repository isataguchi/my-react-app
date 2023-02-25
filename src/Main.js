import React from "react";
import bootstrap from "bootstrap";
import "./index.css";

export default function Main() {
  return (
    <div className="Main">
      <div className="row">
        <div className="col-6">
          <div className="clearfix d-flex">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Cloudy icon"
              className="weather-icon"
            />
            <div>
              <span id="temperature">19</span>
              <span className="units">
                <a href="#" id="celsius-link">
                  °C
                </a>
                |
                <a href="#" id="fahrenheit-link">
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0%</li>
            <li>Humidity: 77%</li>
            <li>Wind: 8 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
