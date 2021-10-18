import React from "react";
import "../cssFiles/MenuList.css";
const MenuList = ({ MenuItem }) => {
  return (
    <a className="menuList-container">
      {MenuItem}
    </a>
  )
};

export default MenuList;
