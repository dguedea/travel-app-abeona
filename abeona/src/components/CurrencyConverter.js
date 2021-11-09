/*
* Name: CurrencyConverter
* Description: Displays currency used in destination city
* Takes: country code input from App component
* Outputs: component with used currency in the country of the destination city
*/
import React, { useState, useEffect } from "react";

import "./CurrencyConverter.css";

const CurrencyConverter = (props) => {
  const [currency, setCurrency] = useState({});

  // Fetch only when country changes (from app component)
  // Performs GET request to Ben's microservice with country code
  // Sets Currency variable with response
  useEffect(() => {
    fetch(`https://flask-heroku99.herokuapp.com/${props.country}`)
      .then((response) => response.json())
      .then((result) => {
        setCurrency(result);
        console.log("currency", result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.country]);

  return (
    <React.Fragment>
      {typeof props.destination.destCity != "undefined" && (
        <div className="city-currency-item">
          <h2>Currency Information</h2>
          <div className="city-currency-description">
            Currency in {props.destination.destCity} is {currency.output}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default CurrencyConverter;
