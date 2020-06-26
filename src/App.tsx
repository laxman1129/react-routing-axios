import React from "react";
/* `BrowserRouter` is the router implementation for HTML5 browsers (vs Native). */
import { BrowserRouter as Router } from "react-router-dom";
import css from "./App.module.css";
import Routes from "./components/Routes";

function App() {
  return (
    // Router encompasses all components which needs to be managed under router
    <Router>
      <div className="container">
        <main className={css.app_containt}>
          {/* Routes contain definition of which components to be called when url link is changed. */}
          <Routes />
        </main>
      </div>
    </Router>
  );
}

export default App;
