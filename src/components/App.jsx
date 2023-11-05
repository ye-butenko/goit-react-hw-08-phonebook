import React from 'react';

import { StyledContainer } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
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
