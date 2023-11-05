import { useDispatch, useSelector } from 'react-redux';
import { StyledList, StyledItem, StyledBtn } from './ContactList.styled';
import {
  selectContacts,
  selectContactsError,
  selectContactsIsLoading,
  selectFilter,
} from 'redux/selectors';
import { deleteContact, fetchContacts } from 'redux/contactsSlice';
import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const erorr = useSelector(selectContactsError);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      {isLoading && <div>Loaging...</div>}
      {erorr && <div>`${erorr}`</div>}
      <StyledList>
        {filteredContacts.map(({ id, name, phone }) => {
          return (
            <StyledItem key={id}>
              <span className="name">{name}</span>
              <span className="number">{phone}</span>
              <StyledBtn
                type="button"
                onClick={() => {
                  dispatch(deleteContact(id));
                }}
              >
                Delete
              </StyledBtn>
            </StyledItem>
          );
        })}
      </StyledList>
    </>
  );
};
