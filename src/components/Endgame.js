import React from "react";
import "./Endgame.css";

class Endgame extends React.Component {
  getModalText() {
    if (this.props.verdict === "gagné") {
      return "Vous avez gagné";
    }
    return "Vous avez perdu";
  }
  getModalTextButton() {
    if (this.props.verdict === "gagné") {
      return "Bien joué!";
    }
    return "Reessaie encore!";
  }

  render() {
    const classNames = ["endGame"];

    if (this.props.verdict) {
      classNames.push("show");
    }

    return (
      <div className={classNames.join(" ")} id="modal">
        <div className="modal">
          <div className="text">{this.getModalText()}</div>
          <button className="submit" onClick={this.props.reload}>
            {this.getModalTextButton()}
          </button>
        </div>
      </div>
    );
  }
}

export default Endgame;
