import React, { Component } from "react";
import "../cssFiles/Menu.css";

class SelectedMenu extends Component {
  state = {
    menu: ["Drinks", "Food", "Chicha", "Supplement"],
  };
  render() {
    return <div>selected Menu item</div>;
  }
}

export default SelectedMenu;
