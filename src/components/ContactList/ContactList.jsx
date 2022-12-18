import PropTypes from 'prop-types';
import { User } from '../User/User';

export const ContactList = ({contacts, deleteContact }) => {
    return (contacts.map(contact => (
        <User deleteContact={deleteContact} key={contact.id} user={contact} />
    )));
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ),
};