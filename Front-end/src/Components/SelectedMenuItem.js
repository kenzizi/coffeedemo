import React from "react";
import "../cssFiles/SelectedMenuItem.css";

const SelectedMenuItem = ({ title }) => {
  return (
    <div>
      <div className="card-front-container">
        <div className="card-front-image"></div>
        <div className="card-front-details">
          <div className="card-front-title-container">
            <p className="card-front-title">{title}</p>
          </div>
          <p className="card-front-desc">Description</p>
        </div>
      </div>
      <div className="card-back-container"></div>
    </div>
  );
};

export default SelectedMenuItem;
