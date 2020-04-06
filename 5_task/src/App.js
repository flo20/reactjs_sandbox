import React, { Component } from "react";
import "./App.css";
import Circle from "./Circle/Circle";

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
class App extends Component {
  state = {
    score: 0,
    current: 0,
  };
  pace = 1500;
  timer = undefined;

  next = () => {
    let nextActive = undefined;

    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
    });
    this.timer = setTimeout(this.next, this.pace);
    console.log("active circle", this.state.current);
  };

  clickHandler = (circleID) => {
    console.log("Clicked", circleID);
    this.setState({
      score: this.state.score + 1,
    });
  };
  startHandler = () => {
    this.next();
  };
  endHandler = () => {
    clearTimeout(this.timer);
  };
  render() {
    return (
      <div className="wrap">
        <div className="text_wrap">
          <h1>Catch me if you can!</h1>
          <p>Score: 0</p>
        </div>

        <main>
          <Circle click={this.clickHandler.bind(this, 1)} />
          <Circle click={this.clickHandler.bind(this, 2)} />
          <Circle click={this.clickHandler.bind(this, 3)} />
          <Circle click={this.clickHandler.bind(this, 4)} />
        </main>
        <div className="btn_wrap">
          <button onClick={this.startHandler}>Start</button>
          <button onClick={this.endHandler}>End</button>
        </div>
      </div>
    );
  }
}

export default App;
