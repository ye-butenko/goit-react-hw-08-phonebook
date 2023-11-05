import { useDispatch, useSelector } from 'react-redux';
import { StyledLabel } from './Filter.styled';
import { selectFilter } from 'redux/selectors';
import { setContactFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <div>
      <StyledLabel htmlFor="filter">Find contacts by name</StyledLabel>
      <input
        name="filter"
        type="text"
        id="filter"
        value={filter}
        onChange={e => dispatch(setContactFilter(e.currentTarget.value))}
      />
    </div>
  );
};
