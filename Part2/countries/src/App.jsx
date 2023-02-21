import {useEffect, useState} from 'react'
import axios from 'axios'
import Weather from "./components/Weather.jsx";
function App() {
    const [name, setName] = useState('')
    const [countries, setCountries] = useState([])


    useEffect(() => {
        axios
            .get('https://restcountries.com/v3.1/all')
            .then(response => {
                setCountries(response.data)
            })
    }, [])

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const countriesToShow = name === ''
        ? countries
        : countries.filter(country => country.name.common.toLowerCase().includes(name.toLowerCase()))


    return (
        <div>
            <form onSubmit={(event) => event.preventDefault()}>
                <div>
                    find countries <input value={name} onChange={handleNameChange}/>
                </div>
            </form>
            {countriesToShow.length === 0
                ? <div>No matches </div>
                : countriesToShow.length > 10
                    ? <div>Too many matches, specify another filter</div>
                    : countriesToShow.length === 1
                        ? <div>
                            <h1>{countriesToShow[0].name.common}</h1>
                            <div>capital {countriesToShow[0].capital[0]}</div>
                            <div>population {countriesToShow[0].population}</div>
                            <h2>languages</h2>
                            <ul>
                                {Object.values(countriesToShow[0].languages).map(language => <li
                                    key={language}>{language}</li>)}
                            </ul>

                            <img src={countriesToShow[0].flags.png} alt={"flag"}/>
                            <Weather capital={countriesToShow[0].capital[0]}/>


                        </div>
                        :
                        <div>
                            {countriesToShow.map(country =>
                                <div key={country.name.common}>
                                    {country.name.common}
                                    <button onClick={() => setName(country.name.common)}>show</button>
                                </div>)}
                        </div>
            }
        </div>)
}

export default App
