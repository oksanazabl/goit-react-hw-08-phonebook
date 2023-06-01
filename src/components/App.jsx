import { useSelector, useDispatch } from 'react-redux';
import Container from './Container';
import PhonebookForm from './PhonebookForm';
import PhonebookContacts from './PhonebookContatcs';
import PhonebookFilter from './PhonebookFilter';
import { useEffect } from 'react';
import { selectContacts,  selectIsLoading, selectError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';

function App() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
 
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h2>Contacts</h2>
      {contacts.length > 1 && <PhonebookFilter />}
       {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
   
      <PhonebookContacts />
    </Container>
  );
}

export default App;
