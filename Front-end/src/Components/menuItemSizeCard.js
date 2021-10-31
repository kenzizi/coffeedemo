import React, { useState, useEffect } from "react";

const MenuItemSizeCard = ({ size, price, func, id, active }) => {
  const [Qte, setQte] = useState(1);

  const handleAddRemove = (event) => {
    console.log("eent" + event.target.getAttribute("name"));
    event.target.getAttribute("name") === "add" ? setQte(Qte++) : setQte(Qte--);
  };

  return (
    <div>
      <div
        className={active ? "card-back-active" : "card-back-sizes"}
        onClick={() => {
          func(id, price, Qte);
        }}
        key={id}
      >
        <div className="card-back-size">{size}</div>
        <div className="card-back-price">{price}dt</div>
      </div>
      <div className="card-qte">
        <span
          class="material-icons qte-add-remove"
          name="minus"
          onClick={() => {
            let qte = Qte === 1 ? Qte : Qte - 1;
            setQte(qte);
            func(id, price, qte);
          }}
        >
          remove_circle
        </span>
        {Qte}
        <span
          class="material-icons qte-add-remove"
          name="add"
          onClick={() => {
            let qte = Qte + 1;

            setQte(qte);
            func(id, price, qte);
          }}
        >
          add_circle
        </span>
      </div>
    </div>
  );
};

export default MenuItemSizeCard;
