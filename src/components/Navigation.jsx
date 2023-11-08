import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthAuthenticated } from 'redux/selectors';

const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        {authenticated ? (
          <>
            <NavLink to="/contacts">Contacts</NavLink>
            <UserMenu />
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
