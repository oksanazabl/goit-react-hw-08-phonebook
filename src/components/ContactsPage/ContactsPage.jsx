import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import ContactList from './ContactList';

const ContactsPage = () => {
  const contacts = useSelector(selectContacts);

  return (
    <div>
      <h2>Contacts</h2>
      <ContactList contacts={contacts} />
    </div>
  );
};

export default ContactsPage;
