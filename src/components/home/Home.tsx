import React from "react";
import css from "./Home.module.css";
import { useHistory, useLocation, useParams } from "react-router-dom";
const Home = () => {
  // object destructuring to get the param1
  const { param1 } = useParams(); // hook to obtain request params from the current path in the browser
  const history = useHistory(); // hook to access and action history API of the browser
  const location = useLocation(); // hook to acess location properties of the browser

  // Check console logs

  console.log("param", param1);
  console.log("history", history);
  console.log("location", location);

  return (
    <div className={css.home}>
      <div className={css.text}>Quotes</div>

      <div className={css.hooks}>
        <span style={{ fontSize: "2.5rem" }}>React Route Hooks</span>
        <hr />
        <div>
          useParams :{" "}
          <span className="info">
            <em>value for the param on route</em> <b>/:param1</b> is{" "}
            <u>
              <b>
                <i>{param1}</i>
              </b>
            </u>
          </span>
        </div>
        <div>
          useHistory :{" "}
          <span className="info">
            <input
              className="btn"
              type="button"
              value="Go to Search"
              onClick={() => history.push("/search")}
            />
            <input
              className="btn"
              type="button"
              value="Back (first click Go to Search -> Home menu item -> this button)"
              onClick={() => history.goBack()}
            />
          </span>
        </div>
        <div>
          useLocation :
          <span className="info">
            <em>Location Pathname is : </em>
            <u>
              <b>
                <i>{location.pathname}</i>
              </b>
            </u>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
