import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    currentAnimal: null,
    prevAnimals: [],
  },
  reducers: {
    setAnimal: (state, action) => {
      // if (state.currentAnimal) {
      //   state.prevAnimals = [...state.prevAnimals, state.currentAnimal];
      // }

      state.currentAnimal = action.payload;
    },
  }
})

export const { setAnimal } = appSlice.actions;

export default appSlice.reducer;