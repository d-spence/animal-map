import { createSlice } from '@reduxjs/toolkit';

export const mapSlice = createSlice({
  name:'map',
  initialState: {
    activeLocation: null,
    prevLocations: [],
  },
  reducers: {
    setLocation: (state, action) => {
      if (state.activeLocation) {
        state.prevLocations = [...state.prevLocations, state.activeLocation];
      }

      state.activeLocation = action.payload;
    },
  }
});

export const { setLocation } = mapSlice.actions;

export default mapSlice.reducer;