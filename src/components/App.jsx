import { useEffect, useState } from 'react';
import { PhoneBookForm } from './PhoneBookForm/PhoneBookForm';
import { Contacts } from './Contacts/Contacts';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts-storage');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts-storage', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = newContact => {
    const isNameAlready = contacts.find(
      contact => contact.name === newContact.name
    );

    if (isNameAlready) {
      return alert(`${newContact.name} is already in contacts.`);
    }
    setContacts(prevState => [...prevState, { ...newContact, id: nanoid() }]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = newFilter => {
    setFilter(newFilter);
  };

  const contactsList = () => {
    const newFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(newFilter)
    );
  };

  return (
    <>
      <PhoneBookForm onAdd={addContact} />
      <Contacts
        contacts={contactsList()}
        filter={filter}
        onChange={changeFilter}
        onDelete={deleteContact}
      />
    </>
  );
};
