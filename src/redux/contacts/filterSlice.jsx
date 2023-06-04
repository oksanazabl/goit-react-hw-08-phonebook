import { createSlice } from '@reduxjs/toolkit';

const filterState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterState,

  reducers: {
    setFilterContacts: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});

export const { setFilterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
