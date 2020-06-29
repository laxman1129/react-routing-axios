import React from "react";
import css from "./Quotes.module.css";

import Rating from "react-rating";
import { QuoteModel } from "../../Reducer";

interface QuoteProp {
  val: QuoteModel;
}

const Quote = (props: QuoteProp) => (
  <div className={css.quote}>
    <span>{props.val.en}</span>
    <div className={css.quoteInfo}>
      <span>~ {props.val.author}</span>
      {/* Using third party component */}
      <Rating initialRating={props.val.rating} readonly />
    </div>
  </div>
);

export default Quote;
