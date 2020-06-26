import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import css from "./App.module.css";
import Navbar from "./components/navbar/Navbar";
import Routes from "./components/Routes";

function App() {
  return (
    <Router>
      <div className="container">
        <header className="app_header">
          <div className="app_navbar">
            <Navbar />
          </div>
        </header>

        <main className={css.app_containt}>
          <Routes />
        </main>
      </div>
    </Router>
  );
}

export default App;
