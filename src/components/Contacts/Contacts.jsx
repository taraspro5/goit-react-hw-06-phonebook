import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactsSearchName } from 'components/ContactsSearchName/ContactsSearchName';

export const Contacts = () => {
  return (
    <>
      <h2>Contacts</h2>
      <ContactsSearchName />
      <ContactsList />
    </>
  );
};
