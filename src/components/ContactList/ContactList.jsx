import React from 'react';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => (
 
   <ul>{contacts.map(({ name, number, id }) => (
  <li key={id}>
      <p>
        <span>{name}: </span>
        <span>{number}</span>
      </p>
        
      <button type="button" name="delte" onClick={() => deleteContact(id)}>
        delete
      </button>
        
    </li>))}
  </ul>

);

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
  })),
}