import React from 'react';

const PersonForm = (props) => {
    return (
        <div>
            <form onSubmit={props.addPerson}>
                <div>
                    <p> name: <input value={props.newName} onChange={(event) => props.setNewName(event.target.value)}/></p>
                    <p>number: <input value={props.newNumber} onChange={(event) => props.setNewNumber(event.target.value)}/></p>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    );
};

export default PersonForm;
