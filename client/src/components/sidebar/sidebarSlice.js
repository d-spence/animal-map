import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name:'sidebar',
  initialState: {
    hidden: true,
  },
  reducers: {
    show: state => {
      state.hidden = false;
    },
    hide: state => {
      state.hidden = true;
    },
    toggle: state => {
      state.hidden = !state.hidden;
    }
  }
});

export const { show, hide, toggle } = sidebarSlice.actions;

export default sidebarSlice.reducer;