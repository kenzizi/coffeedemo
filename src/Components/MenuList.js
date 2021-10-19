import React from "react";
import "../cssFiles/MenuList.css";
import { Link } from "react-router-dom";

const MenuList = ({ MenuItem }) => {
  return (
    <Link className="Links" to={"/" + MenuItem}>
      <div>{MenuItem}</div>
    </Link>
  );
};

export default MenuList;
