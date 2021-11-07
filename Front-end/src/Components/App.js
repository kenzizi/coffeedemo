import React from "react";
import "../cssFiles/navbar.css";
import "semantic-ui-css/semantic.min.css";

import { Link } from "react-router-dom";

//REDUX CALL START FROM HERE

import { connect } from "react-redux";

// REDUX CALL ENDS HERE

const Nav = ({ Menu }) => {
  //INITIAL REDUX STATE

  //INITIAL STATE WORK END HERE
  return (
    <div>
      <div className="navbar-bg">
        <Link to="/menu" className="navbar-logo ">
          RAMMEH COFFEESHOP
        </Link>
        <Link to="/panier" className="navbar-panier">
          <span className="navbar-panier-badge">{Menu.length}</span>
          <i className="fas fa-shopping-cart"></i> Panier
        </Link>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    Menu: state.panier,
  };
};

export default connect(mapStateToProps)(Nav);
