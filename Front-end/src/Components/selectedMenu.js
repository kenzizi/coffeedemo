import React, { Component } from "react";
import { withRouter } from "react-router";
import "../cssFiles/SelectedMenu.css";

import selectedMenuApi from "./API.js";
class SelectedMenu extends Component {
  render() {
    const selectedMenuRoute = this.props.location.pathname.substring(1);
    let selectedMenu;

    selectedMenuApi.map((SMA) => {
      if (
        SMA.selectedMenu.toLocaleLowerCase() ===
        selectedMenuRoute.toLocaleLowerCase()
      ) {
        selectedMenu = SMA.selectedMenuTable.map((SMT) => {
          return (
            <div key={SMT.id} className="selectedMenu-item">
              {SMT.name}
            </div>
          );
        });
      }
    });

    return <div className="selectedMenu-container">{selectedMenu}</div>;
  }
}

export default withRouter(SelectedMenu);
