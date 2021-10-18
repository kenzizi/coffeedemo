import React from "react";
import "../cssFiles/MenuList.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Routes from "./Routes";

const MenuList = ({ MenuItem, key }) => {
  return <div className="menuList-container">{MenuItem}</div>;
};

export default MenuList;
