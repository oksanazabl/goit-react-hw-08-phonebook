// import css from './PhonebookContatcs.module.css';
// import { CiUser } from 'react-icons/ci';
// import { GrClose } from 'react-icons/gr';
import { deleteContact } from 'redux/contacts/operations';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectContactsFilter } from 'redux/contacts/selectors';

const PhonebookContacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectContactsFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (

        <li key={id}>
         <span>
              {name}: {number}
            </span>
          <button
            
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
           Delete Contact
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PhonebookContacts;
