import React, { useEffect } from 'react';
import c from './ContactList.module.css';
import ContactListItem from '../ContactListItem';
import { useSelector, useDispatch } from 'react-redux';
import { selectorsComposition } from 'redux/contacts/selector-composition';
import { itemsOperations } from 'redux/contacts/items';

const ContactList = () => {
  const contacts = useSelector(selectorsComposition.getVisibleContacts);

  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(itemsOperations.fetchDeleteContact(id));
  };

  useEffect(() => {
    dispatch(itemsOperations.fetchGetAllContacts());
  }, [dispatch]);

  return (
    <>
      <ul>
        {contacts.map(({ name, phone, id }) => (
          <li key={id} className={c.item}>
            <ContactListItem
              name={name}
              phone={phone}
              id={id}
              onDeleteContact={() => onDeleteContact(id)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactList;
