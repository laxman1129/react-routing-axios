import React from "react";
import { Switch, Route } from "react-router-dom";
import css from "./Routes.module.css";
import Home from "./home/Home";
import Quotes from "./quote/Quotes";
import Search from "./search/Search";

const Routes = () => (
  <div className={css.view}>
    <Switch>
      <Route path="/quotes" component={Quotes} />
      <Route path="/search" component={Search} />
      <Route path="/" component={Home} />
    </Switch>
  </div>
);

export default Routes;
