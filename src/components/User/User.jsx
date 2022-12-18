import PropTypes from 'prop-types';

export const User = ({ contacts: { name, number, id }, deleteContact }) => {
    return (
        <li key={id}>
            <p>Name: {name}</p>
            <p>Number: {number}</p>
            <button onClick={() => deleteContact(id)}>Delete</button>
        </li>
    )
};

User.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.number.isRequired,
        id: PropTypes.string.isRequired,
    }),
    deleteContact: PropTypes.func.isRequired,
};