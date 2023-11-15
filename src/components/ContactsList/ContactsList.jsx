import { useDispatch, useSelector } from 'react-redux';
import { Button, List } from './ContactsList.styled';
import { deleteContact } from 'redux/contactsSlice';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const contactsAfterFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {contactsAfterFilter.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name} {contact.number}
            <Button onClick={() => dispatch(deleteContact(contact.id))}>
              Delete
            </Button>
          </li>
        );
      })}
    </List>
  );
};
