import React,{Component} from "react";
import "./App.css";
import Person from "./Person/Person.js"

class App extends Component {
  render () {
    return (
      <div>
   
    <Person name="Florence" age="26"/>
    <Person name="Patience" age="20"/>
    <Person name="Jonathan" age="23"/>
    <Person name="David" age="65"/>
    <Person name="Rejoice" age="60"/> 
  </div>
    )
  }
}

export default App;
