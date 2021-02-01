import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, showAddTask, toggleShowAddTask }) => {
    let count = 0;

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button
                onClick={toggleShowAddTask}
                color={!showAddTask ? "green" : "dimgray"}
                text={!showAddTask ? "Add" : "❌"} />
        </header>
    );
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header;
