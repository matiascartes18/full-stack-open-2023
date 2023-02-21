import React from 'react';
import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Total from "./Total.jsx";

const Course = (props) => {
    return (
        <div>
            <h1>Web development curriculum</h1>
            {props.courses.map((course) => {
                return (
                    <div key={course.id}>
                        <Header course={course} />
                        <Content course={course} />
                        <Total course={course} />
                    </div>
                )
            }
            )}
        </div>
    );
};

export default Course;
