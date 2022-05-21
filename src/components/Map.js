import React from "react";
import map from "../images/map.jpeg";

const Map = () => {
  return (
    <div className="  container">
      <div className="border shadow-lg rounded p-3 text-center">
        <h2>By Country</h2>
        <img className="w-100 mt-5" src={map} alt="world map"></img>
      </div>
    </div>
  );
};

export default Map;
