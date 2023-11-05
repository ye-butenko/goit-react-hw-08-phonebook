import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: '',

  reducers: {
    setContactFilter: (state, action) => action.payload,
  },
});

export const { setContactFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
