const Anecdote = ({anecdotes,selected,votes}) => {
    return (
        <div>
            <p>{anecdotes[selected]}</p>
            <p>has {votes[selected]} votes</p>
        </div>
    );
};

export default Anecdote;
