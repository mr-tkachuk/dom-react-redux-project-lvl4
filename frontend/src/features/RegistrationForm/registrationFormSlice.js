import { createSlice } from '@reduxjs/toolkit';
import signUp from './signUp';

const initialState = {
  error: '',
  isLoading: false,
};

export const registrationFormSlice = createSlice({
  name: 'registrationForm',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: registrationFormActions } = registrationFormSlice;
export const { reducer: registrationFormReducer } = registrationFormSlice;
