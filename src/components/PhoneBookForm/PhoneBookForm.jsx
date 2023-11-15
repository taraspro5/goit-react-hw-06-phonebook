import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';
import { Button, Label, StyledForm } from './PhoneBookForm.styled';
// import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

// const phoneBookSchema = Yup.object.shape({
//   name: Yup.string().min(2, 'Too short!').required('This field is required!'),
//   number: Yup.string().min(9, 'Too short!').required('This field is required!'),
// });

export const PhoneBookForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);

  return (
    <div>
      <h1>Phonebook</h1>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        // validationSchema={phoneBookSchema}
        onSubmit={(values, form) => {
          const isContactInBook = contacts.find(
            contact => contact.name === values.name
          );
          if (isContactInBook) {
            alert(`${values.name} is already in contacts.`);
          } else {
            dispatch(addContact(values));
          }
          form.resetForm();
        }}
      >
        <StyledForm>
          <Label>
            <label>Name</label>
            <Field id={nanoid()} name="name" required />
          </Label>

          <Label>
            <label>Number</label>
            <Field id={nanoid()} type="tel" name="number" required />
          </Label>

          <Button type="submit">Add contact</Button>
        </StyledForm>
      </Formik>
    </div>
  );
};
