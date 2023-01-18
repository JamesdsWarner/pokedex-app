import { createSlice } from '@reduxjs/toolkit';

export const chosenFiltersSlice = createSlice({
  name: 'chosenFilters',
  initialState: {
    chosenType: 'Select',
    searchString: '',
  },

  reducers: {
    chooseType: (state, action) => {
      state.chosenType = action.payload;
    },
    setSearchString: (state, action) => {
      //   console.log(action.payload);
      state.searchString = action.payload;
    },
  },
});

export const { chooseType, setSearchString } = chosenFiltersSlice.actions;

export default chosenFiltersSlice.reducer;
