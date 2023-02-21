
const Notification = ({message, errorMessage}) => {
    if (message === null) {
        return null
    }
    return (
        <div className={errorMessage}>
            {message}
       </div>
    );
};

export default Notification;
