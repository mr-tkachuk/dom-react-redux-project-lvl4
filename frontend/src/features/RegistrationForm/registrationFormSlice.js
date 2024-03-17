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
      // eslint-disable-next-line no-param-reassign
      state.error = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.error = undefined;
        // eslint-disable-next-line no-param-reassign
        state.isLoading = true;
      })
      .addCase(signUp.fulfilled, (state) => {
        // eslint-disable-next-line no-param-reassign
        state.isLoading = false;
      })
      .addCase(signUp.rejected, (state, action) => {
        // eslint-disable-next-line no-param-reassign
        state.isLoading = false;
        // eslint-disable-next-line no-param-reassign
        state.error = action.payload;
      });
  },
});

export const { actions: registrationFormActions } = registrationFormSlice;
export const { reducer: registrationFormReducer } = registrationFormSlice;
