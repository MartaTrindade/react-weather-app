import React from "react";

import "./App.css";

export default function Location() {
  let locationData = {
    city: "Porto",
    date: "Saturday, 25 April 2020 18:00",
    lastUpdated: "17:00"
  };
  return (
    <div className="location">
      <form className="searchform">
        <input type="form" className="searchLocation" placeholder="Location" autoComplete="off" />
        <button type="submit" className="btn-dark">Search</button>
        <button type="Current Location" className="btn-light">Current Location</button>
      </form>
      <br />
      <h2>
        <ul>
          <li><i className="fas fa-map-marker-alt" />{" "}<span>{locationData.city}</span></li>
          <li><span>{locationData.date}</span></li>
          <li><span className="last-updated">Last updated: {locationData.lastUpdated}</span></li>
        </ul>
      </h2>
    </div>
  );
}