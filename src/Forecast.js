import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="forecastAPI">
      <h3>Hourly temperature</h3>
      <div className="forecast">
        <div className="row weatherForecast" />
      </div>

      <h3>Daily temperature</h3>
      <div className="forecast">
        <div className="row weatherForecast" />
      </div>
    </div>
  );
}