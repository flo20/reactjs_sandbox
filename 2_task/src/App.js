import React,{Component} from "react";
import "./App.css";
import Person from "./Person/Person.js"

class App extends Component {
  state = {
    persons: [
      {name:"Florence",age:26,},
      {name:"Patience",age:22,},
      {name:"Jonathan",age:20,},
      {name:"Rejoice",age:60,},
      {name:"David",age:65,},
    ]
  };


  render () {
    return (
      <div>
    <Person name= {this.state.persons[0].name} age={this.state.persons[0].age}/>
    <Person name= {this.state.persons[1].name} age={this.state.persons[1].age}/>
    <Person name= {this.state.persons[2].name} age={this.state.persons[2].age}/>
    <Person name= {this.state.persons[3].name} age={this.state.persons[3].age}/>
    <Person name= {this.state.persons[4].name} age={this.state.persons[4].age}/> 
  </div>
    )
  }
}

export default App;
