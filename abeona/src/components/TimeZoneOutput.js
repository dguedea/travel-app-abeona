/*
* Name: TimeZoneOutput
* Description: Displays current timezone of destination city
* Takes: destination city input from CityForm and fetches timezone information
* Outputs: component with current timezone of destination and a photo of world
*/
import React, { useState, useEffect } from "react";

import "./TimeZoneOutput.css";
import timezone from "../assets/timezone.svg";

const TimeZoneOutput = (props) => {
  const apikey = "OF86B8KNN9JF";
  const [time, setTime] = useState("");
  const [error, setError] = useState("");

  // Get request to timezone db api
  // Sets time with response from output
  // Only fetches when destination city changes
  useEffect(() => {
    fetch(
      `http://api.timezonedb.com/v2.1/get-time-zone?key=${apikey}&format=json&by=position&lat=${props.latitude}&lng=${props.longitude}`
    )
      .then((response) => response.json())
      .then((result) => {
        setTime(result);
        console.log("time zone", result);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, [props.cityInput]);

  return (
    <React.Fragment>
      <div className="city-time-item">
        {time.status != "FAILED" ? (
          <div>
            <h2>Time now in {props.cityInput.destCity}</h2>
            <div className="city-time-description">
              <p>
                {time.zoneName}, {time.abbreviation}
              </p>
              <p>{time.formatted}</p>
            </div>
            <div className="clock">
              <img className="clock-image" src={timezone} />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </React.Fragment>
  );
};

export default TimeZoneOutput;
