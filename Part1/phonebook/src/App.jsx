import { useState } from 'react'
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Persons from "./components/Persons.jsx";
import axios from 'axios'
const App = () => {
    const [ persons, setPersons ] = useState([])
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber ] = useState('')
    const [ filter, setFilter ] = useState('')




    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            phone: newNumber
        }
        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
            return
        }
        if (persons.some(person => person.phone === newNumber)) {
            alert(`${newNumber} is already added to phonebook`)
            return
        }
        if (newName === '' || newNumber === '') {
            alert('Please enter name and number')
            return
        }
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
    }

    const personsToShow = filter === ''
        ? persons
        : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))


    return (
        <div>
            <h2>Phonebook</h2>
            <Filter filter={filter} setFilter={setFilter}/>
            <h2>Add a new</h2>
            <PersonForm addPerson={addPerson} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber}/>
            <h2>Numbers</h2>
            <Persons personsToShow={personsToShow}/>
        </div>
    )
}

export default App;
