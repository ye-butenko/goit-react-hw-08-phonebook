import axios from 'axios';

const contactsList = axios.create({
  baseURL: 'https://653d6da3f52310ee6a9a2aa7.mockapi.io/',
});

export const requestContacts = async () => {
  const { data } = await contactsList.get('/contacts');
  return data;
};

export const requestAddContact = async newContact => {
  const { data } = await contactsList.post('/contacts', newContact);
  return data;
};

export const requestDeleteContact = async contactId => {
  const { data } = await contactsList.delete(`/contacts/${contactId}`);
  return data;
};
