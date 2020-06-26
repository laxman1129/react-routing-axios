import React from "react";
import { Link } from "react-router-dom";
import css from "./Navbar.module.css";

const Navbar = () => (
  <nav className={css.navbar}>
    <ul className={css.menu}>
      <li className={css.menuitem}>
        <Link to="/">Home</Link>
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
