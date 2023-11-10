import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/authSlice';
import { selectAuthUserData } from 'redux/selectors';
import { StyledBtn } from './ContactForm/ContactForm.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(selectAuthUserData);

  const onLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <div className="userMenu">
      <p>{email}</p>
      <StyledBtn onClick={onLogOut}>Logout</StyledBtn>
    </div>
  );
};

export default UserMenu;
