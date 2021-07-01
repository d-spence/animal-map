import { configureStore } from '@reduxjs/toolkit';
import { animalMapApi } from './animalMapApiSlice';
import mapReducer from '../components/map/mapSlice';
import sidebarReducer from '../components/sidebar/sidebarSlice';

export default configureStore({
  reducer: {
    [animalMapApi.reducerPath]: animalMapApi.reducer,
    map: mapReducer,
    sidebar: sidebarReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(animalMapApi.middleware),
});