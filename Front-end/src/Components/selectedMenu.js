import React, { Component } from "react";
import { withRouter } from "react-router";
import "../cssFiles/SelectedMenu.css";
import axios from "axios";
import Loading from "./Loading.js";
import SelectedMenuItem from "./SelectedMenuItem";

import selectedMenuApi from "./API.js";
class SelectedMenu extends Component {
  state = {
    selectedMenu: [],
    MenuRoutesStatus: false,
    Loading: true,
  };

  componentWillMount = async () => {
    const baseURL = "http://localhost:8000";
    await axios.get(`${baseURL}/menu-list`).then((res) => {
      this.setState({
        selectedMenu: res.data,
        SelectedMenuStatus: res.data === [] ? false : true, // for now zeyed
        Loading: false,
      });
    });
  };

  render() {
    let selectedRoute = this.props.location.pathname.substring(1);

    if (this.state.Loading === true) {
      return <Loading />;
    } else {
      let rendered;

      this.state.selectedMenu.map((menu) => {
        if (
          menu.menuName.toLocaleLowerCase() ===
          selectedRoute.toLocaleLowerCase()
        ) {
          rendered = menu.menuItems.map((menuItem) => {
            console.log(menuItem.itemName);
            return <SelectedMenuItem title={menuItem.itemName} />;
          });
        }
      });

      return <div className="selectedMenu-container">{rendered}</div>;
    }
  }
}

export default withRouter(SelectedMenu);
