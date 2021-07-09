import { configureStore } from '@reduxjs/toolkit';
import { animalMapApi } from './animalMapApiSlice';
import appReducer from './appSlice';
import mapReducer from '../components/map/mapSlice';
import sidebarReducer from '../components/sidebar/sidebarSlice';
import modalReducer from '../components/modal/modalSlice';

export default configureStore({
  reducer: {
    [animalMapApi.reducerPath]: animalMapApi.reducer,
    app: appReducer,
    map: mapReducer,
    sidebar: sidebarReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(animalMapApi.middleware),
});