// Routes.js
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SelectedMenu from "./selectedMenu.js";
import Menu from "./Menu.js";
import axios from "axios";

class Routes extends React.Component {
  state = {
    Routes: [
      {
        menuName: "/",
      },
    ],
  };
  componentWillMount = () => {
    const baseURL = "http://localhost:8000";
    axios.get(`${baseURL}/menu-list`).then((res) => {
      this.setState({
        Routes: res.data,
      });
    });
  };

  render() {
    console.log("message from routes " + this.state.Routes[0].menuName);
    const RoutesTag = this.state.Routes.map((route) => {
      return (
        <Route exact path={"/" + route.menuName} component={SelectedMenu} />
      );
    });
    return (
      <Switch>
        {RoutesTag}
        <Route exact path="/menu" component={Menu} />
      </Switch>
    );
  }
}

export default Routes;
