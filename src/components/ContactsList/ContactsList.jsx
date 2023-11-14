import { Button, List } from './ContactsList.styled';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name} {contact.number}
            <Button onClick={evt => onDelete(contact.id)}>Delete</Button>
          </li>
        );
      })}
    </List>
  );
};
