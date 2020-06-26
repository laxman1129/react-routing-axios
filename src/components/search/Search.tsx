import * as React from "react";
import { FaSearch } from "react-icons/fa";
import css from "./Search.module.css";
const Search = () => (
  <div className={css.search}>
    <form className={css.form}>
      <input type="text" placeholder="Search" className={css.search_box} />
      <button>
        <FaSearch size={30}/>
      </button>
    </form>
  </div>
);

export default Search;
