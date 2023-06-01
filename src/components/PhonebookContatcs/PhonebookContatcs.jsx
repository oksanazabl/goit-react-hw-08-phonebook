import css from './PhonebookContatcs.module.css';

import { deleteContact } from 'redux/operations';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts  } from 'redux/selectors';
import { getFilter } from 'redux/filterSlice';

const PhonebookContacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(getFilter);

   const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue)
  );


  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.contact_item} key={id}>
          {name}: {number}
          <button
            className={css.button}
            type="button"
            onClick={() => handleDeleteContact(id)}
          >
            Delete Contact
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PhonebookContacts;
