import React, { Component } from "react";
import "../cssFiles/Menu.css";
import MenuList from "./MenuList.js";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

class Menu extends Component {
  state = {
    menu: [
      { type: "Drinks", key: 1 },
      { type: "Food", key: 2 },
      { type: "Chicha", key: 3 },
      { type: "Supplements", key: 4 },
    ],
  };
  render() {
    const MenuItems = this.state.menu.map((Menuitem) => {
      return (
        <div key={Menuitem.key}>
          <Link className="Links" to={"/" + Menuitem.type}>
            <MenuList MenuItem={Menuitem.type} />
          </Link>
        </div>
      );
    });
    return <div className="menu-container">{MenuItems}</div>;
  }
}

export default Menu;
