import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import Favorites from "./components/Favorites";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <Router>
      <div className={theme === "light" ? "app" : "darkApp"}>
        <Nav theme={theme} setTheme={setTheme} />
        <Switch>
          <Route
            exact
            path="/"
            component={() => {
              return <Homepage theme={theme} />;
            }}
          />
          <Route
            exact
            path="/favorites/"
            component={() => {
              return <Favorites theme={theme} />;
            }}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
