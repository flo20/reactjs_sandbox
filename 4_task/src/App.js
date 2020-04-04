import React, { Component } from "react";
import "./App.css";
import Forms from "./Forms/Forms";
import Views from "./Views/Views";

class App extends Component {
  state = {
    details: [
      { first: "Firstname :" },
      { last: "Lastname :" },
      { phone: "Phone number :" },
      { mess: "Message :" },
    ],
  };

  render() {
    return (
      <div>
        <Forms />

        <Views first={this.state.details[0].first} />
        <input type="text" placeholder="Firstname here" className="display" />

        <Views last={this.state.details[1].last} />
        <input type="text" placeholder="Lastname here" className="display" />

        <Views phone={this.state.details[2].phone} />
        <input type="text" placeholder="Phonenumber" className="display" />

        <Views mess={this.state.details[3].mess} />
        <textarea placeholder="Message" className="display"></textarea>
      </div>
    );
  }
}

export default App;
