import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  requestAddContact,
  requestContacts,
  requestDeleteContact,
} from 'services/mockApi';

export const fetchContacts = createAsyncThunk(
  'contacts/getAll',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await requestContacts();

      return contacts;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, { rejectWithValue }) => {
    try {
      const contacts = await requestAddContact(newContact);

      return contacts;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      const contacts = await requestDeleteContact(contactId);

      return contacts;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const INITIAL_STATE = {
  items: [],
  isLoading: false,
  error: null,
};

const commonPendingReducer = state => {
  state.isLoading = true;
  state.error = null;
};

const commonRejectedReducer = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, commonPendingReducer)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, commonRejectedReducer)
      .addCase(addContact.pending, commonPendingReducer)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.unshift(action.payload);
      })
      .addCase(addContact.rejected, commonRejectedReducer)
      .addCase(deleteContact.pending, commonPendingReducer)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, commonRejectedReducer),
});

export const contactsReducer = contactsSlice.reducer;
