import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CounterSlice';

// Configure the Redux store
export const store = configureStore({
  reducer: {
    counter: counterReducer, // Add the counter reducer to the store
  },
});

// Define RootState and AppDispatch types for better type inference
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;