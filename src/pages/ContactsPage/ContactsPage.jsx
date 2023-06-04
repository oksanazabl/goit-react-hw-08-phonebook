import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Circles } from 'react-loader-spinner';

import { selectContacts } from 'redux/contacts/selectors';
import ContactList from '../../components/PhonebookContatcs/PhonebookContatcs';
import   Filter   from 'components/filter/Filter';
import ContactForm from 'components/form/ContactForm';
import { selectIsLoading, selectError } from '../../redux/contacts/selectors';

const ContactsPage = () => {
   const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);


  return (
    <div>
      <h1>Your phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && (
         <Circles
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
         )}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
