import React, { useState, useEffect } from "react";
import "../cssFiles/navbar.css";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";

import { Link } from "react-router-dom";

//REDUX CALL START FROM HERE

import { connect } from "react-redux";

import { getCoffeeMenu } from "../redux/Coffee/coffee.actions.js";
// REDUX CALL ENDS HERE

const Nav = (props) => {
  //INITIAL REDUX STATE
  useEffect(() => {
    props.getCoffeeMenu();
  }, []);

  //INITIAL STATE WORK END HERE
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
};
const mapStateToProps = (state) => {
  return {
    Menu: state.coffee.menu,
  };
};

export default connect(mapStateToProps, { getCoffeeMenu })(Nav);
