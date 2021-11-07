import React, { useState, useEffect } from "react";
import "../cssFiles/SelectedMenuItem.css";
import Cardimage from "../files/coffeedemo.jpg";
import SizeCard from "./menuItemSizeCard";
//redux
import { connect } from "react-redux";
import { addToPanier } from "../redux/panier/panier.actions";

const SelectedMenuItem = ({ addToPanier, title, details, id }) => {
  const [array, setArray] = useState(details);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedPrice, setselectedPrice] = useState(0);
  const [ItemQte, setItemQte] = useState(0);
  const [selectedSize, setSelectedSize] = useState("default");
  useEffect(() => {
    setArray(
      array.map((e, i) => {
        return { ...e, active: false };
      })
    );
  }, []);
  const handleAddRemove = (event) => {
    let qte =
      event.target.getAttribute("name") === "add"
        ? ItemQte + 1
        : ItemQte === 0
        ? 0
        : ItemQte - 1;
    setItemQte(qte);
    setTotalPrice(qte * selectedPrice);
  };
  const handleChange = (id, price, size) => {
    setselectedPrice(parseInt(price));
    setSelectedSize(size);
    setArray(
      array.map((selectedItem, index) => {
        return selectedItem._id === id
          ? { ...selectedItem, active: true }
          : { ...selectedItem, active: false };
      })
    );
    setTotalPrice(parseInt(price) * ItemQte);
  };
  const handlePanierItem = (e) => {
    array.map((PanierItem) => {
      if (PanierItem.active === true) {
        const panier = {
          id: id,
          title: title,
          size: selectedSize,
          wishedQte: ItemQte,
          itemPrice: selectedPrice,
          TotalPrice: totalPrice,
        };
        addToPanier(panier);
      }
    });
  };
  const handleReset = (event) => {
    console.log("reset button");
    setItemQte(0);
    setTotalPrice(0);
    console.log(array);
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
            key={itemSize._id}
            active={itemSize.active}
            ItemQte={ItemQte}
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
          <p className="menuItem-card-title" name="title">
            {title}
          </p>
        </div>
        <div className="flip-card-back">
          <div className="menuItem-card-b-title">{title}</div>
          <div className="card-back-sizes-container">{objDetails}</div>
          <div className="card-qte">
            <span
              className="material-icons qte-add-remove"
              name="minus"
              onClick={handleAddRemove}
            >
              remove_circle
            </span>
            {ItemQte}
            <span
              className="material-icons qte-add-remove"
              name="add"
              onClick={handleAddRemove}
            >
              add_circle
            </span>
          </div>
          <div className="card-price-btn">
            <div className="card-total-price">Total : {totalPrice}</div>

            <div className="ui buttons ">
              <button
                className="ui button menu-item-btn cancel-btn"
                onClick={handleReset}
              >
                Cancel
              </button>
              <div className="or"></div>
              <button
                className="ui positive button menu-item-btn"
                onClick={() => handlePanierItem()}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    panier: state.panier,
  };
};

export default connect(mapStateToProps, { addToPanier })(SelectedMenuItem);
