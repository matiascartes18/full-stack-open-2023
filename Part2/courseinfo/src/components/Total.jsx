const Total = (props) => {

    return (
        <div>
            <p>
                <b>Number of exercises {props.course.parts.reduce((sum, part) => sum + part.exercises, 0)}</b>
            </p>
        </div>
    );
};

export default Total;
