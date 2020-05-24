import React from "react";

import "./App.css";

export default function Location() {
  //  //⏰Current Date
  //function formatDate(date) {
  //  let dateDay = date.getDate();
  //  let hour = date.getHours();if (hour < 10) {
  //    hour = `0${hour}`;
  //  }
  //  let minute = date.getMinutes();
  //  if (minute < 10) {
  //    minute = `0${minute}`;
  //  }
  //  let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  //  let day = days[date.getDay()];
  //  let months = ["January","February","March","April","May","June","July","August","Setptember","October","November","December"];
  //  let month = months[date.getMonth()];
  //  let year = date.getFullYear();
//
  //  return `${day}, ${dateDay} ${month} ${year} ${hour}:${minute}`;
  //}
  ////🕐Last updated
  //function formatLastUpdated (timestamp) {
  //  let updateDate = new Date(timestamp);
  //  let hours = updateDate.getHours();
  //  if (hours < 10) {
  //    hours = `0${hours}`;
  //  }
  //  let minutes = updateDate.getMinutes();
  //  if (minutes < 10) {
  //    minutes = `0${minutes}`;
  //  }
//
  //  return `${hours}:${minutes}`;
  //}

  let locationData = {
    city: "Porto",
    date: "Saturday, 25 April 2020 18:00",
    lastUpdated: "17:00"
  };
  return (
    <div className="location">
      <form className="searchform">
          <input type="form" className="location" placeholder="Location" autoComplete="off" autoFocus="on" />
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