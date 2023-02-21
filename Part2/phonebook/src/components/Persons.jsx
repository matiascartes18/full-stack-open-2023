import React from 'react';

const Persons = (props) => {
    return (
        <div>
            <ul>
                {props.personsToShow.map(person =>
                    <li key={person.name}>
                        {person.name} {person.number}
                        <button onClick={() => props.deletePerson(person.id)}>delete</button>
                    </li>)}
            </ul>

        </div>
    );
};

export default Persons;
