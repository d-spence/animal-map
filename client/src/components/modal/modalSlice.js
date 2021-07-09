import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name:'modal',
  initialState: {
    hidden: true,
    strictClose: false,
    type: null,
    data: {},
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
    },
    setStrictClose: (state, action) => {
      state.strictClose = action.payload ?? false;
    },
    setType: (state, action) => {
      state.type = action.payload ?? null;
    },
    setData: (state, action) => {
      state.data = action.payload ?? {};
    }
  }
});

export const { show, hide, toggle, setStrictClose, setType, setData } = modalSlice.actions;

export default modalSlice.reducer;