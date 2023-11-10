import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuthAuthenticated } from 'redux/selectors';
import UserMenu from 'components/UserMenu';

import { StyledHeader, StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  return (
    <StyledHeader>
      <nav>
        <StyledNavLink to="/">Home</StyledNavLink>

        {authenticated ? (
          <>
            <StyledNavLink to="/contacts">Contacts</StyledNavLink>
            <UserMenu />
          </>
        ) : (
          <>
            <StyledNavLink to="/login">Login</StyledNavLink>
            <StyledNavLink to="/register">Register</StyledNavLink>
          </>
        )}
      </nav>
    </StyledHeader>
  );
};

export default Navigation;
