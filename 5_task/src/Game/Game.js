import React from "react";
import "./Game.css";

const closeHandler = () => {
  window.location.reload();
};

const Game = (props) => {
  return (
    <div className="overlay">
      <div className="pop">
        <div>
          <button onClick={closeHandler} className="close">
            CLOSE
          </button>
        </div>
        <h2>Game over</h2>
        <p>
          Score:<span>{props.score}</span>
        </p>
      </div>
    </div>
  );
};

export default Game;
