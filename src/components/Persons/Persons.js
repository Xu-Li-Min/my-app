import React from 'react';
import Person from './Person/Person';

const Persons = props => {
  console.log('[Persons.js] rendering...');
  return props.persons.map((person, index) => {
    return (
      <Person
        click={() => props.click(index)}
        changed={(e) => props.changed(e, person.id)}
        name={person.name}
        age={person.age}
        key={person.id}
      />
    )
  });
};


export default Persons;