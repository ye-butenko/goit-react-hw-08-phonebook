import { Box, Link, Flex, Spacer } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { selectAuthAuthenticated } from 'redux/selectors';
import { NavLink } from 'react-router-dom';

import UserMenu from './UserMenu/UserMenu';

const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  return (
    <Box as="header" bg="teal.500" color="white" p={4}>
      <Flex alignItems="center">
        <Link as={NavLink} to="/" fontSize="xl" mr={4}>
          Home
        </Link>
        {authenticated ? (
          <>
            <Link as={NavLink} to="/contacts" fontSize="xl" mr={4}>
              Contacts
            </Link>
            <Spacer />
            <UserMenu />
          </>
        ) : (
          <>
            <Link as={NavLink} to="/login" fontSize="xl" mr={4}>
              Login
            </Link>
            <Link as={NavLink} to="/register" fontSize="xl">
              Register
            </Link>
          </>
        )}
      </Flex>
    </Box>
  );
};

export default Navigation;
