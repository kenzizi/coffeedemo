import React from "react";

const MenuItemSizeCard = ({ size, price, func, id, active, ItemQte }) => {
  return (
    <div key={id}>
      <div
        className={active ? "card-back-active" : "card-back-sizes"}
        onClick={() => {
          func(id, price, size);
        }}
        key={id}
      >
        <div className="card-back-size">{size}</div>
        <div className="card-back-price">{price}DT</div>
      </div>
    </div>
  );
};

export default MenuItemSizeCard;
