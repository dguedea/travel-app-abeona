import React, { useState } from "react";

import "./CityImage.css";

const CityImage = (props) => {

  return (
    <React.Fragment>
      {typeof props.destination.destCity != "undefined" && (
        <div className="city-image-item">
          <img
            src={`https://lamjenni-image.herokuapp.com/${props.destination.destCity},500,300`}
            alt="test image"
          />
          <div className="city-image-description">
            A taste of what {props.destination.destCity} looks like!
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default CityImage;
