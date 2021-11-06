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

  // Set status if city return failed

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
              {weather.Temp > 70 && <div>It is warm in {props.destination.destCity}.  We would recommend packing light clothes like a t-shirt and shorts.</div>}
              {(weather.Temp <= 70 && weather.Temp > 40) && <div>It is a bit chilly in {props.destination.destCity}.  We recommend packing a light sweater and jeans.</div>}
              {weather.Temp <= 40 && <div>It is cold in {props.destination.destCity}. Make sure to bundle up in a winter jacket and mittens.</div>}
              <br></br>
            </div>
          </div>
        ) : (
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
