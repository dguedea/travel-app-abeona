import React from "react";

import "./CityImage.css";
import airplane from "../assets/airplane.jpg";

const CityImage = (props) => {

  return (
    <React.Fragment>
      {typeof props.destination.destCity != "undefined" && (
        <div className="city-image-item">
          <img src={airplane} alt="test image" />
          <div className="city-image-description">
            Grab photo of {props.destination.destCity} from microservice
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default CityImage;
