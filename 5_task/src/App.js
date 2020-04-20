import React, { Component } from "react";
import "./App.css";
import Circle from "./Circle/Circle";
import Game from "./Game/Game";

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
class App extends Component {
  state = {
    score: 0,
    current: 0,
    showGameOver: false,
    rounds: 0,
  };

  pace = 1500;
  timer = undefined;

  next = () => {
    if (this.state.rounds >= 2) {
      this.endHandler();
      return;
    }
    let nextActive = undefined;

    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
      rounds: this.state.rounds + 1,
    });

    this.pace *= 0.95;
    this.timer = setTimeout(this.next, this.pace);
    console.log("activated circle", this.state.current);
  };

  clickHandler = (circleID) => {
    let audio = new Audio("/punch.mp3");
    console.log("Clicked", circleID);

    if (this.state.current !== circleID) {
      this.endHandler();
      return;
    }
    audio.play();

    this.setState({
      score: this.state.score + 1,
      rounds: 0,
    });
  };

  //Starting game and running the next() function
  startHandler = () => {
    this.next();
  };
  endHandler = () => {
    clearTimeout(this.timer);
    this.setState({
      showGameOver: true,
    });
  };
  render() {
    return (
      <div className="wrap">
        <div className="text_wrap">
          <h1>Catch me if you can!</h1>
          <p>Score: {this.state.score}</p>
        </div>

        {this.state.showGameOver && <Game score={this.state.score} />}
        <main>
          <Circle
            active={this.state.current === 1}
            mydefaultcolor="purple"
            click={this.clickHandler.bind(this, 1)}
          />
          <Circle
            active={this.state.current === 2}
            mydefaultcolor="green"
            click={this.clickHandler.bind(this, 2)}
          />
          <Circle
            active={this.state.current === 3}
            mydefaultcolor="blue"
            click={this.clickHandler.bind(this, 3)}
          />
          <Circle
            active={this.state.current === 4}
            mydefaultcolor="brown"
            click={this.clickHandler.bind(this, 4)}
          />
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
