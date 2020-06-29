import React, { useEffect, useReducer } from "react";
import css from "./Quotes.module.css";

/*The reducer function and utility*/
import reducer, { initialState, loadData } from "../../Reducer";
import Quote from "./Quote";

const Quotes = () => {
  /*useReducer initialized with reducer and initial state */
  /*useReducer returns state(current updated state) and dispatcer function */
  /* We are using useReduce inplace of useState as initial state returns complex object */
  const [state, dispatch] = useReducer(reducer, initialState);

  //since empty array of dependencies is provided the side effects will be called only once;
  useEffect(() => {
    //  this is sevice call to the rest endpoint using axios
    // this function is written in the reducer file
    loadData(dispatch);
    // inspect this function
  }, []);

  return (
    <div className={css.quotes}>
      {/* looping through list of quotes and reating multiple elements */}
      {state.data.map((quote) => (
        // Unique Key must be provided else react sometimes do not behave as expected
        // when the state is updated
        <Quote key={quote._id} val={quote} />
      ))}
    </div>
  );
};

export default Quotes;
