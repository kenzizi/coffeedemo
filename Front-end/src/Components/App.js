import React, { Component } from "react";
import "../cssFiles/navbar.css";
import "semantic-ui-css/semantic.min.css";

import { Link } from "react-router-dom";

class nav extends Component {
  render() {
    return (
      <div>
        <div className="navbar-bg">
          <Link to="/menu" className="navbar-logo ">
            RAMMEH COFFEESHOP
          </Link>
          <Link to="/panier" className="navbar-panier">
            <span className="navbar-panier-badge">0</span>
            <i className="fas fa-shopping-cart"></i> Panier
          </Link>
        </div>
      </div>
    );
  }
}

export default nav;
