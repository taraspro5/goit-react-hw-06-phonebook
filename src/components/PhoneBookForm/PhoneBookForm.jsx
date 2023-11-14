import { Formik, Field } from 'formik';
import { nanoid } from 'nanoid';
import { Button, Label, StyledForm } from './PhoneBookForm.styled';
// import * as Yup from 'yup';

// const phoneBookSchema = Yup.object.shape({
//   name: Yup.string().min(2, 'Too short!').required('This field is required!'),
//   number: Yup.string().min(9, 'Too short!').required('This field is required!'),
// });

export const PhoneBookForm = ({ onAdd }) => {
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
          onAdd(values);
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
