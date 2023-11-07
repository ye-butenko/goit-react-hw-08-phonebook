import { createSelector } from '@reduxjs/toolkit';

const selectPhonebook = state => state.phonebook;
const selectAuth = state => state.auth;

export const selectAuthIsLoading = createSelector(
  selectAuth,
  auth => auth.isLoading
);
export const selectAuthError = createSelector(selectAuth, auth => auth.error);
export const selectAuthToken = createSelector(selectAuth, auth => auth.token);
export const selectAuthUserData = createSelector(selectAuth, auth => auth.user);
export const selectAuthAuthenticated = createSelector(
  selectAuth,
  auth => auth.authenticated
);

export const selectContacts = createSelector(
  selectPhonebook,
  phonebook => phonebook.contacts
);
export const selectContactsIsLoading = createSelector(
  selectPhonebook,
  phonebook => phonebook.isLoading
);
export const selectContactsError = createSelector(
  selectPhonebook,
  phonebook => phonebook.error
);
export const selectContactsFilterTerm = createSelector(
  selectPhonebook,
  phonebook => phonebook.filterTerm
);
