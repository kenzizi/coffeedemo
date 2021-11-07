import React from "react";
import "../cssFiles/Menu.css";
import MenuList from "./MenuList.js";
import { Link } from "react-router-dom";
import Loading from "./Loading";

//redux

import { connect } from "react-redux";
//end redux

const Menu = (props) => {
  console.log("lenth " + props.menu.length);
  if (props.menu.length === 0) return <Loading status={false} />;
  else {
    const MenuItems = props.menu.map((Menuitem) => {
      return (
        <div key={Menuitem._id} className="menuList-container  ">
          <Link to={"/" + Menuitem.menuName} className="Links">
            <MenuList MenuItem={Menuitem.menuName} />
          </Link>
        </div>
      );
    });
    return <div className="menu-container ">{MenuItems}</div>;
  }
};
const mapStateToProps = (state) => {
  return {
    menu: state.coffee,
  };
};
export default connect(mapStateToProps)(Menu);
