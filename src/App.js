import React from "react";
import { Route, Switch } from "react-router-dom";

import Game from "./components/Game";
import LifeBar from "./components/LifeBar";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" /*{Landing}*/ />
        </Switch>
        <Game />
      </div>
    );
  }
}

export default App;
