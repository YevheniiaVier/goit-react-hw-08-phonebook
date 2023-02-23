import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/contacts-selectors';
import { MyContacts } from 'components/MyContacts/MyContacts';
import { Section } from 'components/Section/Section';
import { Loader } from 'components/Loader/Loader';
const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  return <Section>{isLoading ? <Loader /> : <MyContacts />}</Section>;
};

export default ContactsPage;
