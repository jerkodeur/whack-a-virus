import React from "react";

import { Link } from "react-router-dom";

import "./Rules.css";

class Rules extends React.Component {
  render() {
    return (
      <div className="dialog-box-rules">
        <h1 className="rules-title">Game Rules</h1>
        <div className="rules-container">
          <p>You’re facing the virus…</p>
          <p>
            Sneaky as hell, you won’t be able to defeat him easily ! It’s moving
            fast, hiding in every single corner of your intervention area, and
            you will have to click on it in order to stop it from spreading.
          </p>
          <p>
            mportant : keep an eye on the power bar, on your right : it
            indicates how infected the zone is. Its level grows pretty quickly,
            so don’t waste any time and chase this virus before the bar reaches
            its maximum…
          </p>
          <p>Once the bar down, the area is safe, and you can access to the next level.</p>
          <Link to="/level-1">
            <button>Begin to Play !</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Rules;
