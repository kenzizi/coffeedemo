import React, { useState, useEffect } from "react";

const MenuItemSizeCard = ({ size, price, func, id, active, ItemQte }) => {
  return (
    <div>
      <div
        className={active ? "card-back-active" : "card-back-sizes"}
        onClick={() => {
          func(id, price);
        }}
        key={id}
      >
        <div className="card-back-size">{size}</div>
        <div className="card-back-price">{price}dt</div>
      </div>
    </div>
  );
};

export default MenuItemSizeCard;
