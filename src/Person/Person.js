import React from "react";
import './Person.css';
import Radium from 'radium';

const Person = (props) => {

  const style = {
    '@media (max-Width: 500px)': {
      backgroundColor: 'yellow',
      color: '#333',
      fontSize: '44px',
    }
  }



  return (
    <div className="Person" style={style}>
      <p onClick={props.click} >
        我是{props.name} ，今年{props.age} 歲！
      </p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(Person);
