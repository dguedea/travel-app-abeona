/*
* Name: WeatherOutput
* NOTE: this component must replace TestWeather component if plugin not installed!!!

* Description: Displays weather conditions and temperature in destination city
* Takes: destination city input from CityForm and fetches the weather from Open Weather Map
* Outputs: component with weather conditions, temperature and pakcing recommendations
*/
import React, { useState, useEffect } from "react";
import TimeZoneOutput from "./TimeZoneOutput";

import "./WeatherOutput.css";

const WeatherOutput = (props) => {
  const apikey = "927e91ee96236b7cd9c406dd5a8ee5e7";
  const [weather, setWeather] = useState("");
  const [error, setError] = useState("");
  const [longitude, setLongitude] = useState();
  const [latitude, setLatitude] = useState();
  const [weatherIcon, setWeatherIcon] = useState();
  const [cityInput, setcityInput] = useState({});

  const api = `https://api.openweathermap.org/data/2.5/weather?q=${props.destination.destCity}&units=imperial&appid=${apikey}`

  useEffect(() => {
    fetch(
      api
    )
      .then((response) => response.json())
      .then((result) => {
        setWeather(result);
        setLatitude(result.coord.lat);
        setLongitude(result.coord.lon);
        setcityInput(props.destination);
        setWeatherIcon(
          "http://openweathermap.org/img/wn/" +
            result.weather[0].icon +
            "@2x.png"
        );
        console.log("weather", result);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, [props.destination]);


  return (
    <React.Fragment>
      {/* If weather is available, display otherwise show error */}
      <div className="city-weather-item">
        {/* {error && <p>Cannot fetch weather data</p>} */}
        {typeof props.destination.destCity === "undefined" ? (
          ""
        ) : typeof weather.main != "undefined" ? (
          <div>
            <h2>Weather in {props.destination.destCity}</h2>
            <div>
              <div className="city-weather">
                <img src={props.photoIcon} />
                <p>{weather.weather[0].main}</p>
              </div>

              <div className="city-temp">
                <p>{Math.round(weather.main.temp)} ° F</p>
              </div>
              {/* Conditional statements to output packing recommendations based on temperature in city */}
              {weather.main.temp > 70 && <div>It is warm in {props.destination.destCity}.  We would recommend packing light clothes like a t-shirt and shorts.</div>}
              {(weather.main.temp <= 70 && weather.main.temp > 40) && <div>It is a bit chilly in {props.destination.destCity}.  We recommend packing a light sweater and jeans.</div>}
              {weather.main.temp <= 40 && <div>It is cold in {props.destination.destCity}. Make sure to bundle up in a winter jacket and mittens.</div>}
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
      {/* Send data to timezone component  */}
      <TimeZoneOutput
        latitude={latitude}
        longitude={longitude}
        cityInput={cityInput}
      />
    </React.Fragment>
  );
};

export default WeatherOutput;
