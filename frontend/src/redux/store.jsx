// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import apiReducer from './apiSlice'; // Import the new apiSlice

const store = configureStore({
  reducer: {
    theme: themeReducer,
    api: apiReducer, // Add the api reducer here
  },
});

export default store;
