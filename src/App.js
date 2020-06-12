import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Radium from 'radium';

class App extends Component {
  state = {
    persons: [
      { name: "LiMin", age: "24" },
      { name: "Liang", age: "27" },
    ],
    showDiv: false,
  };

  switchName = (newName, age) => {
    this.setState({
      persons: [
        { name: newName, age: age },
        { name: "OneLiang", age: "27" },
      ],
    });
  };

  nameChange = (e) => {
    this.setState({
      persons: [
        { name: e.target.value, age: "24" },
        { name: "Liang", age: "27" },
      ],
    });
  };

  toggleDiv = () => {
    const doesShow = this.state.showDiv;
    this.setState({ showDiv: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "微軟正黑體",
      border: "1px solid red",
      cursor: "pointer",
      padding: "5px",
    };

    let persons = null;

    if (this.state.showDiv === true) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchName.bind(this, "HSULIMIN!!!", "24")}
            changed={this.nameChange}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1>React App</h1>
          <button style={style} onClick={this.toggleDiv}>
            switchName
          </button>
          {persons}
        </header>
      </div>
    );
  }
}

export default Radium(App);
