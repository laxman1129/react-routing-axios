import React from "react";
/* Switch returns only the first matching route rather than all matching routes.*/
/* 
  `Route` is the conditionally shown component based on matching a path to a URL.
  The selected component is rendered in the route.
*/
import { Switch, Route } from "react-router-dom";
import css from "./Routes.module.css";
import Home from "./home/Home";
import Quotes from "./quote/Quotes";
import Search from "./search/Search";
import Navbar from "./navbar/Navbar";

const Routes = () => (
  <div>
    <header>
      <div className={css.view_navbar}>
        <Navbar />
      </div>
    </header>
    <main className={css.view}>
      <Switch>
        <Route path="/quotes" component={Quotes} />
        <Route path="/search" component={Search} />
        {/* the `/` is kept at the end so that when no other route matches it should take to the home page */}
        {/* Try changing the url in the browser which does not match any route */}
        <Route path="/" component={Home} />
      </Switch>
    </main>
  </div>
);

export default Routes;
