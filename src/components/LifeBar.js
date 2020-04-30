import React from "react";

import "./LifeBar.css";

const LifeBar = (props) => {
  return (
    <>
      <div className="container">
        <div
          className="health"
          style={{
            height: `${props.health}%`,
            backgroundColor: ` ${props.lifeBarColor}`,
          }}
        ></div>
        <div
          className="bullet"
          style={{
            backgroundColor: ` ${props.lifeBarColor}`,
          }}
        ></div>
      </div>
      <div>
        <input type="button" onClick={props.getHealth} id="up" value="Up" />
        <input type="button" onClick={props.getHealth} id="down" value="Down" />
      </div>
    </>
  );
};

export default LifeBar;
