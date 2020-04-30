import React from "react";

import LifeBar from "./components/LifeBar";
import { Route, Switch } from "react-router-dom";

import "./App.css";

class App extends React.Component {
  state = {
    damage: 10,
    health: 7,
    lifeBarColor: "",
  };

  // change lifeBarColor
  changeColor = () => {
    this.state.health > 75
      ? this.setState({ lifeBarColor: "red" })
      : this.state.health <= 75 && this.state.health > 50
      ? this.setState({ lifeBarColor: "orange" })
      : this.state.health <= 50 && this.state.health > 25
      ? this.setState({ lifeBarColor: "yellow" })
      : this.setState({ lifeBarColor: "green" });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.health !== prevState.health) {
      this.changeColor();
    }
  }
  // Change the health depending the context
  getHealth = (e) => {
    const button = e.target.id;
    console.log(this.state.health, "health");
    button === "up"
      ? setInterval(this.increaseHealth, 100)
      : this.decreaseHealth();
  };
  // Increase the health permanently until 100
  increaseHealth = () => {
    this.state.health < 100 && this.setState({ health: this.state.health + 1 });
  };
  // Decrease the health if click on the monster
  decreaseHealth = () => {
    this.state.health >= 27
      ? this.setState({ health: this.state.health - 20 })
      : this.setState({ health: 7 });
  };

  render() {
    return (
      <div className="App">
        <LifeBar
          damage={this.state.damage}
          health={this.state.health}
          lifeBarColor={this.state.lifeBarColor}
          getHealth={this.getHealth}
        />
        <Switch>
          <Route exact path="/" /*{Landing}*/ />
        </Switch>
      </div>
    );
  }
}

export default App;
