import React from "react";
// import RocketInfo from "./RocketInfo";

import "./RocketImg.css";

function RocketImg({ image }) {
  return (
    <div>
      <div className="rocket-item">{<img src={image} alt="" />}</div>
    </div>
  );
}

export default RocketImg;
