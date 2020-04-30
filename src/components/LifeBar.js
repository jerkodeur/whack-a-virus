import React from "react";

import "./LifeBar.css";

class LifeBar extends React.Component {


  render() {
    return (
      <>
        <div className="container">
          <div
            className="health"
            style={{
              height: `${this.props.health}%`,
              backgroundColor: ` ${this.props.lifeBarColor}`,
            }}
          ></div>
          <div
            className="bullet"
            style={{
              backgroundColor: ` ${this.props.lifeBarColor}`,
            }}
          ></div>
        </div>
      </>
    );
  }
}

export default LifeBar;
