import React, { useState } from "react";

//function component to reduce button repitition(Using reusing components)
/*const Button = (props) => {
  return (
    <div>
      <button onClick={props.click}>{props.text}</button>
    </div>
  );
};*/

//Destructuring
const Button = ({ click, text, children }) => {
  return (
    <div>
      <button onClick={click}>
        {text}
        {children}
      </button>
    </div>
  );
};

const Lecture = () => {
  const [counter, setCounter] = useState(0);

  const addHandler = () => setCounter(counter + 1);
  const removeHandler = () => setCounter(counter - 1);
  const resetHandler = () => setCounter(0);
  return (
    <div>
      <h1>My votes:{counter}</h1>
      <Button click={addHandler} text="Add one">
        {" "}
        something
      </Button>

      <Button click={removeHandler} text="Remove one" />
      <Button click={resetHandler} text="Reset" />
    </div>
  );
};

export default Lecture;

/*import React, { Component } from "react";

class Lecture extends Component {
  state = {
    counter: 0,
  };

  addHandler = () => this.setState({ counter: this.state.counter + 1 });
  removeHandler = () => this.setState({ counter: this.state.counter - 1 });
  resetHandler = () => this.setState({ counter: 0 });

  render() {
    return (
      <div>
        <h1>My votes:{this.state.counter}</h1>
        <button onClick={this.addHandler}>Add one</button>
        <button onClick={this.removeHandler}>Remove one</button>
        <button onClick={this.resetHandler}>Reset</button>
      </div>
    );
  }
}

export default Lecture;*/
