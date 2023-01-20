import React from 'react';
import Statistic from "./Statistic.jsx";

const Statistics = (props) => {
    if (props.good + props.neutral + props.bad === 0) {
        return (
            <div>
                <p>No feedback given</p>
            </div>
        );
    }
    return (
        <table>
            <tbody>
                <Statistic text="good" value={props.good}/>
                <Statistic text="neutral" value={props.neutral}/>
                <Statistic text="bad" value={props.bad}/>
                <Statistic text="all" value={props.good + props.neutral + props.bad}/>
                <Statistic text="average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)}/>
                <Statistic text="positive" value={props.good / (props.good + props.neutral + props.bad) * 100 + "%"}/>
            </tbody>
        </table>
    )
};

export default Statistics;
