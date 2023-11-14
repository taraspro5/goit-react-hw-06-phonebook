import { Container } from './ContactsSearchName.styled';

export const ContactsSearchName = ({ filter, onChange }) => {
  return (
    <Container>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        onChange={evt => onChange(evt.currentTarget.value)}
      ></input>
    </Container>
  );
};
