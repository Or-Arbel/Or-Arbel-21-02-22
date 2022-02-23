import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

function Nav(props) {
  const mode =
    props.theme === "light" ? (
      <div className="modeDiv">
        <HiMoon size={20} />
        <span>Change to dark mode</span>
      </div>
    ) : (
      <div className="modeDiv">
        <CgSun size={20} />
        <span>Change to light mode</span>
      </div>
    );

  const toggleMode = () => {
    props.setTheme(props.theme === "light" ? "dark" : "light");
  };

  return (
    <nav className={props.theme === "light" ? "" : "dark-nav"}>
      <ul className="nav-links">
        <Link to="/Or-Arbel-21-02-22">
          <li>Homepage</li>
        </Link>
        <Link to="/favorites">
          <li>Favorites</li>
        </Link>
      </ul>
      <button className="modeButton" onClick={toggleMode}>
        {mode}
      </button>
    </nav>
  );
}

export default Nav;
