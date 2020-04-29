import React from "react";

import LifeBar from "./components/LifeBar";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <LifeBar />
      </div>
    );
  }
}

export default App;
