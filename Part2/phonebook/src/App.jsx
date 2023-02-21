import {useState, useEffect} from 'react'
import Filter from "./components/Filter.jsx";
import PersonForm from "./components/PersonForm.jsx";
import Persons from "./components/Persons.jsx";
import axios from 'axios'
import services from "./services.js";
import Notification from "./components/Notification.jsx";
import './main.css'

const App = () => {
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [filter, setFilter] = useState('')
    const [message, setMessage] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)

    useEffect(() => {
            axios
                .get('http://localhost:3001/persons')
                .then(response => {
                    setPersons(response.data)
                })
        },[])


    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber
        }
        if (persons.some(person => person.name === newName)) {
            const result = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
            if (result) {
                const person = persons.find(p => p.name === newName)
                const changedPerson = {...person, number: newNumber}
                services
                    .update(person.id, changedPerson)
                    .then(returnedPerson => {
                        setPersons(persons.map(p => p.id !== person.id ? p : returnedPerson))
                        setNewName('')
                        setNewNumber('')
                        setMessage(`Updated ${returnedPerson.name}`)
                        setErrorMessage("success")
                        setTimeout(() => {
                            setMessage(null)
                        }, 5000)
                    })
            }
            return
        }
        if (persons.some(person => person.number === newNumber)) {
            alert(`${newNumber} is already added to phonebook`)
            return
        }
        if (newName === '' || newNumber === '') {
            alert('Please enter name and number')
            return
        }
        services
            .create(personObject)
            .then(returnedPerson => {
                setPersons(persons.concat(returnedPerson))
                setNewName('')
                setNewNumber('')
                setMessage(`Added ${returnedPerson.name}`)
                setErrorMessage("success")
                setTimeout(() => {
                    setMessage(null)
                }, 5000)
            })
    }

    const deletePerson = (id) => {
        const person = persons.find(p => p.id === id)
        const result = window.confirm(`Delete ${person.name}?`)
        if (result) {
            services
                .remove(id)
                .then(() => {
                    setPersons(persons.filter(p => p.id !== id))
                    setMessage(`Deleted ${person.name}`)
                    setErrorMessage("success")
                    setTimeout(() => {
                        setMessage(null)
                    }, 5000)
                })
                .catch(error => {
                    setMessage(`Information of ${person.name} has already been removed from server`)
                    setErrorMessage("error")
                    setTimeout(() => {
                        setMessage(null)
                    }, 5000)
                    setPersons(persons.filter(p => p.id !== id))
                })

        }
    }

    const personsToShow = filter === ''
        ? persons
        : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))


    return (
        <div>
            <h2>Phonebook</h2>
            <Notification message={message} errorMessage={errorMessage}/>
            <Filter filter={filter} setFilter={setFilter}/>
            <h2>Add a new</h2>
            <PersonForm addPerson={addPerson} newName={newName} setNewName={setNewName} newNumber={newNumber}
                        setNewNumber={setNewNumber}/>
            <h2>Numbers</h2>
            <Persons personsToShow={personsToShow} deletePerson={deletePerson}/>
        </div>
    )
}

export default App;
