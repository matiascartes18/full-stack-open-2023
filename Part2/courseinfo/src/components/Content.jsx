import Part from "./Part.jsx";
const Content = (props) => {
    const parts = props.course.parts;
    return (
        <div>
            {parts.map((part) => <Part key={part.id} part={part.name} exercises={part.exercises} />)}
        </div>
    );
};

export default Content;
