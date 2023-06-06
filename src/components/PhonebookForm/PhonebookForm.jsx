import css from './PhonebookForm.module.css';
import React from 'react';
import { addContact } from '../../redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { selectContacts } from 'redux/contacts/selectors';

const PhonebookForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact({ id: nanoid(), name, number }));
    }

    form.reset();
  };


  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>Name:</label>
      <input
        className={css.input}
        type="text"
        name="name"
         
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        
        placeholder="Name"
      />
      <label className={css.label}>Phone number:</label>
      <input
        className={css.input}
        type="tel"
        name="number"
        
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        
        placeholder="Phone number"
      />
      <button className={css.button} type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default PhonebookForm;
