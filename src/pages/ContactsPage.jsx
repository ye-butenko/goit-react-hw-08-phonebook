import React from 'react';

import { StyledContainer } from 'components/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

const ContactsPage = () => {
  return (
    <StyledContainer>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </StyledContainer>
  );
};

export default ContactsPage;
