import React from 'react';
import c from './ContactListItem.module.css';
import PropTypes from 'prop-types';

const ContactListItem = ({ name, phone, onDeleteContact }) => {
  return (
    <>
      <p>{name + ': ' + phone}</p>
      <button type="button" onClick={onDeleteContact} className={c.btn__item}>
        Delete
      </button>
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
