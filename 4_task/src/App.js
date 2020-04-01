import React, { Component } from "react";
import "./App.css";
import Forms from "./Forms/Forms";
import Views from "./Views/Views";

class App extends Component {
  render() {
    return (
      <div>
        <Forms />
        <span></span>
        <Views />
      </div>
    );
  }
}

export default App;
