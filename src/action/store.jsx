import { configureStore } from '@reduxjs/toolkit';
import podiaReducer from './reducers/podiaSlice';

export const store = configureStore({
	reducer: { podiaTemplate: podiaReducer }
});
