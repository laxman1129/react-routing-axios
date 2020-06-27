import React from "react";
/*`Link` is the replacement for anchor tags.*/
import { Link } from "react-router-dom";
import css from "./Navbar.module.css";

const Navbar = () => (
  <nav className={css.navbar}>
    <ul className={css.menu}>
      <li className={css.menuitem}>
        {/* to contains the route. When the link is clicked the route will be loaded by the router in the view */}
        <Link to="/home" className={css.link}>
          Home
        </Link>
      </li>
      <li className={css.menuitem}>
        <Link to="/quotes" className={css.link}>
          Quotes
        </Link>
      </li>
      <li className={css.menuitem}>
        <Link to="/search" className={css.link}>
          Search
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
