import css from './PhonebookFilter.module.css';
import { useDispatch } from 'react-redux';
import { setFilterContacts } from 'redux/contacts/filterSlice';

const PhonebookFilter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
   dispatch(setFilterContacts(e.target.value));
  };
  
  return (
    <>
      <label className={css.filter}>
        <p>Search contacts by name</p>
        <input
          name="filter"
          onInput={onChange}
          type="text"
          placeholder="Search contacts by name"
      
        />
      </label>
    </>
  );
};

export default PhonebookFilter;
