import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import HomeScreen from "./screens/HomeScreen";
import MatchesScreen from "./screens/MatchesScreen";
import SigninScreen from "./screens/SigninScreen";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/signin">
            <SigninScreen />
          </Route>
          <Route path="/home">
            <HomeScreen />
          </Route>
          <Route path="/">
            <MatchesScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
