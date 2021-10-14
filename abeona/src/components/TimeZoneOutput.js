import React, { useState, useEffect } from "react";

// import "./WeatherOutput.css";

const TimeZoneOutput = (props) => {
  const apikey = "OF86B8KNN9JF";
  const [time, setTime] = useState("");
  const [error, setError] = useState("");

  console.log(props.destination.destCity);

//   useEffect(() => {
//     fetch(
//       ``
//     )
//       .then((response) => response.json())
//       .then((result) => {
//         setTime(result);
//         console.log(result);
//       })
//       .catch((error) => {
//         console.log(error);
//         setError(error);
//       });
//   }, [props.destination]);

  return (
    <React.Fragment>
        <div className="city-time-item">
      {(typeof time.main != "undefined") ? (<div>
        <h2>Weather in {props.destination.destCity}</h2>
        <div className="city-time-description">
        </div>
      </div>) : ('')}
      </div>
    </React.Fragment>
  );
};

export default TimeZoneOutput;
