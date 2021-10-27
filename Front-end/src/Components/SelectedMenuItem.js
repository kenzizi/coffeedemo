import React, { useState, useEffect } from "react";
import "../cssFiles/SelectedMenuItem.css";
import Cardimage from "../files/coffeedemo.jpg";
import { Checkbox } from "semantic-ui-react";

const SelectedMenuItem = ({ title, details, id }) => {
  const [array, setArray] = useState(details);

  const handleChange = (event, data) => {
    let { name, value, checked } = data;
    setArray(
      array.map((e, i) => {
        return e.size === name
          ? { ...e, check: !e.check }
          : { ...e, check: false };
      })
    );
    console.log(array);
  };

  const objDetails = array.map((itemSize) => {
    if (itemSize.size === "default") {
      return null;
    } else {
      return (
        <div className="card-back-sizes" key={itemSize._id}>
          <p>{itemSize.size}</p>
          <Checkbox
            slider
            onChange={handleChange}
            name={itemSize.size}
            checked={itemSize.check === undefined ? false : itemSize.check}
          />
          <h5>price : 1000</h5>
        </div>
      );
    }
  });
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={Cardimage} alt="Avatar" className="card-image" />
          <p className="menuItem-card-title">{title}</p>
        </div>
        <div className="flip-card-back">
          <div className="menuItem-card-b-title">{title}</div>
          <div className="card-back-sizes-container">{objDetails}</div>
          <div>price : </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedMenuItem;
