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

  console.log(process.env.REACT_APP_API_KEY);

  return (
    <Router>
      <div className={theme === "light" ? "app" : "darkApp"}>
        <Nav theme={theme} setTheme={setTheme} />
        <Switch>
          <Route
            exact
            path="/Or-Arbel-21-02-22/"
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
          <Redirect to="/Or-Arbel-21-02-22/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
