import { configureStore } from '@reduxjs/toolkit';
import mapReducer from '../components/map/mapSlice';
import sidebarReducer from '../components/sidebar/sidebarSlice';

export default configureStore({
  reducer: {
    map: mapReducer,
    sidebar: sidebarReducer,
  }
});