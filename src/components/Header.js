import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    let count = 0;
    const onClick = () => {
        console.log(` Clickk ${count++}`);
    }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button onClick={onClick} color="green" text="Hello" />
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
