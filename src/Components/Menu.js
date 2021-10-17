import React, { Component } from "react";
import "../cssFiles/Menu.css";
import MenuList from "./MenuList.js";

class Menu extends Component {
  state = {
    menu: ["Drinks", "Food", "Chicha", "Supplement"],
  };
  render() {
    const MenuItems = this.state.menu.map((Menuitem) => {
      return <MenuList MenuItem={Menuitem} />;
    });
    return <div className="menu-container">{MenuItems}</div>;
  }
}

export default Menu;
