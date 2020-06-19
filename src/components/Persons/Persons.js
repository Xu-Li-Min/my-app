import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state
  // }

  // componentWillReceiveProps(props){
  //   console.log('[Persons.js] componWillReceiveProps');
  // }

  shouldComponentUpdate(nextProps,nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!'};
  }

  // componentWillUpdate(){

  // }

  componentDidUpdate(prevProps,prevState,s){
    console.log('[Persons.js] componentDidUpdate');
    console.log(s);
  }

  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount');
  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.click(index)}
          changed={(e) => this.props.changed(e, person.id)}
          name={person.name}
          age={person.age}
          key={person.id}
        />
      )
    });
  }
};


export default Persons;