import React from "react";

import "./CurrencyConverter.css";

const CurrencyConverter = (props) => {
  // TODO: Insert fetch request here

  return (
    <React.Fragment>
      {typeof props.destination.destCity != "undefined" && (
        <div className="city-currency-item">
          <h2>Currency Converter</h2>
          <div className="city-currency-description">
            Currency in {props.destination.destCity} is (CURRENCY)
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default CurrencyConverter;
