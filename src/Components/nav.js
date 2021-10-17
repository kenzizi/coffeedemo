import React, { Component } from "react";
import "../cssFiles/navbar.css";
class nav extends Component {
  render() {
    return (
      <div className="navbar-bg">
        <a href="#" className="navbar-logo ">
          RAMMEH COFFEESHOP
        </a>
        <a href="#" className="navbar-panier">
          <span className="navbar-panier-badge">0</span>{" "}
          <i class="fas fa-shopping-cart"></i> Panier
        </a>
      </div>
    );
  }
}

export default nav;
