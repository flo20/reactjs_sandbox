import React, { Component } from "react";
import "./App.css";
import Forms from "./Forms/Forms";
import Views from "./Views/Views";

class App extends Component {
  state = {
    details: [
      { first: "Firstname :", disp: "" },
      { last: "Lastname :", ldisp: "" },
      { phone: "Phone number :", pdisp: "" },
      { mess: "Message :", mdisp: "" },
    ],
  };

  changeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({ [nam]: val });
  };

  render() {
    return (
      <div>
        <Forms />
        <form className="fwrap">
          <p />
          FirstName:{" "}
          <input type="text" onChange={this.changeHandler} name="disp" />
          <p />
          LastName:{" "}
          <input type="text" onChange={this.changeHandler} name="ldisp" />
          <p />
          PhoneNumber:{" "}
          <input type="text" onChange={this.changeHandler} name="pdisp" />
          <p />
          Message:{" "}
          <textarea type="text" onChange={this.changeHandler} name="mdisp" />
        </form>
        <body className="view">
          <h1>CopyCat</h1>
          <p> First name: {this.state.disp}</p>
          <p> Last name: {this.state.ldisp}</p>
          <p> Phone Number: {this.state.pdisp}</p>
          <p> Message: {this.state.mdisp}</p>
        </body>
        <Views />
      </div>
    );
  }
}

export default App;
