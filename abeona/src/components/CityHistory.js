/*
* Name: CityHistory
* Description: Displays text from history section of wikipedia page
* Takes: destination city input from CityForm and fetches history information
* from my own microservice
* Outputs: component with text from the history section of destination city wikipedia
*/

import React, { useState, useEffect } from "react";

import "./CityHistory.css";

const CityHistory = (props) => {
  const [history, setHistory] = useState({});
  const [error, setError] = useState({});

  // Calls my microservice to get paragraph from H2 on a wikipedia search
  // Only fetches if destination city changes from user input
  useEffect(() => {
    fetch(
      `https://wiki-scrape-361.herokuapp.com/paraunder/${props.destination.destCity}/History/2`
    )
      .then((response) => response.json())
      // If successful, setHistory variable with output from result
      .then((result) => {
        setHistory(result);
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
