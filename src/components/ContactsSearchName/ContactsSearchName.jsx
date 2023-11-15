import { useDispatch, useSelector } from 'react-redux';
import { Container } from './ContactsSearchName.styled';
import { changeFilter } from 'redux/filterSlice';

export const ContactsSearchName = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <Container>
      <label>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      ></input>
    </Container>
  );
};
