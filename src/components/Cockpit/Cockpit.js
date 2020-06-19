import React, { useEffect } from 'react';
import './Cockpit.css'

const Cockpit = props => {

  // 觀察清除useEffect
  // useEffect(() => {
  //   console.log('[Cockpit.js] useEffect');
  //   const timeOut = setTimeout(() => {
  //     alert('Saved');
  //   }, 1000);
  //   return () => {
  //     console.log('[Cockpit.js] cleanup work in useEffect');
  //     clearTimeout(timeOut);
  //   }
  // }, []);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    setTimeout(() => {
      console.log('Saved');
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    }
  }, []);


  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    }
  });

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