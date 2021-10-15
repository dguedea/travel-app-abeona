import React, { useState, useEffect } from "react";

import "./CityHistory.css";

const CityHistory = (props) => {
  const [history, setHistory] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    fetch(
      `https://wiki-scrape-361.herokuapp.com/paraunder/${props.destination.destCity}/History/2`
    )
      .then((response) => response.json())
      .then((result) => {
        setHistory(result);
        // setLatLong(latitude, longitude);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, [props.destination]);

  return (
    <React.Fragment>
      {history.input != "undefined" ? (<div className="city-history-item">
        <h2>A bit of History</h2>
        <div className="city-history-description">
        <p>{history.output}</p>
        </div>
      </div>) : ('')}
    </React.Fragment>
  );
};

export default CityHistory;
