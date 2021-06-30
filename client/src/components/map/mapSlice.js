import { createSlice } from '@reduxjs/toolkit';

export const mapSlice = createSlice({
  name:'map',
  initialState: {
    currentLocation: null,
    prevLocations: [],
  },
  reducers: {
    setLocation: (state, action) => {
      if (state.currentLocation) {
        state.prevLocations = [...state.prevLocations, state.currentLocation];
      }

      state.currentLocation = action.payload;
    },
  }
});

export const { setLocation } = mapSlice.actions;

export default mapSlice.reducer;