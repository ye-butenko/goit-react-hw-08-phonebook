import { useDispatch, useSelector } from 'react-redux';
import { StyledList, StyledItem, StyledBtn } from './ContactList.styled';
import {
  selectContacts,
  selectContactsError,
  selectContactsFilterTerm,
  selectContactsIsLoading,
} from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/contactsSlice';
import { useEffect } from 'react';
import Loader from 'components/Loader';

import DeleteIcon from '@mui/icons-material/Delete';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const erorr = useSelector(selectContactsError);
  const filter = useSelector(selectContactsFilterTerm);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {isLoading && <Loader />}
      {erorr && <div>`${erorr}`</div>}
      <StyledList>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <StyledItem key={id}>
              <span className="name">{name}</span>
              <span className="number">{number}</span>
              <StyledBtn
                type="button"
                onClick={() => {
                  dispatch(deleteContact(id));
                }}
              >
                <DeleteIcon />
              </StyledBtn>
            </StyledItem>
          );
        })}
      </StyledList>
    </>
  );
};
