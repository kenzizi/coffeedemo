// Routes.js
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SelectedMenu from "./selectedMenu.js";
import Menu from "./Menu.js";
import axios from "axios";
import Loading from "./Loading.js";

class Routes extends React.Component {
  state = {
    Routes: [
      {
        menuName: "/",
      },
    ],
    MenuRoutesStatus: false,
    Loading: true,
  };
  componentWillMount = async () => {
    const baseURL = "http://localhost:8000";
    await axios.get(`${baseURL}/menu-list`).then((res) => {
      this.setState({
        Routes: res.data,
        MenuRoutesStatus: res.data === [] ? false : true,
        Loading: false,
      });
    });
  };

  render() {
    if (this.state.Loading === true) {
      <Loading />;
    }
    const RoutesTag = this.state.Routes.map((route) => {
      return (
        <Route
          key={route._id}
          exact
          path={"/" + route.menuName}
          component={SelectedMenu}
        />
      );
    });
    return (
      <Switch>
        {RoutesTag}
        <Route exact path="/" render={() => <Redirect to="/menu" />} />

        <Route exact path="/menu" component={Menu} />
        <Route exact path="/loading" component={Loading} />
      </Switch>
    );
  }
}

export default Routes;
