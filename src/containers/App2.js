import React, { Component } from "react";
import "./App.css";
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App2 extends Component {

  constructor(props) {
    super(props);
    console.log('[App2.js] constructor');
  }

  state = {
    persons: [
      { id: "id1", name: "LiMin", age: 24 },
      { id: "id2", name: "Liang", age: 27 },
      { id: "id3", name: "Lan", age: 23 },
    ],
    showDiv: false,
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App2.js] getDerivedStateFromProps', props, state);
    return state;
  }

  componentWillMount(){
    console.log('[App2.js] componentWillMount');
  }

  componentDidMount() {
    console.log('[App2.js] componentDidMount');
  }

  // switchName = (newName, age) => {
  //   this.setState({
  //     persons: [
  //       { name: newName, age: age },
  //       { name: "OneLiang", age: "27" },
  //     ],
  //   });
  // };

  deletePerson = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChange = (e, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = e.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  toggleDiv = () => {
    const doesShow = this.state.showDiv;
    this.setState({ showDiv: !doesShow });
  };

  render() {
    console.log('[App2.js] render');

    const style = {
      backgroundColor: "green",
      color: "white",
      font: "微軟正黑體",
      border: "1px solid red",
      cursor: "pointer",
      padding: "5px",
      ':hover': {
        backgroundColor: 'orange',
        color: '#eee'
      }
    };

    let persons = null;

    if (this.state.showDiv === true) {
      persons = (
        <Persons persons={this.state.persons} click={this.deletePerson} changed={this.nameChange} />
      );

      style.backgroundColor = 'red'
    }


    return (
      <div className="App">
        <header className="App-header">
          <Cockpit title={this.props.title} click={this.toggleDiv} persons={this.state.persons} />
          {persons}
        </header>
      </div>
    );
  }
}

export default App2;
