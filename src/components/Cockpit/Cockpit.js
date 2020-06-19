import React from 'react';
import './Cockpit.css'

const Cockpit = props => {

  const classes = [];
  if (props.persons.length <= 2) {
    classes.push('red');
  }

  if (props.persons.length <= 1) {
    classes.push('bold');
  }

  return (
    <>
      <h1 className={classes.join(' ')}>{props.title}</h1>
      <button className="button" onClick={props.click}>
        switchName
    </button>
    </>
  );
}

export default Cockpit;