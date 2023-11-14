import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactsSearchName } from 'components/ContactsSearchName/ContactsSearchName';

export const Contacts = ({ contacts, filter, onChange, onDelete }) => {
  return (
    <>
      <h2>Contacts</h2>
      <ContactsSearchName filter={filter} onChange={onChange} />
      <ContactsList contacts={contacts} onDelete={onDelete} />
    </>
  );
};
