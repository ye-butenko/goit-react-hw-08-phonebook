import { Formik } from 'formik';
import { StyledBtn, StyledForm, StyledField } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      name: values.name,
      phone: values.phone,
    };

    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      dispatch(addContact(newContact));
    }

    resetForm();
  };

  const initialValues = {
    name: '',
    phone: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <StyledForm>
        <>
          <label htmlFor="name">Name:</label>
          <StyledField
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            required
          />
        </>
        <>
          <label htmlFor="phone">Number:</label>
          <StyledField type="tel" id="phone" name="phone" required />
        </>
        <StyledBtn type="submit">Add contact</StyledBtn>
      </StyledForm>
    </Formik>
  );
};
