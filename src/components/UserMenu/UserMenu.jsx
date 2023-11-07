import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOutThunk } from 'redux/authSlice';
import { selectAuthUserData } from 'redux/selectors';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { email } = useSelector(selectAuthUserData);

  const onLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <div>
      <p>{email}</p>
      <button onClick={onLogOut}>Logout</button>
    </div>
  );
};

export default UserMenu;
