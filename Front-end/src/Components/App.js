import React, { useState } from "react";
import "../cssFiles/navbar.css";
import "semantic-ui-css/semantic.min.css";

import { Link } from "react-router-dom";

//REDUX CALL START FROM HERE

import { connect } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
} from "../redux/Counter/counter.actions.js";

// REDUX CALL ENDS HERE

const Nav = (props) => {
  const [count, setCount] = useState(0);
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
      <div>Count: {props.count}</div>

      <button onClick={() => props.increaseCounter()}>Increase Count</button>

      <button onClick={() => props.decreaseCounter()}> Decrease Count</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),

    decreaseCounter: () => dispatch(decreaseCounter()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
