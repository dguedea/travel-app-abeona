/*
* Name: CityWeather
* Description: Displays weather conditions and temperature in destination city
* Takes: destination city input from CityForm and fetches the weather from Steve's microservice
* Outputs: component with weather conditions, temperature and pakcing recommendations
*/

import React, { useState, useEffect } from "react";
import TimeZoneOutput from "./TimeZoneOutput";

import "./TestWeather.css";

const TestWeather = (props) => {
  const [weather, setWeather] = useState("");
  const [error, setError] = useState("");
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [weatherIcon, setWeatherIcon] = useState();
  const [cityInput, setcityInput] = useState({});

  // NOTE: this will only work when plugin installed on Chrome due to CORS error
  // Get request to Steve's microservice to gather temperature and conditions in destination city
  // Only fetches when country code changes
  useEffect(() => {
    fetch(
    `https://weather-api-361.herokuapp.com/name?city=${props.destination.destCity}&country=${props.country}`
    )
      .then((response) => response.json())
      .then((result) => {
        setWeather(result);
        console.log("weather", result);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, [props.country]);

  return (
    <React.Fragment>
      <div className="city-weather-item">
        {/* {error && <p>Cannot fetch weather data</p>} */}
        {typeof props.destination.destCity === "undefined" ? (
          ""
        ) : typeof weather.City != "undefined" ? (
          <div>
            <h2>Weather in {props.destination.destCity}</h2>
            <div>
              <div className="city-weather">
                <img src={props.photoIcon} />
                <p>{weather.Conditions}</p>
              </div>

              <div className="city-temp">
                <p>{Math.round(weather.Temp)} ° F</p>
              </div>
              {/* Conditional statement to output packing recommendations based on temperature */}
              {weather.Temp > 70 && <div>It is particularly warm in {props.destination.destCity}.  We would recommend packing light clothes like a t-shirt and shorts.</div>}
              {(weather.Temp <= 70 && weather.Temp > 40) && <div>It is a bit chilly in {props.destination.destCity}.  We recommend packing a light sweater and jeans.</div>}
              {weather.Temp <= 40 && <div>It is quite cold in {props.destination.destCity}. Make sure to bundle up in a winter jacket and mittens.</div>}
              <br></br>
            </div>
          </div>
        ) : (
          // Output if weather fetch is unavailable
          <div className="weather-error">
            <h2>Weather unavailable</h2>
            <br></br>
            <div>Weather for that location is unavailable</div>
            <div>
              Please make sure the destination city is spelled correctly &
              search again
            </div>
            <br></br>
          </div>
        )}
      </div>
      <TimeZoneOutput
        latitude={latitude}
        longitude={longitude}
        cityInput={cityInput}
      />
    </React.Fragment>
  );
};

export default TestWeather;
