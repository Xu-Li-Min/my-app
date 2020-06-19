import React, { Component } from "react";
import './Person.css';

class Person extends Component {

  render() {
    console.log('[Person.js] rendering...');

    return (
      <div className="Person">
        <p onClick={this.props.click} >
          我是{this.props.name} ，今年{this.props.age} 歲！
        </p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
};

export default Person;
