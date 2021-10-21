import React, { Component } from "react";
import "../cssFiles/Menu.css";
import MenuList from "./MenuList.js";
import { Link } from "react-router-dom";
import axios from "axios";

class Menu extends Component {
  state = {
    menu: [
      {
        menuName: "default",
        _id: 1,
      },
    ],
  };
  componentWillMount = () => {
    const baseURL = "http://localhost:8000";
    axios.get(`${baseURL}/menu-list`).then((res) => {
      this.setState({
        menu: res.data,
      });
    });
  };
  render() {
    console.log(this.state.menu);
    const MenuItems = this.state.menu.map((Menuitem) => {
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
}

export default Menu;
