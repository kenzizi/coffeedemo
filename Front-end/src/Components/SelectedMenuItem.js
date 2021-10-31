import React, { useState, useEffect } from "react";
import "../cssFiles/SelectedMenuItem.css";
import Cardimage from "../files/coffeedemo.jpg";
import SizeCard from "./menuItemSizeCard";

const SelectedMenuItem = ({ title, details, id }) => {
  const [array, setArray] = useState(details);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    // Anything in here is fired on component mount.
    setArray(
      array.map((e, i) => {
        return { ...e, active: false };
      })
    );
  }, []);

  const handleChange = (id, price, Qte) => {
    setArray(
      array.map((selectedItem, index) => {
        return selectedItem._id === id
          ? { ...selectedItem, active: !selectedItem.active }
          : { ...selectedItem, active: false };
      })
    );
    setTotalPrice(parseInt(price) * Qte);
  };

  const objDetails = array.map((itemSize, index) => {
    if (itemSize.size === "default") {
      return null;
    } else {
      return (
        <div>
          <SizeCard
            size={itemSize.size}
            price={itemSize.price}
            func={handleChange}
            id={itemSize._id}
            active={itemSize.active}
          />
        </div>
      );
    }
  });
  return (
    <div className="flip-card" key={id}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={Cardimage} alt="Avatar" className="card-image" />
          <p className="menuItem-card-title">{title}</p>
        </div>
        <div className="flip-card-back">
          <div className="menuItem-card-b-title">{title}</div>
          <div className="card-back-sizes-container">{objDetails}</div>
          <div className="card-price-btn">
            <div className="card-total-price">Total : {totalPrice}</div>

            <div className="ui buttons ">
              <button class="ui button menu-item-btn cancel-btn">Cancel</button>
              <div className="or"></div>
              <button className="ui positive button menu-item-btn">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedMenuItem;
