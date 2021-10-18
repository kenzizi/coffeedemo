// Routes.js
import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import SelectedMenu from "./selectedMenu.js";
import Menu from "./Menu.js";
import Panier from "./Panier.js";

export default () => {
  return (
    <Switch>
      <Route exact path="/Drinks">
        <SelectedMenu />
      </Route>
      <Route exact path="/Food" component={SelectedMenu} />
      <Route exact path="/Supplements" component={SelectedMenu} />
      <Route exact path="/Chicha" component={SelectedMenu} />

      <Route
        exact
        path="/"
        render={() => {
          return <Redirect to="/menu" />;
        }}
      >
        <Menu />
      </Route>
      <Route exact path="/menu">
        <Menu />
      </Route>
      <Route exact path="/panier">
        <Panier />
      </Route>
    </Switch>
  );
};
