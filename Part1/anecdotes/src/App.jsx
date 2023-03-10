import { useState } from 'react'
import Anecdote from "./components/Anecdote.jsx";
const App = () => {
    const [selected, setSelected] = useState(0)
    const points = new Array(6).fill(0)
    const [votes, setVotes] = useState(points)

    const handleNext = () => {
        setSelected(Math.floor(Math.random() * 6))
    }
    const handleVote = () => {
        const copy = [...votes]
        copy[selected] += 1
        setVotes(copy)
    }

    console.log(votes)
    console.log(points)
    console.log(selected)
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ]

    return (
        <div>
            <h1>Anecdote of the day</h1>
            <Anecdote anecdotes = {anecdotes} selected={selected} votes={votes}/>
            <button onClick= {handleNext}>next anecdote</button>
            <button onClick= {handleVote}>voted</button>
            <h1>Anecdote with most votes</h1>
            <Anecdote anecdotes = {anecdotes} selected={votes.indexOf(Math.max(...votes))} votes={votes}/>
        </div>
    )
}

export default App


