import React, { useState, useEffect } from "react";

import "./WeatherOutput.css";

const WeatherOutput = (props) => {
  const apikey = "927e91ee96236b7cd9c406dd5a8ee5e7";
  const [weather, setWeather] = useState("");
  const [error, setError] = useState("");
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${props.destination.destCity}&units=imperial&appid=${apikey}`
    )
      .then((response) => response.json())
      .then((result) => {
        setWeather(result);
        setLatitude(result.coord.lat);
        setLongitude(result.coord.lon);
        setLatLong(latitude, longitude);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, [props.destination]);

  const setLatLong = (lat, lon) => {
    props.latLongHandler(lat, lon);
  }


  return (
    <React.Fragment>
        <div className="city-weather-item">
      {/* {error && <p>Cannot fetch weather data</p>} */}
      {(typeof weather.main != "undefined") ? (<div>
        <h2>Weather in {props.destination.destCity}</h2>
        <div className="city-weather-description">
        <p>{weather.main.temp} degrees Fahrenheit</p>
        <p>It is {weather.weather[0].main}</p>
        </div>
      </div>) : ('')}
      </div>
    </React.Fragment>
  );
};

export default WeatherOutput;
