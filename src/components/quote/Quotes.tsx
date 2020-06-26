import React from "react";
import css from "./Quotes.module.css";

const Quote = () => <div className={css.quote}>Quote</div>;

const Quotes = () => (
  <div className={css.quotes}>
    <Quote />
    <Quote />
    <Quote />
    <Quote />
    <Quote />
    <Quote />
    <Quote />
    <Quote />
  </div>
);

export default Quotes;
