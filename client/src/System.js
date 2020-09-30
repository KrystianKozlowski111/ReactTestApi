import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./views/HomePage.js";
import Navbar from "./components/Navbar";

function System() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Navbar />
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default System;
