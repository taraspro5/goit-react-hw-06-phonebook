import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  margin: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  gap: 30px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Button = styled.button`
  padding: 3px;
  background-color: transparent;
  border: 1px solid black;
  border-radius: 4px;
`;
