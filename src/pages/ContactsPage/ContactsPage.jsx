import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Circles } from 'react-loader-spinner';
import { selectIsLoading, selectError } from '../../redux/contacts/selectors';
import PhonebookContatcs from '../../components/PhonebookContatcs/PhonebookContatcs';
import PhonebookFilter from 'components/PhonebookFilter';
import PhonebookForm from 'components/PhonebookForm';
import { fetchContacts } from '../../redux/contacts/operations';

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
      <PhonebookForm />
      <h2>Contacts</h2>
      <PhonebookFilter />
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
      <PhonebookContatcs />
    </div>
  );
};

export default ContactsPage;
