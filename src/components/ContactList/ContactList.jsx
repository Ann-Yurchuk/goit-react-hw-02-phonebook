import PropTypes from 'prop-types';

 export const ContactList = ({ contacts,  deleteContact}) => (
  <ul>{contacts.map((contact) => (
      <li key={contact.id}>
        {contact.name + ":" + contact.number}
        {
          <button type="button" name="delte" onClick={() => deleteContact(contact.id)}>
            delete
          </button>
        }
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
  })),
}