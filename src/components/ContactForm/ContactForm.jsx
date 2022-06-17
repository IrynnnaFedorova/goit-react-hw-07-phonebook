import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemsOperations, itemsSelectors } from 'redux/contacts/items';
import c from './ContactForm.module.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const contacts = useSelector(itemsSelectors.getItems);

  const dispatch = useDispatch();

  const handleChange = e => {
    const { value } = e.target;
    switch (e.target.name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const isOldContact = contacts.find(contact => contact.name === name);

    if (isOldContact) {
      alert(`${name} is already in contacts`);
      setName('');
      return;
    }

    dispatch(itemsOperations.fetchAddContact({ name, phone }));

    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={c.form}>
        <label className={c.label}>
          Name
          <input
            className={c.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={handleChange}
            required
          />
        </label>

        <label className={c.label}>
          Number
          <input
            className={c.input}
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={phone}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className={c.form__btn}>
          Add contact
        </button>
      </form>
    </>
  );
}

export default ContactForm;
