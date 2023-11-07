import { useDispatch, useSelector } from 'react-redux';
import { StyledLabel } from './Filter.styled';
import { selectContactsFilterTerm } from 'redux/selectors';
import { setFilterTerm } from 'redux/contactsSlice';

export const Filter = () => {
  const filter = useSelector(selectContactsFilterTerm);
  const dispatch = useDispatch();

  return (
    <div>
      <StyledLabel htmlFor="filter">Find contacts by name</StyledLabel>
      <input
        name="filter"
        type="text"
        id="filter"
        value={filter}
        onChange={e => dispatch(setFilterTerm(e.currentTarget.value))}
      />
    </div>
  );
};
