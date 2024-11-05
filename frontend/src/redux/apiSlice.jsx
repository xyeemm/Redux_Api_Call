// src/redux/apiSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

// Define an async thunk for fetching data
export const fetchData = createAsyncThunk('api/fetchData', async (endpoint) => {
  const response = await axios.get(endpoint);
  return response.data;
});

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const selectData = (state) => state.api.data;
export const selectLoading = (state) => state.api.loading;
export const selectError = (state) => state.api.error;

export default apiSlice.reducer;
