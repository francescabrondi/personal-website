import React from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";

import "./scss/styles.scss";

export default () => (
  <div className="app">
    <Sidebar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/resume" component={Resume} />
    </Switch>
  </div>
);
