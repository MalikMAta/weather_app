// This will be the forum fields component that will allow the user to search for cities

import React, { useState, useEffect } from "react";
import styles from "./mystyle.module.css";

import Weather from "./Weather";
import axios from "axios";

function WeaherSearch(props) {
  const [city, setCity] = useState("");

  const [long, setLong] = useState("");
  const [lat, setlat] = useState("");

  // const[information, setInformation] = useState([{feels_like: "",humidity : "", temp: "" , visibility: "", sunrise: "", sunset: "", skyDescription : "", }])
  const[ daily, setDaily] =useState()
  const WeatherDetailReport = (location) => {
    // Call the api using axios
    axios
      .get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
          address: city,
          key: "AIzaSyAuOrEiHZBJcOOOKjdNR67N7QTtKPeJ4sk",
        },
      })
      .then((res) => {
        //  console.log(res.data.results[0].geometry.location.lat)
        setlat(res.data.results[0].geometry.location.lat);
        setLong(res.data.results[0].geometry.location.lng);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if(city){
  WeatherDetailReport(city);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    

    axios
      .get(
        // `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2ef83a8b42392109d4cc4d35fac1fdde`
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude={}&appid=2ef83a8b42392109d4cc4d35fac1fdde`
      )
      .then((res) => {
        console.log(res);

        const dailyData = res.data.daily
        setDaily(dailyData)
      });
  };

  return (
    <>
      <div className="container">
        <div className={styles.headerRow} className="row">
          <div className="col s12" className={styles.title}>
            <h5>Choose a city to check the current Weather</h5>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className="row">
            <div className="col s12 " className={styles.cityText}>
              <label htmlFor="City">City</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div>
              <button className="btn waves-effect waves-light btn-small">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="container">
        <Weather daily = {daily} />
      </div>
    </>
  );
}
export default WeaherSearch;
