import React, { Component } from "react";
import "../cssFiles/Menu.css";
import MenuList from "./MenuList.js";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "./Loading";

class Menu extends Component {
  state = {
    menu: [],
    menuFound: false,
  };
  componentWillMount = () => {
    const baseURL = "http://localhost:8000";
    axios.get(`${baseURL}/menu-list`).then((res) => {
      this.setState({
        menu: res.data,
        menuFound: res.data === [] ? false : true,
      });
    });
  };
  render() {
    console.log("menu  page");
    if (this.state.menuFound === false) return <Loading status={false} />;
    if (this.state.menuFound === true) {
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
}

export default Menu;
