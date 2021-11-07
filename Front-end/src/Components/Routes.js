// Routes.js
import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import SelectedMenu from "./selectedMenu.js";
import Menu from "./Menu.js";
import LoadingComponent from "./Loading.js";
import Panier from "./Panier";

//redux import render roots
import { connect } from "react-redux";
import { getCoffeeMenu } from "../redux/Coffee/coffee.actions.js";
//end redux

const Routes = (props) => {
  const { getCoffeeMenu } = props;

  useEffect(() => {
    getCoffeeMenu();
  }, [getCoffeeMenu]);

  const RoutesTag = props.Routes.map((route) => {
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
      <Route
        key="1"
        exact
        path="/"
        render={() => <Redirect key="4" to="/menu" />}
      />

      <Route key="2" exact path="/menu" component={Menu} />
      <Route key="3" exact path="/loading" component={LoadingComponent} />
      <Route key="3" exact path="/panier" component={Panier} />
    </Switch>
  );
};
const mapStateToProps = (state) => {
  return {
    Routes: state.coffee,
  };
};

export default connect(mapStateToProps, { getCoffeeMenu })(Routes);
