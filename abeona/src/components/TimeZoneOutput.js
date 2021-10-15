import React, { useState, useEffect } from "react";

import "./TimeZoneOutput.css";

const TimeZoneOutput = (props) => {
  const apikey = "OF86B8KNN9JF";
  const [time, setTime] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(
      `http://api.timezonedb.com/v2.1/get-time-zone?key=${apikey}&format=json&by=position&lat=${props.latitude}&lng=${props.longitude}`
    )
      .then((response) => response.json())
      .then((result) => {
        setTime(result);
        console.log(result);
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
                The time zone is {time.zoneName}, {time.abbreviation}
              </p>
              <p>Which means the time is {time.formatted}</p>
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
