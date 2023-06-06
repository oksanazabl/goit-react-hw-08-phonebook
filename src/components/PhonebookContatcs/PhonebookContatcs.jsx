import css from './PhonebookContatcs.module.css';
import  {CiUser, GrClose}from 'react-icons/io5';
import { deleteContact } from 'redux/contacts/operations';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectContactsFilter } from 'redux/contacts/selectors';
import { changeFilter } from 'redux/contacts/filterSlice';

const PhonebookContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectContactsFilter);

 

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const getVisibilityContacts = () => {
    if (!filterValue || filterValue === '') {
      return contacts;
    } return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    )
  };

const filteredContacts = getVisibilityContacts()
  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.contact_item} key={id}>
          <CiUser/>
          {name}: {number}
          <button
            className={css.button}
            type="button"
            onClick={() => handleDeleteContact(id)}
          >
           <GrClose/> Delete Contact
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PhonebookContacts;
